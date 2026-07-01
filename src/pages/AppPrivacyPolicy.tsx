import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import SEO from "@/components/SEO";

/**
 * Privacy policy for the MyFinalPlaybook mobile app.
 *
 * Hosted at /myfinalplaybook/app/privacy so it can be pasted into the
 * Google Play Console / App Store privacy-policy field. The data facts below
 * match what the app actually does. [BRACKETED] placeholders must be filled in
 * and the jurisdiction-specific sections (GDPR / CCPA / CAN-SPAM) confirmed by
 * counsel before publishing.
 *
 * Store listing details (as of last edit):
 *   Provider:        ENDevo, Inc.
 *   App category:    Education
 *   Privacy contact: hello@endevo.life
 *   Support email:   niki@finalplaybook.com
 * Effective date defaults to the prep date (June 30, 2026); bump it to the
 * actual launch/submission date when the app goes live.
 * Analytics IS on at launch; the exact provider name is still being confirmed,
 * so the disclosure reads "a product-analytics provider [name TBD]".
 * Still TBD: full street address, and the analytics provider name.
 */
const AppPrivacyPolicy = () => {
  const PRIVACY_EMAIL = "hello@endevo.life";
  const SUPPORT_EMAIL = "niki@finalplaybook.com";

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="MyFinalPlaybook App — Privacy Policy"
        description="How the MyFinalPlaybook mobile app collects, uses, and protects your information."
        canonical="/myfinalplaybook/app/privacy"
      />
      <ResponsiveNavbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-6">
                MyFinalPlaybook —{" "}
                <span className="text-brand-orange">Privacy Policy</span>
              </h1>
              <p className="text-lg text-gray-600">
                How the MyFinalPlaybook mobile app collects, uses, and protects
                your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Meta */}
              <div className="mb-8 space-y-1 text-gray-600">
                <p>
                  {/* Default = prep date; bump to the actual launch/submission
                      date when the app goes live in the store. */}
                  <strong className="text-brand-navy">Effective date:</strong>{" "}
                  June 30, 2026
                </p>
                <p>
                  <strong className="text-brand-navy">App:</strong>{" "}
                  MyFinalPlaybook (“the App”)
                </p>
                <p>
                  <strong className="text-brand-navy">Provider:</strong> ENDevo,
                  Inc. (“we”, “us”, “our”)
                </p>
                <p>
                  <strong className="text-brand-navy">Privacy contact:</strong>{" "}
                  <a
                    href={`mailto:${PRIVACY_EMAIL}`}
                    className="text-brand-orange hover:underline"
                  >
                    {PRIVACY_EMAIL}
                  </a>
                </p>
                <p>
                  <strong className="text-brand-navy">Support:</strong>{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-brand-orange hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </p>
                <p>
                  <strong className="text-brand-navy">Mailing address:</strong>{" "}
                  ENDevo, Inc., Philadelphia, PA [FULL STREET ADDRESS TBD]
                </p>
              </div>

              <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg mb-12">
                <p className="text-gray-700 leading-relaxed">
                  This page describes the privacy practices of the{" "}
                  <strong>MyFinalPlaybook mobile app</strong> specifically.
                  Replace each [BRACKETED] placeholder with your details and
                  have legal counsel review the jurisdiction-specific sections
                  before publishing.
                </p>
              </div>

              {/* 1. Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  1. Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  MyFinalPlaybook is a free educational app that helps adults
                  assess their “legacy readiness” across four areas — Digital,
                  Legal, Financial, and Physical — and follow a personalized
                  7-day action plan. This policy explains what information the
                  App collects, how we use it, who we share it with, and the
                  choices you have.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The App is intended for adults and is <strong>not</strong>{" "}
                  directed to children under [13&nbsp;/&nbsp;16]. The App
                  provides educational content only and is <strong>not</strong>{" "}
                  legal, financial, tax, or medical advice.
                </p>
              </div>

              {/* 2. Information we collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  2. Information we collect
                </h2>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">
                  a) Information you provide
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    <strong>First name</strong> — to personalize your plan and
                    report.
                  </li>
                  <li>
                    <strong>Email address</strong> — to send your results and,
                    if you opt in, reminders and tips.
                  </li>
                  <li>
                    <strong>Marketing consent</strong> — whether you chose to
                    receive daily reminders and tips.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">
                  b) Information generated by using the App
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    <strong>Assessment responses and results</strong> — your
                    answers to the 12 questions and the resulting scores,
                    readiness band, and weakest domains.
                  </li>
                  <li>
                    <strong>Platform</strong> — whether you use the iOS or
                    Android version.
                  </li>
                  <li>
                    <strong>Usage/analytics events</strong> — basic events such
                    as starting or completing the assessment, collected through a
                    product-analytics provider [PROVIDER NAME TBD, e.g. PostHog].
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">
                  c) Information stored only on your device
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    Your <strong>quiz progress and plan completion</strong> are
                    saved locally on your device so you can resume. This stays on
                    your device and is not sent to us except as described above.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-brand-teal mb-3">
                  d) Push notifications
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    If you enable notifications, the App schedules{" "}
                    <strong>daily action reminders</strong> using your device’s
                    notification system. [CONFIRM whether any push token is sent
                    to a server; in the current build, reminders are scheduled
                    locally on the device.]
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  We do <strong>not</strong> intentionally collect precise
                  location, contacts, photos, payment-card details, or government
                  identifiers. The App does <strong>not</strong> process payments
                  — any paid products are handled on a separate website.
                </p>
              </div>

              {/* 3. How we use your information */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  3. How we use your information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    Generate and deliver your personalized results and 7-day
                    plan.
                  </li>
                  <li>
                    Email your results and, with your consent, send reminders and
                    tips.
                  </li>
                  <li>
                    Operate, maintain, secure, and improve the App and understand
                    how it is used.
                  </li>
                  <li>Communicate with you about the service.</li>
                  <li>Comply with legal obligations and enforce our terms.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Where applicable (e.g. GDPR), we rely on your{" "}
                  <strong>consent</strong> (marketing emails), performance of a{" "}
                  <strong>contract/service</strong> (delivering your results), and
                  our <strong>legitimate interests</strong> (improving and
                  securing the App). [CONFIRM with counsel.]
                </p>
              </div>

              {/* 4. How we share your information */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  4. How we share your information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not sell your personal information. We share it only with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    <strong>GoHighLevel</strong> — our CRM / email provider. Your
                    first name, email, assessment results, marketing-consent
                    status, and platform are sent to GoHighLevel to deliver your
                    results and manage communications. [CONFIRM + link to their
                    privacy terms.]
                  </li>
                  <li>
                    <strong>Analytics provider</strong> — a product-analytics
                    provider [PROVIDER NAME TBD, e.g. PostHog] that we use to
                    understand app usage.
                  </li>
                  <li>
                    <strong>Infrastructure / service providers</strong> —
                    providers that help us build, host, and operate the App (e.g.
                    Expo/EAS). [CONFIRM.]
                  </li>
                  <li>
                    <strong>Legal and safety</strong> — when required by law or to
                    protect rights, safety, and security.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If we are involved in a merger, acquisition, or sale of assets,
                  personal information may be transferred as part of that
                  transaction. [CONFIRM.]
                </p>
              </div>

              {/* 5. International data transfers */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  5. International data transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be processed in countries other than where
                  you live, including [COUNTRIES / “the United States”]. Where
                  required, we use appropriate safeguards for such transfers.
                  [CONFIRM with counsel — e.g. Standard Contractual Clauses for
                  EU/UK data.]
                </p>
              </div>

              {/* 6. Data retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  6. Data retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We keep your information for as long as needed to provide the
                  service and for legitimate business or legal purposes, after
                  which we delete or anonymize it. [INSERT specific retention
                  periods, e.g. “marketing contact data is retained until you
                  unsubscribe or request deletion.”]
                </p>
              </div>

              {/* 7. Your rights and choices */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  7. Your rights and choices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Depending on where you live, you may have the right to access,
                  correct, delete, or port your data, to object to or restrict
                  processing, and to withdraw consent.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>
                    <strong>Unsubscribe</strong> from marketing emails any time
                    using the link in any email.
                  </li>
                  <li>
                    <strong>Request access or deletion</strong> by contacting{" "}
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="text-brand-orange hover:underline"
                    >
                      {PRIVACY_EMAIL}
                    </a>
                    .
                  </li>
                  <li>
                    <strong>EEA/UK (GDPR)</strong> and{" "}
                    <strong>California (CCPA/CPRA)</strong> residents have
                    additional rights. We do not sell personal information.
                    [Counsel to add required disclosures and any “Do Not
                    Sell/Share” statement.]
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We respond to verified requests as required by applicable law.
                </p>
              </div>

              {/* 8. Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  8. Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use reasonable technical and organizational measures to
                  protect your information, including encryption in transit
                  (HTTPS) when data is sent to our providers. No method of
                  transmission or storage is 100% secure. [CONFIRM.]
                </p>
              </div>

              {/* 9. Children's privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  9. Children’s privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The App is intended for adults and is not directed to children
                  under [13&nbsp;/&nbsp;16]. We do not knowingly collect their
                  personal information. If you believe a child has provided us
                  data, contact us and we will delete it.
                </p>
              </div>

              {/* 10. Changes to this policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  10. Changes to this policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy from time to time. Material changes
                  will be reflected by updating the “Effective date” above and,
                  where appropriate, additional notice.
                </p>
              </div>

              {/* 11. Contact us */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  11. Contact us
                </h2>
                <div className="bg-gray-50 border border-brand-navy/20 rounded-lg p-6">
                  <p className="text-gray-800 font-semibold mb-4">ENDevo, Inc.</p>
                  <p className="text-gray-700 mb-2">
                    Privacy requests:{" "}
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="text-brand-orange hover:underline"
                    >
                      {PRIVACY_EMAIL}
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    App support:{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-brand-orange hover:underline"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Philadelphia, PA [FULL STREET ADDRESS TBD]
                  </p>
                </div>
              </div>

              {/* Appendix */}
              <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-3 pb-3 border-b-2 border-brand-orange">
                  Appendix — What the app actually collects
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Provided for transparency and to help reviewers verify this
                  policy against the app.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="border border-gray-200 bg-gray-50 text-brand-navy text-left p-3">
                          Data
                        </th>
                        <th className="border border-gray-200 bg-gray-50 text-brand-navy text-left p-3">
                          Source
                        </th>
                        <th className="border border-gray-200 bg-gray-50 text-brand-navy text-left p-3">
                          Where it goes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-200 p-3">First name</td>
                        <td className="border border-gray-200 p-3">
                          You (email screen)
                        </td>
                        <td className="border border-gray-200 p-3">
                          GoHighLevel CRM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Email address
                        </td>
                        <td className="border border-gray-200 p-3">You</td>
                        <td className="border border-gray-200 p-3">
                          GoHighLevel CRM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Marketing consent (yes/no)
                        </td>
                        <td className="border border-gray-200 p-3">
                          You (toggle)
                        </td>
                        <td className="border border-gray-200 p-3">
                          GoHighLevel CRM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Quiz answers → scores, band, weakest domains, 7-day plan
                        </td>
                        <td className="border border-gray-200 p-3">
                          Generated in-app
                        </td>
                        <td className="border border-gray-200 p-3">
                          GoHighLevel CRM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Platform (iOS/Android)
                        </td>
                        <td className="border border-gray-200 p-3">Device</td>
                        <td className="border border-gray-200 p-3">
                          GoHighLevel CRM
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Usage/analytics events
                        </td>
                        <td className="border border-gray-200 p-3">In-app</td>
                        <td className="border border-gray-200 p-3">
                          Product-analytics provider [name TBD]
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Quiz progress / completion
                        </td>
                        <td className="border border-gray-200 p-3">In-app</td>
                        <td className="border border-gray-200 p-3">
                          Your device only (local storage)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">
                          Daily reminders
                        </td>
                        <td className="border border-gray-200 p-3">
                          In-app scheduler
                        </td>
                        <td className="border border-gray-200 p-3">
                          Your device only
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Payments</td>
                        <td className="border border-gray-200 p-3">—</td>
                        <td className="border border-gray-200 p-3">
                          Not handled in the app
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppPrivacyPolicy;
