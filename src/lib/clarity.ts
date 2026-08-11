/**
 * Microsoft Clarity — consent-gated wrapper around @microsoft/clarity.
 *
 * Clarity records sessions and sets a first-party cookie, so it must not run
 * before the visitor accepts analytics cookies. The site defaults every
 * consent signal to "denied" (see index.html) and CookieBanner flips them on
 * choice; this module mirrors that contract. Clarity.init() injects the tag
 * the moment it is called, so it is called from the consent flow rather than
 * at import time.
 *
 * The project ID is read from VITE_CLARITY_PROJECT_ID. When it is unset —
 * local dev, preview builds, or before the Clarity project exists — every
 * function here is a no-op, so nothing breaks and no partial data pollutes
 * the production recordings.
 */

import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID as
  | string
  | undefined;

/**
 * Clarity.init() appends a fresh script tag every time it is called, so a
 * visitor toggling their cookie preferences must not re-run it. This tracks
 * whether the tag is already on the page for the life of the session.
 */
let initialized = false;

/**
 * Loads Clarity (once) and records the visitor's consent choices.
 *
 * `analytics` and `marketing` are passed through separately because the
 * banner tracks them separately and Consent Mode v2 distinguishes them:
 * analytics_Storage covers the recording/heatmap cookie, ad_Storage covers
 * advertising use. Collapsing both into one flag — as the older boolean
 * consent API does — would grant more than the visitor agreed to.
 */
export function applyClarityConsent(
  analyticsAllowed: boolean,
  marketingAllowed: boolean,
): void {
  if (!CLARITY_PROJECT_ID) return;

  // Nothing to consent to until the tag exists, and a visitor who declined
  // analytics should never cause it to load in the first place.
  if (!analyticsAllowed && !initialized) return;

  if (!initialized) {
    Clarity.init(CLARITY_PROJECT_ID);
    initialized = true;
  }

  Clarity.consentV2({
    analytics_Storage: analyticsAllowed ? "granted" : "denied",
    ad_Storage: marketingAllowed ? "granted" : "denied",
  });
}

/**
 * Tags the current Clarity session.
 *
 * Useful for segmenting recordings by page type (e.g. "blog-post") so heatmaps
 * can be filtered to the article template rather than averaged across the site.
 * No-ops unless Clarity has been initialized, so callers need not check consent.
 */
export function setClarityTag(key: string, value: string | string[]): void {
  if (!initialized) return;
  Clarity.setTag(key, value);
}

/**
 * Records a custom event, surfaced alongside Smart events in the dashboard.
 * No-ops unless Clarity has been initialized.
 */
export function trackClarityEvent(eventName: string): void {
  if (!initialized) return;
  Clarity.event(eventName);
}

/**
 * Prioritizes the current session for recording.
 *
 * Worth calling on high-intent moments — a demo request, a worksheet download —
 * so those sessions are retained rather than sampled away.
 */
export function upgradeClaritySession(reason: string): void {
  if (!initialized) return;
  Clarity.upgrade(reason);
}
