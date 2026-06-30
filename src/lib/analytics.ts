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

export const trackPageView = (page: string, title?: string) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: page,
        page_title: title || document.title,
      });
    }
  }
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    if (typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent(
    "Button",
    "Click",
    `${buttonName}${location ? ` - ${location}` : ""}`,
  );
};

export const trackFormSubmission = (
  formName: string,
  success: boolean = true,
) => {
  trackEvent("Form", success ? "Submit" : "Error", formName);
};

export const trackConversion = (conversionName: string, value?: number) => {
  const preferences = getConsentPreferences();

  if (preferences?.marketing) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        conversion_name: conversionName,
        value: value,
        currency: "USD",
      });
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", conversionName, {
        value: value,
        currency: "USD",
      });
    }
  }
};

export const identifyUser = (userId: string, traits?: Record<string, unknown>) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    if (typeof window.gtag === "function") {
      window.gtag("set", "user_id", userId);

      if (traits) {
        window.gtag("set", "user_properties", traits);
      }
    }
  }
};

export const trackOutboundLink = (url: string, label?: string) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "Outbound Link",
        event_label: label || url,
        transport_type: "beacon",
      });
    }
  }
};

export const trackVideoInteraction = (
  action: "play" | "pause" | "complete",
  videoTitle: string,
) => {
  trackEvent("Video", action, videoTitle);
};

export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "search", {
        search_term: searchTerm,
        results_count: resultsCount,
      });
    }
  }
};

export const trackDownload = (fileName: string, fileType?: string) => {
  trackEvent(
    "Download",
    "File",
    `${fileName}${fileType ? ` (${fileType})` : ""}`,
  );
};

export const trackError = (errorMessage: string, errorType?: string) => {
  const preferences = getConsentPreferences();

  if (preferences?.analytics) {
    if (typeof window.gtag === "function") {
      window.gtag("event", "exception", {
        description: errorMessage,
        error_type: errorType,
        fatal: false,
      });
    }
  }
};

export const initializeConsentMode = () => {
  const preferences = getConsentPreferences();

  if (!preferences) {
    if (typeof window.gtag === "function") {
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
    if (typeof window.gtag === "function") {
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

export const isAnalyticsEnabled = (): boolean => {
  const preferences = getConsentPreferences();
  return preferences?.analytics || false;
};

export const isMarketingEnabled = (): boolean => {
  const preferences = getConsentPreferences();
  return preferences?.marketing || false;
};
