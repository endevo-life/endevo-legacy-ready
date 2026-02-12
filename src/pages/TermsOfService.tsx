import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TermsOfService = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-6">
                Terms of <span className="text-brand-orange">Service</span>
              </h1>
              <p className="text-lg text-gray-600">
                Last Updated: February 11, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to ENDevo Services ("ENDevo," "we," "us," or "our"). These Terms of Service
                  ("Terms") govern your access to and use of our website, mobile application, digital
                  legacy readiness tools, assessments, and related services (collectively, the "Services").
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using our Services, you agree to be bound by these Terms and our Privacy
                  Policy. If you do not agree to these Terms, please do not use our Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material
                  changes by posting the updated Terms on our website. Your continued use of the Services
                  after such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  1. Eligibility and Account Registration
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">1.1 Age Requirement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must be at least 18 years old to use our Services. By using the Services, you
                  represent and warrant that you are at least 18 years of age and have the legal capacity
                  to enter into these Terms.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">1.2 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features of the Services, you may need to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">1.3 Account Suspension or Termination</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time, with or without
                  notice, for violation of these Terms, fraudulent activity, or any other reason we deem
                  appropriate in our sole discretion.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  2. Description of Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ENDevo provides digital legacy readiness services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Digital asset inventory and management tools</li>
                  <li>Legacy planning assessments and guidance</li>
                  <li>Educational resources and content about end-of-life planning</li>
                  <li>Connection services to qualified professional service providers</li>
                  <li>Employee wellness programs for organizations</li>
                  <li>Mobile application for on-the-go access</li>
                </ul>
                <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg">
                  <p className="text-gray-800 font-semibold mb-3">Important Disclaimer</p>
                  <p className="text-gray-700 leading-relaxed">
                    ENDevo provides tools, resources, and guidance to help you with legacy planning. However, we do not provide legal, financial, tax, or medical advice. Our Services are not a substitute for professional advice from qualified attorneys, financial advisors, accountants, or healthcare providers. You should consult with appropriate professionals for specific advice tailored to your situation.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  3. User Responsibilities and Conduct
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When using our Services, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Use the Services only for lawful purposes</li>
                  <li>Respect the intellectual property rights of ENDevo and others</li>
                  <li>Not impersonate any person or entity</li>
                  <li>Not interfere with or disrupt the Services or servers</li>
                  <li>Not attempt to gain unauthorized access to any portion of the Services</li>
                  <li>Not use automated systems (bots, scrapers) without our permission</li>
                  <li>Not transmit viruses, malware, or other harmful code</li>
                  <li>Not harass, abuse, or harm other users</li>
                  <li>Not upload false, misleading, or fraudulent information</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  4. Intellectual Property Rights
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">4.1 ENDevo's Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, features, and functionality of the Services, including but not limited to
                  text, graphics, logos, images, software, and design, are owned by ENDevo or our licensors
                  and are protected by copyright, trademark, patent, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">4.2 Limited License</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and
                  use the Services for your personal, non-commercial use, subject to these Terms. This
                  license does not include any right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>Resell or commercial use of the Services</li>
                  <li>Copy, reproduce, or distribute content from the Services</li>
                  <li>Modify or create derivative works</li>
                  <li>Download (other than page caching) or reverse engineer any portion of the Services</li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">4.3 Your Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You retain ownership of any content you submit, upload, or store through the Services
                  ("Your Content"). By providing Your Content, you grant ENDevo a worldwide, non-exclusive,
                  royalty-free license to use, store, reproduce, and process Your Content solely to provide
                  and improve the Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You represent and warrant that you own or have the necessary rights to Your Content and
                  that it does not violate any third-party rights or applicable laws.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  5. Payment Terms
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">5.1 Fees and Billing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Certain features of the Services may require payment of fees. You agree to pay all
                  applicable fees as described at the time of purchase. All fees are non-refundable unless
                  otherwise stated or required by law.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">5.2 Subscriptions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you purchase a subscription, you will be billed automatically at the beginning of each
                  billing cycle. You may cancel your subscription at any time, but you will not receive a
                  refund for the current billing period.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">5.3 Price Changes</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to change our fees at any time. We will provide you with reasonable
                  notice of any fee changes, and the new fees will apply to subsequent billing periods.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  6. Third-Party Services and Links
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Services may contain links to third-party websites, services, or professional service
                  providers (such as attorneys, financial advisors, or grief counselors). These third parties
                  are independent contractors, not employees or agents of ENDevo.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not control, endorse, or assume responsibility for any third-party services or
                  content. Your interactions with third parties are solely between you and them. We encourage
                  you to review the terms and privacy policies of any third-party services you use.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  7. Disclaimers and Limitations of Liability
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">7.1 No Warranty</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF
                  ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF
                  PERFORMANCE.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from the Services will be accurate or reliable</li>
                  <li>Any errors in the Services will be corrected</li>
                  <li>The Services will meet your specific requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">7.2 Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ENDEVO AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
                  AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE,
                  ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, WHETHER BASED ON WARRANTY,
                  CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID
                  TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE
                  HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  8. Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless ENDevo and its officers, directors,
                  employees, agents, and affiliates from and against any claims, liabilities, damages,
                  losses, costs, or expenses (including reasonable attorneys' fees) arising out of or
                  related to: (a) your use of the Services; (b) your violation of these Terms; (c) your
                  violation of any rights of another person or entity; or (d) Your Content.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  9. Data Security and Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take data security seriously and implement reasonable measures to protect your
                  information. However, no system is completely secure, and we cannot guarantee the absolute
                  security of your data.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For more information about how we collect, use, and protect your information, please
                  review our <a href="/legal/privacy-policy" className="text-brand-orange hover:underline">Privacy Policy</a>.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  10. Dispute Resolution and Arbitration
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">10.1 Informal Resolution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have a dispute with ENDevo, you agree to first contact us at{" "}
                  <a href="mailto:hello@endevo.life" className="text-brand-orange hover:underline">hello@endevo.life</a> or call{" "}
                  <a href="tel:4845454327" className="text-brand-orange hover:underline">484-545-4327</a>
                  {" "}and attempt to resolve the dispute informally.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">10.2 Binding Arbitration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If we cannot resolve a dispute informally, you agree that any dispute, claim, or
                  controversy arising out of or relating to these Terms or the Services will be resolved
                  through binding arbitration, rather than in court, except that you may assert claims in
                  small claims court if your claims qualify.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">10.3 Class Action Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  YOU AND ENDEVO AGREE THAT ANY PROCEEDINGS TO RESOLVE DISPUTES WILL BE CONDUCTED ONLY ON
                  AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  11. Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State
                  of Delaware, without regard to its conflict of law provisions. Any disputes not subject
                  to arbitration shall be resolved exclusively in the state or federal courts located in
                  Delaware.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  12. Termination
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may terminate your account at any time by contacting us. Upon termination:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>Your right to access and use the Services will immediately cease</li>
                  <li>We may delete your account and Your Content in accordance with our data retention policies</li>
                  <li>Any fees paid are non-refundable (unless required by law)</li>
                  <li>Sections of these Terms that by their nature should survive termination will remain in effect</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  13. General Provisions
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">13.1 Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between
                  you and ENDevo regarding the Services.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">13.2 Severability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If any provision of these Terms is held to be invalid or unenforceable, that provision
                  will be enforced to the maximum extent possible, and the other provisions will remain
                  in full force and effect.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">13.3 Waiver</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver of
                  such term or any other term.
                </p>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">13.4 Assignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may not assign or transfer these Terms or your rights hereunder without our prior
                  written consent. We may assign these Terms at any time without notice to you.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  14. Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms or the Services, please contact us:
                </p>
                <div className="bg-gray-50 border border-brand-navy/20 rounded-lg p-6">
                  <p className="text-gray-800 font-semibold mb-4">ENDevo Services</p>
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

              <div className="bg-gray-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-3">Acknowledgment</p>
                <p className="text-gray-700 leading-relaxed">
                  By using ENDevo's Services, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them. If you do not agree to these Terms, you must not access or use our Services.
                </p>
              </div>

              {/* Footer Notice */}
              <div className="border-t border-gray-200 pt-8 mt-12 text-center">
                <p className="text-gray-700 mb-4">
                  Questions about these Terms?
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

  export default TermsOfService;
