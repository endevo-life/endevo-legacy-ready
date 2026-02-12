import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { X, Cookie, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const CookieConsentBanner = () => {
  const [cookies, setCookie] = useCookies(["endevo-cookie-consent"]);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = cookies["endevo-cookie-consent"];
    if (!consent) {
      // Small delay to prevent flash on page load
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      setPreferences(consent);
    }
  }, [cookies]);

  const savePreferences = (prefs: typeof preferences) => {
    // Set cookie with 1 year expiration
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    
    setCookie("endevo-cookie-consent", prefs, {
      path: "/",
      expires: expirationDate,
      sameSite: "lax",
      secure: window.location.protocol === "https:",
    });
    
    setShowBanner(false);
    setShowSettings(false);
    
    // Trigger any analytics or tracking code here based on preferences
    if (typeof (window as any).gtag === 'function' && prefs.analytics) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-fade-in">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 text-lg">We Value Your Privacy</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content,
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  You can manage your preferences or learn more in our{" "}
                  <Link to="/legal/privacy-policy" className="text-brand-orange hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link to="/legal/cookie-policy" className="text-brand-orange hover:underline font-medium">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="border-gray-300 hover:bg-gray-50"
              >
                <Settings className="w-4 h-4 mr-2" />
                Customize
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectNonEssential}
                className="border-gray-300 hover:bg-gray-50"
              >
                Reject Non-Essential
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAcceptAll}
                className="bg-brand-orange hover:bg-brand-orange/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie preferences below. Some cookies are necessary for the site to function
              and cannot be disabled.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Strictly Necessary */}
            <div className="space-y-2 pb-4 border-b">
              <div className="flex items-center justify-between">
                <Label htmlFor="necessary" className="font-bold text-base">
                  Strictly Necessary Cookies
                </Label>
                <Switch
                  id="necessary"
                  checked={true}
                  disabled={true}
                  className="data-[state=checked]:bg-gray-400"
                />
              </div>
              <p className="text-sm text-gray-600">
                These cookies are essential for the website to function properly. They enable basic
                functions like page navigation and access to secure areas. The website cannot function
                properly without these cookies.
              </p>
            </div>

            {/* Functional */}
            <div className="space-y-2 pb-4 border-b">
              <div className="flex items-center justify-between">
                <Label htmlFor="functional" className="font-bold text-base cursor-pointer">
                  Functional Cookies
                </Label>
                <Switch
                  id="functional"
                  checked={preferences.functional}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, functional: checked })
                  }
                />
              </div>
              <p className="text-sm text-gray-600">
                These cookies enable enhanced functionality and personalization, such as remembering
                your preferences and settings. They may be set by us or by third-party providers.
              </p>
            </div>

            {/* Analytics */}
            <div className="space-y-2 pb-4 border-b">
              <div className="flex items-center justify-between">
                <Label htmlFor="analytics" className="font-bold text-base cursor-pointer">
                  Performance & Analytics Cookies
                </Label>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                />
              </div>
              <p className="text-sm text-gray-600">
                These cookies help us understand how visitors interact with our website by collecting
                and reporting information anonymously. This helps us improve our website and services.
              </p>
            </div>

            {/* Marketing */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing" className="font-bold text-base cursor-pointer">
                  Targeting & Marketing Cookies
                </Label>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                />
              </div>
              <p className="text-sm text-gray-600">
                These cookies are used to deliver advertisements more relevant to you and your interests.
                They may also be used to limit the number of times you see an advertisement and help
                measure the effectiveness of advertising campaigns.
              </p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={handleRejectNonEssential}
              className="w-full sm:w-auto"
            >
              Reject Non-Essential
            </Button>
            <Button
              onClick={handleSaveCustom}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90"
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsentBanner;
