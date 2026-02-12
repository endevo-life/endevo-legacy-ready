import Footer from "@/components/Footer";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PrivacyPolicy = () => {
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
                Privacy <span className="text-brand-orange">Policy</span>
              </h1>
              <p className="text-lg text-gray-600">
                Last revised: February 11, 2026
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
                <p className="text-gray-700 leading-relaxed mb-6">
                  ENDevo Inc. and its affiliates ("ENDevo", "we," "our" or "us") respects the privacy of Visitors to our website{" "}
                  <span className="text-brand-orange font-semibold">www.endevo.life</span> (the "Site") and of Users of our mobile applications and related services. These include our legacy-support app and web service (together, the "Legacy Support App"), our short-term disability leave app and its accompanying registration website (the "Leave Support App"), our web-based portal, which enables Clients' representatives, and advisors, to introduce and invite individuals to access ENDevo's services and provides reporting and dashboards to track programs' performance and utilization ("ENDevo Connect"), as well as the services provided by ENDevo, and any other subsequent product, process, development, tangible embodiment, or service provided by ENDevo (collectively, the "Solutions").
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This Privacy Policy describes how ENDevo collects, stores, uses and discloses the following categories of personal data as a "Controller" or "Business" to the extent applicable under data protection laws:
                </p>
                <div className="bg-gray-50 border-l-4 border-brand-orange p-6 rounded-r-lg mb-6">
                  <ul className="space-y-4 text-gray-700">
                    <li>
                      <span className="font-semibold text-brand-navy">(i) Client Data:</span> personal data relating to current and prospective business customers who are insurance carriers, employers, care facilities, health plans, etc. ("Client") as a part of the delivery of the Solutions or any other service, product or solution described in one or more applicable order forms or commercial agreements with the Client.
                    </li>
                    <li>
                      <span className="font-semibold text-brand-navy">(ii) User Data:</span> personal data relating to individuals who have engaged the Solutions (collectively, "Users"). Such individuals may include those that engage the Legacy Support App to support them as they navigate the challenges following the loss of a loved one or those that engage the Leave Support App for the purposes of receiving support in navigating short-term disability leave.
                    </li>
                    <li>
                      <span className="font-semibold text-brand-navy">(iii) Loved Ones Data (Legacy Support App only):</span> personal data relating to a loved one who has passed and on whose behalf a User has engaged the Legacy Support App or an individual who has engaged the Legacy Support App for the purposes of pre-planning.
                    </li>
                    <li>
                      <span className="font-semibold text-brand-navy">(iv) Visitors' Data:</span> personal data relating to visitors of our Site, participants at our events, prospective customers, users or partners (collectively, "Visitors") who visit or otherwise interact with our Site, online ads and content, emails or communications under our control (collectively with the Legacy Support App, the "Services").
                    </li>
                  </ul>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-brand-navy/5 border border-brand-navy/20 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-playfair font-bold text-brand-navy mb-6">Table of Contents</h2>
                <ol className="space-y-2 text-brand-navy">
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">1. Data Collection & Processing</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">2. Data Uses</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">3. Data Location and Transfers</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">4. Data Retention</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">5. Data Disclosure</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">6. Cookies and Data Collection Technologies</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">7. Communications</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">8. Data Security</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">9. Data Subject Rights</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">10. Opt-Out of Sale/Sharing/Targeted Advertising</li>
                  <li className="hover:text-brand-orange transition-colors cursor-pointer">11. Additional Notices and Contact Details</li>
                </ol>
              </div>

              {/* Important Notice */}
              <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg mb-12">
                <p className="text-gray-800 font-semibold mb-3">Important Notice</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are a Client, User, or Visitor, please read this Privacy Policy carefully and make sure that you fully understand it.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You are not legally required to provide us with any personal data. If you do not wish to provide us with your personal data, or to have it processed by us or any of our Service Providers (as defined below), please do not provide it to us - avoid interaction with us and our Site and Solutions, and do not use our Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We will not use or disclose personal data covered by this Privacy Policy in a manner materially different from what is disclosed in this Privacy Policy. To the extent we process personal data which is considered sensitive personal data under applicable data protection laws, we will not use or disclose such sensitive personal data for a purpose other than the purpose for which it was originally collected or subsequently authorized by you unless we have received your affirmative and explicit consent.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12" id="data-collection">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  1. Data Collection & Processing
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When we use the terms "personal data" or "personal information" in this Privacy Policy, we mean information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, to an individual. It does not include aggregated or anonymized information that is maintained in a form that is not reasonably capable of being associated with or linked to an individual.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                  Types of personal data collected. We may collect or generate the following types of personal data about individuals through the Services:
                </p>

                {/* Subsection A */}
                <div className="ml-6 mb-8">
                  <h3 className="text-2xl font-playfair font-semibold text-brand-navy mb-4">
                    A. The Legacy Support App
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Usage, login credentials, and device information concerning Users and Loved Ones
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Connectivity, technical and aggregated usage data, such as user agent, IP addresses and approximate location based upon such IP addresses, digital identifiers, device data (like type, OS, device id, browser version, locale and language settings used), activity logs, session recordings, log-in credentials to the Legacy Support App, the data collection technologies installed or utilized on their device (which collect data such as how often Users visit or use the Legacy Support App and its various features and which communication brought them to the Legacy Support App), and inferred or presumed data on or generated from their use of the Legacy Support App.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Information concerning Users of the Legacy Support App
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Contact details such as name, email address, and phone number; relationship to a Loved One; address or geolocation; information and photos that Users share when using the App (for example when participating in our Communities feature, as described in our Terms of Use (the "Terms")); pet details and photo (where pet loss support is used); any expressed, presumed, or identified needs, preferences, attributes, and insights relevant to Users.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Information concerning Loved Ones
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Details such as name, email address, phone number, address, country or state of residence, date of birth, date of death, drivers' license number(s) or national ID number; documentation uploaded through use of the Vault feature, including, but not limited to, personal photos, content of personal communications, and legal, financial, and health documents, which may include, at your discretion, certain sensitive information; additional background including gender, age, religion, marital status, military or veteran status, national origin, professional experience, as well as any expressed, presumed, or identified needs, preferences, attributes, and insights relevant to Loved Ones.
                    </p>
                  </div>
                </div>

                {/* Subsection B */}
                <div className="ml-6 mb-8">
                  <h3 className="text-2xl font-playfair font-semibold text-brand-navy mb-4">
                    B. The Leave Support App
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Usage, login credentials, and device information concerning Users
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Connectivity, technical and aggregated usage data, such as user agent, IP addresses and approximate location based upon such IP addresses, digital identifiers, device data (like type, OS, device id, browser version, locale and language settings used), activity logs, session recordings, log-in credentials to the Leave Support App, the data collection technologies installed or utilized on their device (which collect data such as how often Users visit or use the Leave Support App and its various features and which communication brought them to the Leave Support App, including its registration website), and inferred or presumed data on or generated from their use of the Leave Support App.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Information concerning Users of the Leave Support App
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Contact details such as name, email address, and phone number; geolocation (country/state); profession or industry; leave type; leave dates; health related information such as physical activity level, mobility state, medications, and daily symptoms; information that Users share when using the Leave Support App (for example when using our Chat feature), and any expressed, presumed, or identified needs, preferences, attributes, and insights relevant to Users.
                    </p>
                  </div>
                </div>

                {/* Subsection C */}
                <div className="ml-6 mb-8">
                  <h3 className="text-2xl font-playfair font-semibold text-brand-navy mb-4">
                    C. ENDevo Connect
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Usage, login credentials, and device information concerning Users
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Connectivity, technical and aggregated usage data, such as user agent, IP addresses and approximate location based upon such IP addresses, digital identifiers, device data (like type, OS, device id, browser version, locale and language settings used), activity logs, session recordings, log-in credentials to ENDevo Connect, the data collection technologies installed or utilized on their device (which collect data such as how often Users visit or use ENDevo Connect and its various features and which communication brought them to ENDevo Connect), and inferred or presumed data on or generated from their use of ENDevo Connect.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Information concerning Users of ENDevo Connect
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Contact details such as name, email address; Advisors' phone number and office address.
                    </p>
                  </div>
                </div>

                {/* Subsection D */}
                <div className="ml-6 mb-8">
                  <h3 className="text-2xl font-playfair font-semibold text-brand-navy mb-4">
                    D. Clients and Visitors
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Information concerning our Clients and Visitors
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Contact details such as name, email address, phone number; position and workplace; contractual and financial documents and billing details; related business insights; communications (correspondences, sensory information including call and video recordings, and transcriptions and analyses thereof); feedback and testimonials received; as well as any expressed, presumed or identified needs, preferences, attributes and insights relevant to our potential or existing engagement.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-brand-teal mb-3">
                      Usage, login credentials, and device information concerning Clients and Visitors
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Connectivity, technical and aggregated usage data, such as user agent, IP addresses and approximate location based upon such IP addresses, digital identifiers, device data (like type, OS, device id, browser version, locale and language settings used), activity logs, session recordings, log-in credentials to the Services, the cookies and pixels installed or utilized on their device (which collect data such as how often Visitors visit or use the Site, which pages they visit and when, and which website ad or email message brought them there), and inferred or presumed data on or generated from their use of the Services.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-brand-teal p-6 rounded-r-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For the purposes of the California Consumer Privacy Act ("CCPA"), in the last 12 months, we have collected the following categories of personal information, as defined in the CCPA:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Identifiers</li>
                    <li>Geolocation data</li>
                    <li>Customer records information</li>
                    <li>Characteristics of protected classifications</li>
                    <li>Commercial information</li>
                    <li>Internet or other electronic network activity information</li>
                    <li>Audio, electronic, visual, or similar information</li>
                    <li>Professional or employment related information</li>
                    <li>Inferences</li>
                    <li>Sensitive Personal Information (as described above)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-playfair font-semibold text-brand-navy mb-4">
                    Categories of sources from which personal data is collected
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We obtain personal data from the following categories of sources:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-brand-orange mb-2">
                        Data collected directly from you
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        You may voluntarily provide us with your personal data, e.g., when you use the Solutions through our mobile applications; engage with us as a Client to provide the Solutions to policyholders or beneficiaries, as relevant; submit a form on our website; submit a registration form for the Solutions; communicate with our dedicated care team ("Care Team") or other customer or support services; during an event, conference, or webinar you have participated in; register to our mailing list, or communicate with us in any other manner during our engagement with you. You may also provide us with your personal data when you upload, post, generate or publish on our Site or through the Legacy Support App, for example through the Vault feature of the Legacy Support App.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-brand-orange mb-2">
                        Data collected from third parties
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        We obtain personal data from third parties, such as our Clients or Service Providers. For example, we may obtain your details from your insurance carrier (our Client) as a part of our commercial engagement with them if you request use of our Services. In addition, upon your request and to the extent that you provide us with applicable power of attorney and/or consent (as the case may be) we may also approach third parties (such as government agencies) on your behalf and collect personal data that is held by them, all in order to provide you with the Services. We may also obtain personal data from our Service Providers or Vendors e.g., payment processors (for in-app purchases), marketing and sales tools, data enrichment services, our sales and marketing partners, or distributors.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-brand-orange mb-2">
                        Data collected from publicly available sources
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        To the extent permitted by law, we may obtain personal data from publicly available sources in order to provide you with our Services (such as published obituaries in local newspapers, social media accounts, etc.).
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-brand-orange mb-2">
                        Data that is automatically generated
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Some personal data is automatically generated when you visit our website and engage its features (such as your online activity, clicks, web-pages visits, etc.) by using Cookies and the data collection technologies described in Section 6 below. We may also collect aggregated or technical data generated when you use our Services, relating to how you use them, so we can learn how Users use our Services and improve them and our Users' experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12" id="data-uses">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  2. Data Uses
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use personal data for the following business and commercial purposes (and in reliance on the legal bases for processing noted next to them, as appropriate):
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Client, User and Loved One personal data
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To facilitate, operate, enhance, and provide our Services, and process new product and service orders (Performance of Contract, to the extent applicable; Legitimate Interests to provide and improve our Services; Consent to the extent required (e.g., if processing of special categories data));
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To provide assistance and support (including crisis or emergency assistance), moderate community content (where applicable), to test and monitor the Services, or diagnose or fix technology problems (Performance of Contract, to the extent applicable; Legitimate Interests to ensure the ongoing availability of our Services; Consent to the extent required (e.g., if processing of special categories data));
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To personalize our Services, including by recognizing an individual and remembering their information when they return to our Services, personalizing their Communities experience (where applicable) and notifications, and to provide further localization and personalization capabilities (Performance of Contract, to the extent applicable; consent, where required by law, and otherwise our Legitimate Interests to provide a better user experience).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      User, Client, and Visitor personal data
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To contact our Clients, Users and Visitors with general or personalized service-related messages, including, to the extent applicable, notifications about Communities activity and responses to your content, as well as promotional messages that may be of specific interest to them (Performance of Contract, to the extent applicable; Legitimate Interests to send service-related messages; Consent to receive marketing messages);
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To facilitate and optimize our marketing campaigns, ad management and sales operations, and to manage and deliver advertisements for our products and services more effectively, including to provide personalized ads and share data with our authorized service providers to support such activity. (Legitimate Interests to enhance engagement with our Services and promote them; Consent (including by using Cookies) to use and share personal data with specific third-party service providers to provide personalization of ads);
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To facilitate, sponsor and offer certain events, contests and promotions (Legitimate Interests to enhance engagement with our Services);
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      User, Client, Visitor and Loved One personal data
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To gain a better understanding of how individuals use and interact with our Services (including through online, in-app and personal surveys), which content and data they have processed through our Services, and how we may improve their and others' user experience and the value they can generate from using the Services, so we can continue improving our products, offerings and the overall performance of our Services (Legitimate Interests to improve the user experience and performance of our Services; Consent to provide survey responses);
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To support and enhance our data security measures, including for the purposes of preventing and mitigating the risks of fraud, error or any illegal, criminal or prohibited activity (Performance of Contract, to the extent applicable; Legitimate Interests to secure our services; Legal Obligation to implement appropriate security measures);
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To create aggregated statistical data, inferred non-personal data, or anonymized or pseudonymized data (rendered non-personal and non-identifiable), which we or our business partners may use to provide and improve our respective services, or for any other purpose (Legitimate Interests to improve and enhance our Services);
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To enforce our commercial agreements and Communities Guidelines (as the latter is defined in our Terms), to resolve disputes, to carry out our obligations and enforce our rights, and to protect our business interests and the interests and rights of third parties (Legitimate Interests to resolve disputes);
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-brand-orange mt-1">•</span>
                        <span>
                          To comply with our contractual and legal obligations and requirements, and maintain our compliance with applicable laws, regulations and standards (Performance of Contract, to the extent applicable; Legitimate Interests to maintain and improve our compliance; Legal Obligation, to the extent applicable).
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg mt-8">
                  <p className="text-gray-700 leading-relaxed">
                    If you reside or are using the Services in a territory governed by privacy laws under which "consent" is the only or most appropriate legal basis for the processing of personal data as described herein (in general, or specifically with respect to the types of personal data you expect or elect to be processed by or via the Services, or due to nature of such processing), your acceptance of our Terms and this Privacy Policy will be deemed as your consent to the processing of your personal data for all purposes detailed herein. If you wish to revoke such consent, please contact us at{" "}
                    <a href="mailto:privacy@endevo.life" className="text-brand-orange font-semibold hover:underline">
                      privacy@endevo.life
                    </a>.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12" id="data-location">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  3. Data Location and Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We and our authorized Service Providers maintain and store personal data in the United States, and process personal data in the United States and in other locations as reasonably necessary for the proper delivery and performance of our Services, or as may be required by law.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since we operate globally and may use service providers worldwide, including in the United States and other locations as reasonably necessary for the proper performance of our Services, or as may be required by law, we may transfer your personal data outside your country of residence. While outside of your jurisdiction of residence, your personal data will be subject to applicable foreign laws, which may permit government and national security agencies to access your information in certain circumstances. If you have questions about where your Personal Data is located, please email us at{" "}
                  <a href="mailto:privacy@endevo.life" className="text-brand-orange font-semibold hover:underline">
                    privacy@endevo.life
                  </a>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While privacy laws may vary between jurisdictions, ENDevo is committed to protecting personal data in accordance with this Privacy Policy and customary industry standards, and such appropriate lawful mechanisms and contractual terms requiring adequate data protection, regardless of any lesser legal requirements that may apply in the jurisdiction to which such personal data is transferred.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-12" id="data-retention">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  4. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We retain personal data for as long as we deem it as reasonably necessary to maintain and expand our relationship and provide you with our Services and offerings; to comply with our contractual obligations; or to protect ourselves from any potential disputes (i.e., as required by laws applicable to log-keeping, records and bookkeeping, and in order to have proof and evidence concerning our relationship, should any legal issues arise following your discontinuance of use), all in accordance with our data retention policy. If your access to the Legacy Support App is terminated, we will delete personal data you uploaded (such as personal data you shared in our Communities feature), in accordance with our Terms, though we may retain certain information as required by law.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To determine the appropriate period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and the applicable legal requirements. When personal data is no longer required, we will securely delete or anonymize it in accordance with our data retention policy and applicable laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions regarding our data retention practices, please contact us by email at{" "}
                  <a href="mailto:privacy@endevo.life" className="text-brand-orange font-semibold hover:underline">
                    privacy@endevo.life
                  </a>.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12" id="data-disclosure">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  5. Data Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We disclose personal data in the following ways:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Service Providers
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We engage selected third-party companies and individuals to perform services on our behalf or complementary to our own ("Service Providers"). Such Service Providers may include commercial software providers, hosting and server co-location services, communications and content delivery networks (CDNs), data security services, billing and payment processing services, fraud detection and prevention services, web and product analytics, e-mail distribution and monitoring services, session or activity recording services, remote access services, content transcription and analysis services, performance measurement, data optimization and marketing services, social and advertising networks, content and data enrichment providers, event production and hosting services, e-mail, voicemails, support, enablement and customer relation management systems, and our legal, financial and compliance advisors. Service Providers may have access to personal data, depending on each of their specific roles and purposes in facilitating and enhancing our Services, and may only use the data as determined in our agreements with them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Vendors
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      ENDevo engages with providers of professional services related to our Services, in order to enable them to contact you for the purpose of providing their services. Examples of such services, depending on the Solutions engaged, may be assistance with memorial arrangements (including planning a funeral), arranging for house cleaning, handling your loved one's personal belongings, finding an estate attorney, etc. In such instances, we may share relevant contact details with the respective Vendor. If you directly engage with any such Vendors, please note that any aspect of that engagement which is not directly related to the Services and directed by ENDevo is beyond the scope of our Terms and Privacy Policy and may therefore be covered by the Vendor's terms and privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Sharing Personal Data with our Clients
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may disclose information about our Users' usage of our Services to our Clients, including for the purpose of learning and improving our services. We may also, at the request of the User or Loved One, disclose personal data to Clients in order to facilitate additional support for that User or Loved One. We will not share the contents of any communications nor any documents uploaded to our Vault feature or to our Solutions generally with Clients.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Communities Feature (Legacy Support App only)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you participate in our Communities feature, your profile information, posts, and interactions are visible to other community members. You can control certain privacy settings within Communities, but please be mindful that any information you share in community spaces may be viewed by other users, including through emails sent periodically to Communities members.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Legal Compliance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may disclose or allow government and law enforcement officials access to your personal data in response to a legal request, such as a subpoena, search warrant or court order (or similar requirement), or in compliance with applicable laws and regulations, with or without notice to you. Such disclosure or access may occur if we believe in good faith that: (a) we are legally compelled to do so; (b) disclosure is appropriate in connection with efforts to investigate, prevent, or take action regarding actual or suspected illegal activity, fraud, or other wrongdoing; or (c) such disclosure is required to protect our legitimate business interest, including the security or integrity of our products and Services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Protecting Rights and Safety
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may share your personal data with others, if we believe in good faith that this will help protect the rights, property or personal safety of ENDevo, any of our Visitors, Clients, Users, or any members of the general public.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      ENDevo Affiliated Companies
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may share personal data internally with our affiliated companies, for the purposes described in this Privacy Policy. In addition, should ENDevo or any of its affiliates undergo any change in control, including by means of merger, acquisition or purchase of substantially all of its assets, your personal data may be shared with the parties involved in such event.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Additional Sharing
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      ENDevo may share your personal data in additional manners, pursuant to your explicit approval, or if we are legally obligated to do so, or if we have successfully rendered such data non-personal and anonymous. Additionally, we may transfer, share or otherwise use non-personal data at our sole discretion and without the need for further approval.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-brand-teal p-6 rounded-r-lg mt-8">
                  <p className="text-gray-700 leading-relaxed">
                    For the purposes of the CCPA, in the past 12 months, we may have disclosed: Identifiers; Geolocation data; Customer records information; Characteristics of protected classifications; Commercial information; Internet or other electronic network activity information; Audio, electronic, visual, or similar information; Professional or employment related information; Inferences; and Sensitive Personal Information to Service Providers and to ENDevo Affiliated Companies or for Legal Compliance or to Protect Rights and Safety. We may have disclosed Identifiers, customer records information, and identified needs to Vendors or to Clients. We did so in pursuit of the business and commercial purposes described in Section 2 above. We do not use or disclose sensitive personal information outside of purposes permitted under the CCPA.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12" id="cookies">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  6. Cookies and Data Collection Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We and our Service Providers use cookies, beacons, pixels, tags, SDKs, and other similar technologies to enable and improve the Services we provide, to track the performance of our Site, perform analytics and gain insights on the use of our Services and the performance of our activities, and for personalization purposes including personalization of ads if we have obtained your consent. For more information on our cookie and data collection technologies practices, please visit our Cookie Policy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cookies are packets of information sent to your web browser and then sent back by the browser each time it accesses the server that sent the cookie. Some cookies are removed when you close your browser session. These are the "Session Cookies". Some last for longer periods and are called "Persistent Cookies". We use both types.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Some cookies are necessary for the Services to function properly, and cannot be declined or disabled unless you delete and block them through your web browser settings. Other cookies, which are used for functional, performance, analytics and marketing purposes, are optional. You may opt-in to or opt-out from the use of optional cookies through the "Your Privacy Choices" feature available on our website, which will open our cookie banner to allow you to change your preference, depending on your location and activity on our Services, as applicable. If you choose to opt-out of certain cookies, this will typically generate a new cookie which will preserve your choice, and indicate it to our Services in your next visits so that the cookies you opted-out of will not be utilized. You can also manage your cookies preferences, and accept, remove or entirely block cookies, through your browser settings.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Please note that certain web browsers may transmit "Do Not Track" signals to websites with which the browser communicates, telling the website not to follow its online movements. Because of differences in how web browsers interpret this feature and send those signals, and lack of standardization, we currently do not respond to such "Do Not Track" signals.
                </p>
                <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Please note that if you get a new device, install a new browser, erase or otherwise alter your browser's cookie file (including upgrading certain browsers), or delete and re-install a mobile application, you may also clear any previously set cookie preferences, so re-selecting your preferences will be necessary.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-12" id="communications">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  7. Communications
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Service Communications
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      ENDevo may contact you with important information regarding our Services. For example, we may notify you (through any of the means available to us) of changes or updates to our Services, service maintenance or changes, or password retrieval notices. You will not be able to opt out of receiving such service communications while using our Services, as they are integral to such use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Notifications and Promotional Communications
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may send you notifications concerning new features, offerings, events, and special opportunities or any other information we think you will find valuable. We may provide such notices through any of the contact means available to us (e.g., phone, mobile or email), through the Services, or through our marketing campaigns on any other websites or platforms.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If you do not wish to receive such promotional communications, you may notify us at any time by sending an email to{" "}
                      <a href="mailto:privacy@endevo.life" className="text-brand-orange font-semibold hover:underline">
                        privacy@endevo.life
                      </a>{" "}
                      or by following the "unsubscribe", "stop" or "change email preferences" instructions contained in the promotional communications you receive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12" id="data-security">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  8. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  ENDevo and its Service Providers implement systems, applications, and procedures that are appropriate to the sensitivity of the information to secure your personal data, to minimize the risks of theft, damage, loss of information, alteration, or unauthorized access or use of information (including limiting access to personal data to those of our personnel who require access for the purposes described in this Privacy Policy). These measures provide sound industry-standard security. However, please be aware that regardless of any security measures used or implemented, we cannot and do not guarantee the absolute protection and security of any personal data stored with us or with any third parties.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12" id="data-subject-rights">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  9. Data Subject Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Individuals have rights concerning their personal data. Please contact us by e-mail at{" "}
                  <a href="mailto:privacy@endevo.life" className="text-brand-orange font-semibold hover:underline">
                    privacy@endevo.life
                  </a>{" "}
                  if you wish to exercise your privacy rights under any applicable law, including US State Privacy laws (including the CCPA); or Canadian personal information protection legislation, including the Personal Information Protection and Electronic Documents Act and substantially similar provincial legislation, as amended from time to time. Such rights may include, to the extent applicable, the right to know/request access to (specific pieces of personal data collected; categories of personal data collected; categories of sources from whom the personal data was collected; purpose of collecting personal data; categories of third parties with whom we have shared personal data), to request rectification or erasure of your personal data held with ENDevo, or to restrict or object to such personal data's processing (including limiting use and disclosure and the right to direct us not to sell or share your personal data to third parties now or in the future, or the right to opt-out of processing personal data for the purposes of targeted advertising, as described below), or to port such personal data, the right to the de-indexing of your personal data, or the right to equal services and prices (e.g., freedom from discrimination) (each to the extent available to you under the laws which apply to you).
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To the extent applicable to you, you may also designate an authorized agent, in writing or through a power of attorney, to request to exercise your privacy rights on your behalf. The authorized agent may submit a request to exercise these rights by emailing us.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When you or an authorized agent ask us to exercise any of your rights, we may need to ask you to provide us certain credentials to make sure that you are who you claim you are, to avoid disclosure to you of personal data related to others and to ask you to provide further information to better understand the nature and scope of data that you request to access. We may not be able to fulfil your request unless you have provided sufficient information that enables us to reasonably verify that you are the individual about whom we collected the personal data. We may then request additional information for legal purposes (e.g., as proof of the identity of the person submitting the request, or proof of request fulfillment).
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may redact from the data which we will make available to you, any personal data or confidential information related to others or any other data to which an exemption applies under applicable data protection law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are a resident of Virginia, Colorado or Connecticut, or other relevant jurisdictions as applicable, you may also have the right to appeal if we decline to take action regarding your request. We will notify you providing our reasons and instructions for how you can appeal the decision. If you are a Colorado resident, or of any other state where similar rights are applicable, you may also have the right to contact the state's Attorney General if you have concerns about the result of the appeal.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12" id="opt-out">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  10. Opt-Out of Sale/Sharing/Targeted Advertising
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  On the Site, under some US and other data protection laws such as the CCPA, our disclosure of certain internet activity and device information to third parties through cookies may be considered a "sale" or "sharing" of personal information or processing for purposes of "targeted advertising" as such terms are defined under US data protection laws. We do so in pursuit of the business and commercial purposes described in Section 2 above.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In the last 12 months we have "sold" or "shared" Internet or other electronic network activity information, Geolocation data, and Commercial information with our analytics and advertising partners and service providers. ENDevo has not knowingly sold or shared the personal information of individuals under the age of 18.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You may opt out of all cookies that may result in a "sale" and/or "sharing" of your personal information or processing for purposes of targeted advertising in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 ml-4">
                  <li>
                    By clicking the "Your Privacy Choices" button (available in our website's footer), which will open our cookie banner, allowing you to change your preference. Please note: If you visit us from a different device or browser, or clear cookies, then you need to re-select your preferences.
                  </li>
                  <li>
                    Set the Global Privacy Control (GPC) for each participating browser system that you use to opt out of the use of third-party Advertisement Analytics or other cookies.
                  </li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="mb-12" id="additional-notices">
                <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-orange">
                  11. Additional Notices and Contact Details
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Updates and Amendments
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may update and amend this Privacy Policy from time to time by posting an amended version on our Services. We will make reasonable efforts to post a clear notice on our Services and/or we send you an email (to the extent that you provided us with your email address) regarding the change if we believe any substantial changes are involved. Such changes will take effect four (4) days after the notice is posted on the Services or sent via email, whichever is earlier. After such notice period, all amendments to this Privacy Policy shall be deemed acknowledged by you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      External Links
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      While our Services may contain links or integrations to other websites, social networks or services, we are not responsible for their privacy practices, and encourage you to pay attention when you leave our Services for the website or services of such third parties, or interact with social network integrations. We recommend you read the privacy policies of each and every website and service you visit. This Privacy Policy only applies to our Services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Children's Privacy
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our Services are not intended for use by children under the age of 18. We do not knowingly collect personal data from minors under the age of 18 and do not wish to do so. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us at{" "}
                      <a href="mailto:hello@endevo.life" className="text-brand-orange font-semibold hover:underline">
                        hello@endevo.life
                      </a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-brand-teal mb-3">
                      Contacting Us
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you have any comments or questions about this Privacy Policy or if you have any concerns regarding your personal data held with us, please contact our Privacy Officer:
                    </p>
                    <div className="bg-gray-50 border border-brand-navy/20 rounded-lg p-6">
                      <p className="text-gray-800 font-semibold mb-4">ENDevo Inc.</p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">📞 Phone:</span>{" "}
                        <a href="tel:4845454327" className="text-brand-orange hover:underline">484-545-4327</a>
                      </p>
                      <p className="text-gray-600 text-sm mb-4 ml-6">Monday–Friday, 8AM - 8PM ET</p>
                      <p className="text-gray-700">
                        <span className="font-semibold">✉️ Email:</span>{" "}
                        <a href="mailto:hello@endevo.life" className="text-brand-orange hover:underline">hello@endevo.life</a>
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Notice */}
              <div className="border-t border-gray-200 pt-8 mt-12 text-center">
                <p className="text-gray-700 mb-4">
                  Questions about this Privacy Policy?
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

export default PrivacyPolicy;
