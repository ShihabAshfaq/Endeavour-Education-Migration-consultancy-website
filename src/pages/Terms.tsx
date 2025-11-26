export function Terms() {
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
              Terms & <span className="text-white drop-shadow-lg">Conditions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-3xl text-gray-900 mt-12 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the services of Endeavour Education & Migration Consultancy, you agree to be bound 
              by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">2. Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide education and migration consultancy services including but not limited to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Education counseling and university placement assistance</li>
              <li>Visa application guidance and documentation support</li>
              <li>Health insurance (OSHC) arrangements</li>
              <li>Accommodation assistance</li>
              <li>Pre-departure orientation and support</li>
            </ul>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">3. Consultancy Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our initial consultation and course counseling services are provided free of charge. Additional services 
              such as visa application lodgement, migration advice, and document preparation may incur fees, which will 
              be clearly communicated to you before engagement.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">4. No Guarantee of Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide accurate information and professional guidance, we cannot guarantee:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Acceptance by any educational institution</li>
              <li>Approval of visa applications</li>
              <li>Specific migration outcomes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Final decisions are made by educational institutions, immigration authorities, and other relevant bodies.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">5. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>Provide accurate and complete information</li>
              <li>Submit required documents in a timely manner</li>
              <li>Follow our professional advice and recommendations</li>
              <li>Pay any applicable fees as agreed</li>
              <li>Comply with all laws and regulations</li>
            </ul>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, and images, is the property of Endeavour 
              Education & Migration Consultancy and is protected by intellectual property laws.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Endeavour Education & Migration Consultancy shall not be liable 
              for any indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend access to our services at any time, without prior notice, 
              for conduct that we believe violates these Terms or is harmful to other users or our business.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Australia, and any disputes 
              shall be subject to the exclusive jurisdiction of the courts of New South Wales.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
              to our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-3xl text-gray-900 mt-12 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: info@endeavour.com.au<br />
              Phone: +61 2 1234 5678<br />
              Address: 123 Education Street, Sydney NSW 2000
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}