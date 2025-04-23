/* eslint-disable react/no-unescaped-entities */
export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terms and Conditions
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-gray-500">
                Welcome to Codvix Tech Private Limited ("Company", "we", "our",
                "us"). These Terms and Conditions ("Terms", "Terms and
                Conditions") govern your use of our website and services
                operated by Codvix Tech Private Limited.
              </p>
              <p className="text-gray-500">
                By accessing or using our website and services, you agree to be
                bound by these Terms. If you disagree with any part of the
                terms, then you may not access our website and services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. Communications</h2>
              <p className="text-gray-500">
                By using our website and services, you agree to subscribe to
                newsletters, marketing or promotional materials, and other
                information we may send. However, you may opt out of receiving
                any, or all, of these communications from us by following the
                unsubscribe link or instructions provided in any email we send.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. Purchases</h2>
              <p className="text-gray-500">
                If you wish to purchase any product or service made available
                through our website and services ("Purchase"), you may be asked
                to supply certain information relevant to your Purchase
                including, without limitation, your name, email, phone number,
                credit card number, credit card expiration date, billing
                address, and shipping information.
              </p>
              <p className="text-gray-500">
                You represent and warrant that: (i) you have the legal right to
                use any credit card(s) or other payment method(s) in connection
                with any Purchase; and that (ii) the information you supply to
                us is true, correct, and complete.
              </p>
              <p className="text-gray-500">
                We reserve the right to refuse or cancel your order at any time
                for certain reasons including but not limited to: product or
                service availability, errors in the description or price of the
                product or service, error in your order, or other reasons.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                4. Contests, Sweepstakes, and Promotions
              </h2>
              <p className="text-gray-500">
                Any contests, sweepstakes, or other promotions (collectively,
                "Promotions") made available through our website and services
                may be governed by rules that are separate from these Terms. If
                you participate in any Promotions, please review the applicable
                rules as well as our Privacy Policy. If the rules for a
                Promotion conflict with these Terms, the Promotion rules will
                apply.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">5. Refunds</h2>
              <p className="text-gray-500">
                We issue refunds for Contracts within 30 days of the original
                purchase of the Contract.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6. Content</h2>
              <p className="text-gray-500">
                Our website and services allow you to post, link, store, share,
                and otherwise make available certain information, text,
                graphics, videos, or other material ("Content"). You are
                responsible for the Content that you post on or through our
                website and services, including its legality, reliability, and
                appropriateness.
              </p>
              <p className="text-gray-500">
                By posting Content on or through our website and services, You
                represent and warrant that: (i) the Content is yours (you own
                it) or you have the right to use it and grant us the rights and
                license as provided in these Terms, and (ii) the posting of your
                Content on or through our website and services does not violate
                the privacy rights, publicity rights, copyrights, contract
                rights, or any other rights of any person.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">7. Prohibited Uses</h2>
              <p className="text-gray-500">
                You may use our website and services only for lawful purposes
                and in accordance with these Terms. You agree not to use our
                website and services:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>
                  In any way that violates any applicable national or
                  international law or regulation.
                </li>
                <li>
                  For the purpose of exploiting, harming, or attempting to
                  exploit or harm minors in any way by exposing them to
                  inappropriate content, asking for personally identifiable
                  information, or otherwise.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any "junk mail", "chain
                  letter", "spam", or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate the Company, a
                  Company employee, another user, or any other person or entity.
                </li>
                <li>
                  In any way that infringes upon the rights of others, or in any
                  way is illegal, threatening, fraudulent, or harmful, or in
                  connection with any unlawful, illegal, fraudulent, or harmful
                  purpose or activity.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8. Intellectual Property</h2>
              <p className="text-gray-500">
                Our website and services and their original content (excluding
                Content provided by users), features, and functionality are and
                will remain the exclusive property of Codvix Tech Private
                Limited and its licensors. Our website and services are
                protected by copyright, trademark, and other laws of both India
                and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior
                written consent of Codvix Tech Private Limited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">9. Limitation of Liability</h2>
              <p className="text-gray-500">
                In no event shall Codvix Tech Private Limited, nor its
                directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special,
                consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from (i) your access to or use of
                or inability to access or use our website and services; (ii) any
                conduct or content of any third party on our website and
                services; (iii) any content obtained from our website and
                services; and (iv) unauthorized access, use, or alteration of
                your transmissions or content, whether based on warranty,
                contract, tort (including negligence), or any other legal
                theory, whether or not we have been informed of the possibility
                of such damage, and even if a remedy set forth herein is found
                to have failed of its essential purpose.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">10. Disclaimer</h2>
              <p className="text-gray-500">
                Your use of our website and services is at your sole risk. Our
                website and services are provided on an "AS IS" and "AS
                AVAILABLE" basis. Our website and services are provided without
                warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability,
                fitness for a particular purpose, non-infringement, or course of
                performance.
              </p>
              <p className="text-gray-500">
                Codvix Tech Private Limited, its subsidiaries, affiliates, and
                its licensors do not warrant that a) our website and services
                will function uninterrupted, secure, or available at any
                particular time or location; b) any errors or defects will be
                corrected; c) our website and services are free of viruses or
                other harmful components; or d) the results of using our website
                and services will meet your requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">11. Governing Law</h2>
              <p className="text-gray-500">
                These Terms shall be governed and construed in accordance with
                the laws of India, without regard to its conflict of law
                provisions.
              </p>
              <p className="text-gray-500">
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect. These Terms constitute the entire agreement between
                us regarding our website and services, and supersede and replace
                any prior agreements we might have between us regarding our
                website and services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">12. Changes</h2>
              <p className="text-gray-500">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p className="text-gray-500">
                By continuing to access or use our website and services after
                those revisions become effective, you agree to be bound by the
                revised terms. If you do not agree to the new terms, please stop
                using our website and services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">13. Contact Us</h2>
              <p className="text-gray-500">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>By email: contact@codvix.in</li>
                <li>By phone: +91 1169313594</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
