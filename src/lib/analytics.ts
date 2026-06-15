/**
 * Consent-aware analytics wrapper for endevo.life
 * Respects user cookie preferences before tracking
 */

interface CookiePreferences {
  strictlyNecessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const getConsentPreferences = (): CookiePreferences | null => {
  const saved = localStorage.getItem("endevo_cookie_preferences");
  return saved ? JSON.parse(saved) : null;
};

/**
 * Track page views with Google Analytics
 */
export const trackPageView = (page: string, title?: string) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "page_view", {
        page_path: page,
        page_title: title || document.title,
      });
    }
  }
};

/**
 * Track custom events
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent(
    "Button",
    "Click",
    `${buttonName}${location ? ` - ${location}` : ""}`,
  );
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (
  formName: string,
  success: boolean = true,
) => {
  trackEvent("Form", success ? "Submit" : "Error", formName);
};

/**
 * Track conversions
 */
export const trackConversion = (conversionName: string, value?: number) => {
  const preferences = getConsentPreferences();

  if (preferences?.marketing) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "conversion", {
        conversion_name: conversionName,
        value: value,
        currency: "USD",
      });
    }

    // Facebook Pixel conversion tracking
    // @ts-ignore
    if (typeof window.fbq === "function") {
      // @ts-ignore
      window.fbq("track", conversionName, {
        value: value,
        currency: "USD",
      });
    }
  }
};

/**
 * Identify user (for logged-in users)
 */
export const identifyUser = (userId: string, traits?: Record<string, any>) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("set", "user_id", userId);

      if (traits) {
        // @ts-ignore
        window.gtag("set", "user_properties", traits);
      }
    }
  }
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string, label?: string) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "click", {
        event_category: "Outbound Link",
        event_label: label || url,
        transport_type: "beacon",
      });
    }
  }
};

/**
 * Track video interactions
 */
export const trackVideoInteraction = (
  action: "play" | "pause" | "complete",
  videoTitle: string,
) => {
  trackEvent("Video", action, videoTitle);
};

/**
 * Track search queries
 */
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "search", {
        search_term: searchTerm,
        results_count: resultsCount,
      });
    }
  }
};

/**
 * Track downloads
 */
export const trackDownload = (fileName: string, fileType?: string) => {
  trackEvent(
    "Download",
    "File",
    `${fileName}${fileType ? ` (${fileType})` : ""}`,
  );
};

/**
 * Track errors (only if analytics enabled)
 */
export const trackError = (errorMessage: string, errorType?: string) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("event", "exception", {
        description: errorMessage,
        error_type: errorType,
        fatal: false,
      });
    }
  }
};

/**
 * Initialize consent mode (call on app startup)
 */
export const initializeConsentMode = () => {
  const preferences = getConsentPreferences();

  if (!preferences) {
    // Set default consent to denied (will be updated when user makes choice)
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted",
      });
    }
  } else {
    // Update consent based on saved preferences
    // @ts-ignore
    if (typeof window.gtag === "function") {
      // @ts-ignore
      window.gtag("consent", "update", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied",
        ad_user_data: preferences.marketing ? "granted" : "denied",
        ad_personalization: preferences.marketing ? "granted" : "denied",
        functionality_storage: preferences.functional ? "granted" : "denied",
        personalization_storage: preferences.functional ? "granted" : "denied",
        security_storage: "granted",
      });
    }
  }
};

/**
 * Check if analytics is enabled
 */
export const isAnalyticsEnabled = (): boolean => {
  const preferences = getConsentPreferences();
  return preferences?.analytics || false;
};

/**
 * Check if marketing is enabled
 */
export const isMarketingEnabled = (): boolean => {
  const preferences = getConsentPreferences();
  return preferences?.marketing || false;
};
