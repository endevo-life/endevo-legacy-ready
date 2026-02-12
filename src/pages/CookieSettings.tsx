import React, { useState, useEffect } from 'react';
import { Info, Save, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

interface CookiePreferences {
  strictlyNecessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieSettings: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load current preferences
    const saved = localStorage.getItem('endevo_cookie_preferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('endevo_cookie_preferences', JSON.stringify(preferences));
    localStorage.setItem('endevo_cookie_consent', 'true');
    localStorage.setItem('endevo_cookie_consent_date', new Date().toISOString());
    
    // Show saved message
    setSaved(true);
    
    // Reload page to apply changes
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleReset = () => {
    const essentialOnly: CookiePreferences = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
  };

  const cookieCategories = [
    {
      id: 'strictlyNecessary',
      title: 'Strictly Necessary Cookies',
      description: 'Essential for platform security, authentication, and core functionality. These cannot be disabled.',
      required: true,
      examples: 'Session tokens, CSRF protection, load balancing, cookie consent preferences'
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'Remember your preferences like language, theme, and accessibility settings for a personalized experience.',
      required: false,
      examples: 'Language preference, theme selection (dark/light mode), accessibility options, user interface customizations'
    },
    {
      id: 'analytics',
      title: 'Performance & Analytics Cookies',
      description: 'Help us understand how you use endevo.life so we can improve performance, fix bugs, and enhance your experience.',
      required: false,
      examples: 'Google Analytics (anonymized IP), error tracking, usage statistics, page performance monitoring, A/B testing'
    },
    {
      id: 'marketing',
      title: 'Targeting & Marketing Cookies',
      description: 'Show you relevant wellness content and advertisements based on your interests.',
      required: false,
      examples: 'Facebook Pixel, retargeting ads, social media integration (LinkedIn, Instagram), conversion tracking, email tracking'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavbar />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-6">
                Cookie <span className="text-brand-orange">Settings</span>
              </h1>
              <p className="text-lg text-gray-600">
                Manage your cookie preferences
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <p className="text-gray-600">
                  Manage how endevo.life uses cookies and similar technologies. 
                  Changes take effect after saving and reloading the page.
                </p>
              </div>

              {/* Save notification */}
              {saved && (
                <div className="mx-6 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    <strong>Preferences saved!</strong> Page will reload to apply changes...
                  </p>
                </div>
              )}

              {/* Cookie Categories */}
              <div className="p-6 space-y-6">
                {cookieCategories.map((category) => (
                  <div
                    key={category.id}
                    className="border border-gray-200 rounded-lg p-5 hover:border-brand-teal/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-start gap-2 text-xs text-gray-500">
                          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span><strong>Examples:</strong> {category.examples}</span>
                        </div>
                      </div>

                      <div className="ml-4">
                        {category.required ? (
                          <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full whitespace-nowrap">
                            Always Active
                          </span>
                        ) : (
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences[category.id as keyof CookiePreferences]}
                              onChange={(e) => setPreferences({
                                ...preferences,
                                [category.id]: e.target.checked
                              })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-orange/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-brand-teal/5 mx-6 mb-6 rounded-lg border border-brand-teal/20">
                <h4 className="font-semibold text-brand-teal mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Additional Privacy Controls
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Browser settings can block or delete cookies independently</li>
                  <li>• Review our <a href="/legal/cookie-policy" className="text-brand-orange hover:underline">Cookie Policy</a> and <a href="/legal/privacy-policy" className="text-brand-orange hover:underline">Privacy Policy</a></li>
                  <li>• Email <a href="mailto:hello@endevo.life" className="text-brand-orange hover:underline">hello@endevo.life</a> for data requests or questions</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset to Essential Only
                </Button>
                
                <Button
                  onClick={handleSave}
                  className="sm:ml-auto flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90"
                >
                  <Save className="w-4 h-4" />
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookieSettings;
