import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { Info } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-6">
                Cookie <span className="text-brand-orange">Policy</span>
              </h1>
              <p className="text-lg text-gray-600">
                Last revised: February 12, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  ENDevo Inc. ("ENDevo," "we," "us," or "our") uses certain web monitoring and tracking technologies, such as cookies, beacons, pixels, tags, and scripts (collectively, "Cookies"). These technologies are used to provide, maintain, and improve our wellness and legacy preparedness platform at{" "}
                  <span className="text-brand-orange font-semibold">endevo.life</span> (the "Services"), optimize our offerings and personalized recommendations, and provide our visitors and users ("you," "your") with a better experience.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This Cookie Policy explains how ENDevo uses Cookies and similar technologies. For questions, please email{" "}
                  <a href="mailto:privacy@endevo.life" className="text-brand-orange hover:underline">privacy@endevo.life</a>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For our general privacy practices, visit our{" "}
                  <a href="/legal/privacy-policy" className="text-brand-orange hover:underline">Privacy Policy</a>.
                </p>
                <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg">
                  <p className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Quick Summary
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies to improve your experience, remember your preferences, analyze platform usage, and deliver relevant wellness content. You control which cookies you accept through our cookie banner and settings.
                  </p>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-playfair font-bold text-brand-navy mb-6">Table of Contents</h2>
                <ol className="space-y-2 text-brand-navy">
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">1. What Are Cookies?</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">2. Why We Use Cookies</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">3. Types of Cookies We Use</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">4. Third-Party Cookies</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">5. How to Control Cookies</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">6. Do Not Track Signals</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">7. Changes to This Cookie Policy</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">8. Contact Us</li>
                </ol>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  1. What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cookies allow websites to remember your actions and preferences (such as login details, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                </p>
                <div className="bg-gray-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-brand-teal mb-3">Types of Cookie Technologies</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-brand-orange mt-1">•</span>
                      <span><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-orange mt-1">•</span>
                      <span><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-orange mt-1">•</span>
                      <span><strong>First-Party Cookies:</strong> Cookies set by the website you're visiting</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-orange mt-1">•</span>
                      <span><strong>Third-Party Cookies:</strong> Cookies set by a domain other than the one you're visiting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  2. Why We Use Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use cookies and similar tracking technologies for several purposes:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Essential Website Functions</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Some cookies are essential for our website to function properly. These enable basic features like page navigation, access to secure areas, and remembering your cookie consent preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Improving Your Experience</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies to remember your preferences and settings, such as your language preference, so we can provide you with a more personalized experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Analytics and Performance</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Marketing and Advertising</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may use cookies to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  3. Types of Cookies We Use
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Below is a detailed breakdown of the types of cookies we use on our website:
                </p>

                {/* Strictly Necessary */}
                <div className="mb-8">
                  <div className="bg-brand-navy/5 border-l-4 border-brand-navy p-6 rounded-r-lg mb-4">
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">Strictly Necessary Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Purpose:</strong> These cookies are essential for you to browse our website and use its features. Without these cookies, services you have asked for cannot be provided.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Can be disabled:</strong> No - these cookies are required for the website to function
                    </p>
                    <div className="bg-white/60 rounded p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Examples:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cookie consent preferences</li>
                        <li>• Session management</li>
                        <li>• Security and authentication</li>
                        <li>• Load balancing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Functional */}
                <div className="mb-8">
                  <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded-r-lg mb-4">
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Functional Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Purpose:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Can be disabled:</strong> Yes - but this may affect website functionality
                    </p>
                    <div className="bg-white/60 rounded p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Examples:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Language preferences</li>
                        <li>• Region selection</li>
                        <li>• User interface customization</li>
                        <li>• Video player settings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="mb-8">
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-4">
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">Performance & Analytics Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Purpose:</strong> These cookies collect information about how visitors use our website, helping us understand patterns and improve our services.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Can be disabled:</strong> Yes
                    </p>
                    <div className="bg-white/60 rounded p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Examples & Services:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Google Analytics - Website traffic analysis</li>
                        <li>• Page visit tracking</li>
                        <li>• User journey mapping</li>
                        <li>• Error reporting</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Marketing */}
                <div className="mb-8">
                  <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg mb-4">
                    <h3 className="text-xl font-semibold text-brand-orange mb-3">Targeting & Marketing Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Purpose:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They may also limit the number of times you see an advertisement.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Can be disabled:</strong> Yes
                    </p>
                    <div className="bg-white/60 rounded p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Examples & Services:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Facebook Pixel - Social media advertising</li>
                        <li>• Google Ads - Search and display advertising</li>
                        <li>• LinkedIn Ads - Professional network advertising</li>
                        <li>• Retargeting campaigns</li>
                        <li>• Conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  4. Third-Party Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Third-party services we use include:
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Google Analytics</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We use Google Analytics to understand how our website is being used and to improve the user experience. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.
                    </p>
                    <p className="text-sm text-gray-600">
                      For more information: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Google Privacy Policy</a>
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Social Media Platforms</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We may use cookies from social media platforms (Facebook, LinkedIn, Instagram, etc.) to enable social sharing features and deliver targeted advertisements.
                    </p>
                    <p className="text-sm text-gray-600">
                      Each platform has its own privacy policy governing their use of cookies.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Marketing & Advertising Partners</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We work with advertising partners to deliver relevant advertisements. These partners may use cookies to collect information about your browsing activities across different websites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  5. How to Control Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You have several options to manage or disable cookies:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Our Cookie Consent Banner</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you first visit our website, you'll see a cookie consent banner that allows you to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                      <li><strong>Accept All:</strong> Allow all cookies including optional ones</li>
                      <li><strong>Reject Non-Essential:</strong> Only allow strictly necessary cookies</li>
                      <li><strong>Customize:</strong> Choose which categories of cookies you want to allow</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
                    </p>
                  </div>

                  <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">Browser Settings</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li>• <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                      <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                      <li>• <strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">Opt-Out Tools</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You can opt out of interest-based advertising through these industry tools:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Network Advertising Initiative (NAI): <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">optout.networkadvertising.org</a></li>
                      <li>Digital Advertising Alliance (DAA): <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">optout.aboutads.info</a></li>
                      <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">⚠️ Important Note</p>
                    <p className="text-gray-700 leading-relaxed">
                      If you disable cookies, some features of our website may not function properly. Strictly necessary cookies cannot be disabled as they are essential for the website to work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  6. Do Not Track Signals
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Some web browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Because there is not yet a common understanding of how to interpret DNT signals, we do not currently respond to browser DNT signals. However, you can use the cookie management options described in this policy to control tracking technologies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We support the Global Privacy Control (GPC) signal. If your browser sends a GPC signal, we will honor it by automatically rejecting non-essential cookies.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  7. Changes to This Cookie Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, and other factors.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When we make material changes to this Cookie Policy, we will notify you by:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Posting a notice on our website</li>
                  <li>Updating the "Last Updated" date at the top of this policy</li>
                  <li>Sending you an email notification (if you have provided us with your email address)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  8. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 border border-brand-navy/20 rounded-lg p-6">
                  <p className="text-gray-800 font-semibold mb-4">ENDevo Inc.</p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">📞 Phone:</span>{" "}
                    <a href="tel:4845454327" className="text-brand-orange hover:underline">484-545-4327</a>
                  </p>
                  <p className="text-gray-600 text-sm mb-4 ml-6">Monday–Friday, 8AM - 8PM ET</p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">✉️ Email:</span>{" "}
                    <a href="mailto:hello@endevo.life" className="text-brand-orange hover:underline">hello@endevo.life</a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">🌐 Website:</span>{" "}
                    <a href="https://endevo.life/contact" className="text-brand-orange hover:underline">endevo.life/contact</a>
                  </p>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-semibold text-brand-teal mb-4">Additional Resources</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For more information about our data practices, please review:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/legal/privacy-policy" className="text-brand-orange hover:underline font-medium">
                      → Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/legal/terms-of-service" className="text-brand-orange hover:underline font-medium">
                      → Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/cookie-settings" className="text-brand-orange hover:underline font-medium">
                      → Manage Cookie Settings
                    </a>
                  </li>
                </ul>
              </div>

              {/* Footer Notice */}
              <div className="border-t border-gray-200 pt-8 mt-12 text-center">
                <p className="text-gray-700 mb-4">
                  Questions about our Cookie Policy?
                </p>
                <p className="text-gray-600 space-x-2">
                  <a href="mailto:hello@endevo.life" className="text-brand-orange font-semibold hover:underline">hello@endevo.life</a>
                  <span>|</span>
                  <a href="tel:4845454327" className="text-brand-orange font-semibold hover:underline">484-545-4327</a>
                  <span>|</span>
                  <a href="https://endevo.life/contact" className="text-brand-orange font-semibold hover:underline">endevo.life/contact</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
