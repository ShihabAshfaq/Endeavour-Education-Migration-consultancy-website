import { Shield, Users, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router-dom';

export function HealthInsurance() {
  const oshcBenefits = [
    'Medical practitioner consultations',
    'Hospital accommodation and treatment',
    'Ambulance services',
    'Prescription medications (PBS)',
    'Pathology and radiology services',
    'Emergency treatment'
  ];

  const ovhcBenefits = [
    'Doctor visits and consultations',
    'Hospital treatments and procedures',
    'Emergency ambulance services',
    'Prescribed pharmaceutical benefits',
    'Limited dental and optical services',
    'Pregnancy and maternity care'
  ];

  const providers = [
    {
      name: 'Allianz Care Australia',
      description: 'Leading provider with comprehensive coverage'
    },
    {
      name: 'BUPA Australia',
      description: 'Trusted health insurance partner'
    },
    {
      name: 'NIB',
      description: 'Quality coverage and service'
    },
    {
      name: 'Medibank',
      description: 'Australia\'s largest health insurer'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E5A8E] via-[#2470a8] to-[#1E5A8E] text-white py-20 md:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="flex items-center gap-2">
                🏥 <span>Health Insurance</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Comprehensive <span className="text-white drop-shadow-lg">Health Coverage</span> for Your Peace of Mind
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Mandatory health insurance for international students and visitors to Australia
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#1E5A8E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={48} className="text-[#1E5A8E]" />
            </div>
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Important Information</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">Why Health Insurance is Mandatory</h2>
            <p className="text-gray-600 text-lg">
              Health insurance is a mandatory requirement for international students and certain visitors in Australia. 
              It ensures you have access to quality healthcare during your stay and protects you from unexpected medical costs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="oshc" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
              <TabsTrigger value="oshc" className="text-lg">
                OSHC - Students
              </TabsTrigger>
              <TabsTrigger value="ovhc" className="text-lg">
                OVHC - Visitors
              </TabsTrigger>
            </TabsList>

            {/* OSHC Tab */}
            <TabsContent value="oshc" className="space-y-12">
              <div className="text-center mb-8">
                <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">For Students</span>
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Overseas Student Health Cover (OSHC)</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Mandatory health insurance for all international students studying in Australia on a student visa
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* What is OSHC */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-900">
                      <div className="w-12 h-12 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center">
                        <FileText className="text-[#1E5A8E]" size={24} />
                      </div>
                      What is OSHC?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Overseas Student Health Cover (OSHC) is insurance that provides cover for the costs of medical 
                      and hospital care which international students may need while in Australia. It also covers the 
                      cost of prescription drugs and emergency ambulance transport.
                    </p>
                    <p className="text-gray-600">
                      OSHC must be purchased for the entire duration of your student visa, and it's a requirement 
                      for visa approval.
                    </p>
                  </CardContent>
                </Card>

                {/* Coverage Details */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-900">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                        <Shield className="text-[#FF6B35]" size={24} />
                      </div>
                      What's Covered?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {oshcBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle size={16} className="text-[#FF6B35]" />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* OSHC Pricing */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 text-2xl">OSHC Pricing Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border hover:shadow-lg transition-shadow">
                      <p className="text-gray-600 mb-2">Single Cover</p>
                      <p className="text-4xl text-[#1E5A8E] mb-1">$560</p>
                      <p className="text-sm text-gray-500">per year (approx.)</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border hover:shadow-lg transition-shadow">
                      <p className="text-gray-600 mb-2">Couple Cover</p>
                      <p className="text-4xl text-[#1E5A8E] mb-1">$1,680</p>
                      <p className="text-sm text-gray-500">per year (approx.)</p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border hover:shadow-lg transition-shadow">
                      <p className="text-gray-600 mb-2">Family Cover</p>
                      <p className="text-4xl text-[#1E5A8E] mb-1">$2,520</p>
                      <p className="text-sm text-gray-500">per year (approx.)</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    * Prices are approximate and vary by provider. Contact us for exact quotes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* OVHC Tab */}
            <TabsContent value="ovhc" className="space-y-12">
              <div className="text-center mb-8">
                <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">For Visitors</span>
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Overseas Visitor Health Cover (OVHC)</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Health insurance for temporary visa holders including working holiday makers, 457 visa holders, and other temporary residents
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* What is OVHC */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-900">
                      <div className="w-12 h-12 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center">
                        <Users className="text-[#1E5A8E]" size={24} />
                      </div>
                      What is OVHC?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Overseas Visitor Health Cover (OVHC) is health insurance for people visiting Australia temporarily. 
                      It helps pay for medical treatment if you become sick or injured while in Australia.
                    </p>
                    <p className="text-gray-600">
                      OVHC is available for working holiday makers, parents of international students, skilled workers 
                      on 457 visas, and other temporary visa holders.
                    </p>
                  </CardContent>
                </Card>

                {/* Coverage Details */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-900">
                      <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                        <Shield className="text-[#FF6B35]" size={24} />
                      </div>
                      What's Covered?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {ovhcBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle size={16} className="text-[#FF6B35]" />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* OVHC Options */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 text-2xl">Coverage Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border hover:shadow-lg transition-shadow">
                      <h3 className="text-xl text-gray-900 mb-3">Basic</h3>
                      <p className="text-gray-600 mb-4">Essential hospital and medical cover</p>
                      <p className="text-3xl text-[#1E5A8E]">From $90<span className="text-base text-gray-500">/month</span></p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-[#FF6B35]/5 to-white rounded-xl border-2 border-[#FF6B35] hover:shadow-xl transition-shadow relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="inline-block bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm">
                          Popular
                        </div>
                      </div>
                      <h3 className="text-xl text-gray-900 mb-3 mt-2">Standard</h3>
                      <p className="text-gray-600 mb-4">Comprehensive coverage with extras</p>
                      <p className="text-3xl text-[#1E5A8E]">From $150<span className="text-base text-gray-500">/month</span></p>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border hover:shadow-lg transition-shadow">
                      <h3 className="text-xl text-gray-900 mb-3">Premium</h3>
                      <p className="text-gray-600 mb-4">Maximum coverage with all benefits</p>
                      <p className="text-3xl text-[#1E5A8E]">From $220<span className="text-base text-gray-500">/month</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Trusted Partners</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Our Partner Providers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with Australia's leading health insurance providers to get you the best coverage
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {providers.map((provider, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 bg-[#1E5A8E]/10 rounded-full flex items-center justify-center">
                      <Shield className="text-[#1E5A8E]" size={32} />
                    </div>
                  </div>
                  <h3 className="text-gray-900 mb-2">{provider.name}</h3>
                  <p className="text-sm text-gray-600">{provider.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Simple Process</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">How to Get Started</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: 1, title: 'Contact Us', desc: 'Get in touch to discuss your needs and get a personalized quote' },
                { step: 2, title: 'Compare Options', desc: 'We\'ll help you compare providers and select the best coverage' },
                { step: 3, title: 'Get Covered', desc: 'Complete your application and receive instant confirmation' }
              ].map((item) => (
                <Card key={item.step} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1E5A8E] to-[#2470a8] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Need Help with Health Insurance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team can help you find the right health insurance coverage for your needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 h-14 text-lg shadow-xl">
              Get a Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}