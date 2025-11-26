export function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E5A8E] via-[#2470a8] to-[#1E5A8E] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Privacy <span className="text-white drop-shadow-lg">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Your privacy is important to us
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Endeavour Education & Migration Consultancy ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information that you provide to us such as name, email address, phone number, 
              mailing address, and other contact details when you:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Fill out forms on our website</li>
              <li>Contact us for consultancy services</li>
              <li>Subscribe to our newsletter</li>
              <li>Register for events or workshops</li>
            </ul>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Provide and manage our education and migration consultancy services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about courses, universities, and visa updates</li>
              <li>Notify you about events, workshops, and other opportunities</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Disclosure of Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We may share your information with:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Educational institutions and universities you express interest in</li>
              <li>Service providers who assist us in operating our business</li>
              <li>Government agencies when required by law</li>
            </ul>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: info@endeavour.com.au<br />
              Phone: +61 2 1234 5678
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}