import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

/**
 * Records a GA4 event when an embedded GoHighLevel form is submitted.
 *
 * The forms (contact, waitlist, booking) live in iframes on link.endevo.life,
 * so the page never sees the submit itself. What it does see are the
 * postMessage calls the form makes to its parent afterwards — the embed
 * script parses them as arrays with the action name at index 0. None of the
 * actions is literally called "submitted"; the ones that only happen after a
 * successful submit are the sticky-contact write (GHL remembering the person
 * for prefill) and the parent-URL change (the thank-you redirect).
 *
 * Messages are accepted only from the GHL origin. In development every
 * payload is logged so the exact post-submit shape can be confirmed against a
 * real test submission and the match below tightened.
 */
const GHL_ORIGIN = "https://link.endevo.life";
const SUBMIT_ACTIONS = new Set([
  "set-sticky-contacts",
  "modify-parent-url",
  "form-submitted",
  "formSubmitted",
  "lc-form-submit",
]);

function actionOf(data: unknown): string | null {
  if (Array.isArray(data) && typeof data[0] === "string") return data[0];
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    for (const k of ["action", "type", "event"]) {
      if (typeof d[k] === "string") return d[k] as string;
    }
  }
  if (typeof data === "string") {
    try {
      return actionOf(JSON.parse(data));
    } catch {
      return /submit|success/i.test(data) ? data.slice(0, 40) : null;
    }
  }
  return null;
}

const GhlFormTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let fired = false;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== GHL_ORIGIN) return;
      const action = actionOf(e.data);
      if (import.meta.env.DEV) {
        console.debug("[ghl]", action ?? "(no action)", e.data);
      }
      if (!action || fired) return;
      if (SUBMIT_ACTIONS.has(action) || /submit|success/i.test(action)) {
        fired = true; // one submission, one event
        const formName =
          document.querySelector<HTMLIFrameElement>("iframe[data-form-name]")
            ?.dataset.formName ?? "ghl-form";
        trackEvent("lead", "form_submit", `${formName} · ${pathname}`);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [pathname]);

  return null;
};

export default GhlFormTracker;
