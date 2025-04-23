/* eslint-disable react/no-unescaped-entities */
export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Privacy Policy
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
                Codvix Tech Private Limited ("we," "our," or "us") respects your
                privacy and is committed to protecting your personal data. This
                privacy policy will inform you about how we look after your
                personal data when you visit our website and tell you about your
                privacy rights and how the law protects you.
              </p>
              <p className="text-gray-500">
                This privacy policy applies to all information collected through
                our website, as well as any related services, sales, marketing,
                or events.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
              <p className="text-gray-500">
                We collect several different types of information for various
                purposes to provide and improve our service to you.
              </p>
              <h3 className="text-xl font-bold">Personal Data</h3>
              <p className="text-gray-500">
                While using our service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Company name</li>
                <li>Usage data</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-500">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                4. How We Share Your Information
              </h2>
              <p className="text-gray-500">
                We may share your personal information in the following
                situations:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>
                  <strong>With Service Providers:</strong> We may share your
                  information with service providers to monitor and analyze the
                  use of our service, to contact you.
                </li>
                <li>
                  <strong>For Business Transfers:</strong> We may share or
                  transfer your information in connection with, or during
                  negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                </li>
                <li>
                  <strong>With Affiliates:</strong> We may share your
                  information with our affiliates, in which case we will require
                  those affiliates to honor this privacy policy.
                </li>
                <li>
                  <strong>With Business Partners:</strong> We may share your
                  information with our business partners to offer you certain
                  products, services, or promotions.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may disclose your
                  personal information for any other purpose with your consent.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-500">
                We use cookies and similar tracking technologies to track the
                activity on our service and store certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. Cookies are sent to your browser
                from a website and stored on your device.
              </p>
              <p className="text-gray-500">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6. Data Security</h2>
              <p className="text-gray-500">
                The security of your data is important to us, but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal data, we
                cannot guarantee its absolute security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                7. Your Data Protection Rights
              </h2>
              <p className="text-gray-500">
                You have the following data protection rights:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>
                  The right to access, update, or delete the information we have
                  on you.
                </li>
                <li>
                  The right of rectification - You have the right to have your
                  information rectified if that information is inaccurate or
                  incomplete.
                </li>
                <li>
                  The right to object - You have the right to object to our
                  processing of your personal data.
                </li>
                <li>
                  The right of restriction - You have the right to request that
                  we restrict the processing of your personal information.
                </li>
                <li>
                  The right to data portability - You have the right to be
                  provided with a copy of the information we have on you in a
                  structured, machine-readable, and commonly used format.
                </li>
                <li>
                  The right to withdraw consent - You also have the right to
                  withdraw your consent at any time where we relied on your
                  consent to process your personal information.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
              <p className="text-gray-500">
                Our service does not address anyone under the age of 18. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 18. If you are a parent or guardian and
                you are aware that your child has provided us with personal
                data, please contact us. If we become aware that we have
                collected personal data from children without verification of
                parental consent, we take steps to remove that information from
                our servers.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-500">
                We may update our privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the "Last Updated" date at the top of
                this privacy policy.
              </p>
              <p className="text-gray-500">
                You are advised to review this privacy policy periodically for
                any changes. Changes to this privacy policy are effective when
                they are posted on this page.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
              <p className="text-gray-500">
                If you have any questions about this privacy policy, please
                contact us:
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
