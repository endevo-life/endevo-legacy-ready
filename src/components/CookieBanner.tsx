import React, { useState, useEffect } from "react";
import { X, Settings, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookiePreferences {
  strictlyNecessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "endevo_cookie_consent";
const COOKIE_PREFERENCES_KEY = "endevo_cookie_preferences";

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (saved) {
        const prefs = JSON.parse(saved);
        setPreferences(prefs);
        initializeTrackingServices(prefs);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    localStorage.setItem(
      "endevo_cookie_consent_date",
      new Date().toISOString(),
    );

    // Initialize services based on preferences
    initializeTrackingServices(prefs);
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const initializeTrackingServices = (prefs: CookiePreferences) => {
    // Google Analytics
    if (prefs.analytics) {
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    } else {
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    }

    // Marketing cookies (Facebook Pixel, etc.)
    if (prefs.marketing) {
      if (window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      }
      if (window.fbq) {
        window.fbq("consent", "grant");
      }
    } else {
      if (window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }
      if (window.fbq) {
        window.fbq("consent", "revoke");
      }
    }

    // Functional cookies
    if (prefs.functional) {
      if (window.gtag) {
        window.gtag("consent", "update", {
          functionality_storage: "granted",
          personalization_storage: "granted",
        });
      }
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center p-0 sm:p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-t-lg sm:rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Your Privacy Choices
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                We use cookies to enhance your experience on endevo.life
              </p>
            </div>
          </div>
          <button
            onClick={() => handleRejectNonEssential()}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close and reject non-essential cookies"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showDetails ? (
            /* Simple View */
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                We use cookies and similar technologies to provide essential
                services, improve functionality, analyze usage, and deliver
                personalized wellness content. You can customize your
                preferences or accept/reject all non-essential cookies.
              </p>

              <div className="bg-brand-teal/10 border border-brand-teal/30 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-brand-teal">Privacy First:</strong>{" "}
                  Essential cookies are always active. You control everything
                  else. Learn more in our{" "}
                  <a
                    href="/legal/cookie-policy"
                    className="text-brand-orange underline hover:no-underline"
                  >
                    Cookie Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/legal/privacy-policy"
                    className="text-brand-orange underline hover:no-underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            /* Detailed View */
            <div className="space-y-6">
              {/* Strictly Necessary */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Strictly Necessary Cookies
                  </h3>
                  <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    Always Active
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Essential for platform security, authentication, and core
                  functionality. These cannot be disabled.
                </p>
              </div>

              {/* Functional */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Functional Cookies
                  </h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          functional: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-orange/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-orange"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Remember your preferences like language, theme, and
                  accessibility settings for a personalized experience.
                </p>
              </div>

              {/* Analytics */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Performance & Analytics Cookies
                  </h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-orange/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-orange"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Help us understand how you use endevo.life so we can improve
                  performance, fix bugs, and enhance your experience. Includes
                  Google Analytics (anonymized IP).
                </p>
              </div>

              {/* Marketing */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Targeting & Marketing Cookies
                  </h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          marketing: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-orange/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-orange"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Show you relevant wellness content and advertisements based on
                  your interests. Includes social media pixels and retargeting
                  for personalized marketing.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" />
            {showDetails ? "Show Less" : "Customize Settings"}
          </button>

          <div className="flex gap-3 sm:ml-auto">
            <Button
              onClick={handleRejectNonEssential}
              variant="outline"
              className="flex-1 sm:flex-none"
            >
              Reject Non-Essential
            </Button>

            {showDetails ? (
              <Button
                onClick={handleSaveCustom}
                className="flex-1 sm:flex-none bg-brand-orange hover:bg-brand-orange/90"
              >
                Save Preferences
              </Button>
            ) : (
              <Button
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none bg-brand-orange hover:bg-brand-orange/90"
              >
                Accept All
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
