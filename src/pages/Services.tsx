import { GraduationCap, Plane, Home, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { FileText, Users, Heart, Globe, Briefcase as Work, ChevronDown } from 'lucide-react';

export function Services() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

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
                📋 <span>Our Services</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Comprehensive Solutions for Your <span className="text-white drop-shadow-lg">Global Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Supporting you at every stage of your education and migration journey
            </p>
          </div>
        </div>
      </section>

      {/* Education Services */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center">
                  <GraduationCap size={40} className="text-[#1E5A8E]" />
                </div>
              </div>
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Education</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">Education Consultancy</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Your pathway to world-class education. We guide you through every step of the application process to ensure you find the perfect course and institution for your goals.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Course and university selection guidance',
                  'Application preparation and submission',
                  'Scholarship and financial aid assistance',
                  'Statement of purpose and CV preparation',
                  'Interview preparation and coaching'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="text-[#FF6B35]" size={16} />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-[#1E5A8E] hover:bg-[#164a73]">
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                  alt="Education services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section id="migration" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                  alt="Migration services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center">
                  <Plane size={40} className="text-[#1E5A8E]" />
                </div>
              </div>
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Migration</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">Migration Services</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Expert migration advice and visa processing services. Our registered migration agents ensure your application is handled with precision and care.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Student visa applications (subclass 500)',
                  'Skilled migration pathways',
                  'Partner and family visas',
                  'Visitor and tourist visas',
                  'Visa extension and renewal support'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="text-[#FF6B35]" size={16} />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-[#1E5A8E] hover:bg-[#164a73]">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types & PR Pathways Section */}
      <section id="visa-pathways" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Visa Options</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Australian Visa Types & PR Pathways</h2>
            <p className="text-gray-600 text-lg">
              Explore the different visa options and permanent residency pathways available for your Australian journey
            </p>
          </div>

          {/* Visa Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                icon: <GraduationCap size={32} className="text-[#1E5A8E]" />,
                title: 'Student Visa',
                subclass: 'Subclass 500',
                description: 'Study at an Australian educational institution',
                key: 'student'
              },
              {
                icon: <Work size={32} className="text-[#1E5A8E]" />,
                title: 'Skilled Work Visa',
                subclass: 'Subclass 482/189/190',
                description: 'Work in Australia with your skills and qualifications',
                key: 'skilled'
              },
              {
                icon: <Heart size={32} className="text-[#1E5A8E]" />,
                title: 'Partner Visa',
                subclass: 'Subclass 820/801',
                description: 'Join your Australian partner or spouse',
                key: 'partner'
              },
              {
                icon: <Users size={32} className="text-[#1E5A8E]" />,
                title: 'Family Visa',
                subclass: 'Various Subclasses',
                description: 'Reunite with your family members in Australia',
                key: 'family'
              },
              {
                icon: <Globe size={32} className="text-[#1E5A8E]" />,
                title: 'Visitor Visa',
                subclass: 'Subclass 600',
                description: 'Visit Australia for tourism or business',
                key: 'visitor'
              },
              {
                icon: <FileText size={32} className="text-[#1E5A8E]" />,
                title: 'Graduate Visa',
                subclass: 'Subclass 485',
                description: 'Post-study work opportunities for graduates',
                key: 'graduate'
              }
            ].map((visa) => (
              <Card 
                key={visa.key}
                className="hover:shadow-xl transition-all border-0 shadow-md cursor-pointer group"
                onClick={() => toggleSection(visa.key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1E5A8E]/20 transition-colors">
                      {visa.icon}
                    </div>
                    <ChevronDown 
                      className={`text-gray-400 transition-transform ${activeSection === visa.key ? 'rotate-180' : ''}`} 
                      size={20}
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-1">{visa.title}</h3>
                  <p className="text-[#FF6B35] text-sm mb-2">{visa.subclass}</p>
                  <p className="text-gray-600 text-sm">{visa.description}</p>
                  
                  {/* Expanded Details */}
                  {activeSection === visa.key && (
                    <div className="mt-4 pt-4 border-t space-y-3">
                      {visa.key === 'student' && (
                        <>
                          <div>
                            <p className="text-gray-900 mb-2"><strong>Key Requirements:</strong></p>
                            <ul className="text-gray-600 text-sm space-y-1 ml-4">
                              <li>• Enrollment in a registered course</li>
                              <li>• Genuine Temporary Entrant (GTE) requirement</li>
                              <li>• English language proficiency</li>
                              <li>• Financial capacity proof</li>
                              <li>• Health insurance (OSHC)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-900 mb-1"><strong>Work Rights:</strong></p>
                            <p className="text-gray-600 text-sm">48 hours per fortnight during study, unlimited during breaks</p>
                          </div>
                        </>
                      )}
                      
                      {visa.key === 'skilled' && (
                        <>
                          <div>
                            <p className="text-gray-900 mb-2"><strong>Pathways Include:</strong></p>
                            <ul className="text-gray-600 text-sm space-y-1 ml-4">
                              <li>• Subclass 482 - Temporary Skill Shortage visa</li>
                              <li>• Subclass 189 - Skilled Independent visa (PR)</li>
                              <li>• Subclass 190 - Skilled Nominated visa (PR)</li>
                              <li>• Subclass 491 - Skilled Work Regional visa</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-900 mb-1"><strong>Requirements:</strong></p>
                            <p className="text-gray-600 text-sm">Skills assessment, points test, occupation on demand list</p>
                          </div>
                        </>
                      )}
                      
                      {visa.key === 'partner' && (
                        <>
                          <div>
                            <p className="text-gray-900 mb-2"><strong>Visa Stages:</strong></p>
                            <ul className="text-gray-600 text-sm space-y-1 ml-4">
                              <li>• Subclass 820 - Temporary Partner visa (onshore)</li>
                              <li>• Subclass 801 - Permanent Partner visa</li>
                              <li>• Subclass 309/100 - Offshore equivalent</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-900 mb-1"><strong>Processing Time:</strong></p>
                            <p className="text-gray-600 text-sm">Typically 2-3 years for full PR pathway</p>
                          </div>
                        </>
                      )}
                      
                      {visa.key === 'family' && (
                        <>
                          <div>
                            <p className="text-gray-900 mb-2"><strong>Categories Include:</strong></p>
                            <ul className="text-gray-600 text-sm space-y-1 ml-4">
                              <li>• Parent visas (103, 143, 173, 884)</li>
                              <li>• Child visas (101, 102, 445)</li>
                              <li>• Other family visas (114, 115, 835)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-900 mb-1"><strong>Sponsorship:</strong></p>
                            <p className="text-gray-600 text-sm">Requires eligible Australian citizen, PR, or eligible NZ citizen</p>
                          </div>
                        </>
                      )}
                      
                      {visa.key === 'visitor' && (
                        <>
                          <div>
                            <p className="text-gray-900 mb-2"><strong>Stream Options:</strong></p>
                            <ul className="text-gray-600 text-sm space-y-1 ml-4">
                              <li>• Tourist stream - holidays and recreation</li>
                              <li>• Business visitor stream - conferences, meetings</li>
                              <li>• Sponsored family stream - visit relatives</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-900 mb-1"><strong>Duration:</strong></p>
                            <p className="text-gray-600 text-sm">Usually granted for 3, 6, or 12 months</p>
                          </div>
                        </>
                      )}
                      
                      {visa.key === 'graduate' && (
                        <>
                          <div>
                            <p className="text-gray-900 mb-2"><strong>Two Streams:</strong></p>
                            <ul className="text-gray-600 text-sm space-y-1 ml-4">
                              <li>• Graduate Work stream - 18 months</li>
                              <li>• Post-Study Work stream - 2-4 years</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-gray-900 mb-1"><strong>Eligibility:</strong></p>
                            <p className="text-gray-600 text-sm">Must have recently graduated from an Australian institution</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* PR Pathways Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl mb-4">Permanent Residency Pathways</h3>
                <p className="text-blue-100 text-lg">
                  Multiple routes to Australian permanent residency
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl mb-3">Skilled Migration PR</h4>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• Subclass 189 - Skilled Independent</li>
                      <li>• Subclass 190 - State Nominated</li>
                      <li>• Subclass 191 - Permanent Skilled Regional</li>
                      <li>• Points-based system</li>
                      <li>• Occupation on skilled list required</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl mb-3">Employer Sponsored PR</h4>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• Subclass 186 - Employer Nomination Scheme</li>
                      <li>• Subclass 187 - Regional Sponsored (closed)</li>
                      <li>• Direct Entry stream</li>
                      <li>• Temporary Residence Transition</li>
                      <li>• Labour Agreement stream</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl mb-3">Family Stream PR</h4>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• Partner visa (subclass 801/100)</li>
                      <li>• Parent visa (subclass 103/143)</li>
                      <li>• Child visa (subclass 101/102)</li>
                      <li>• Sponsored by Australian family</li>
                      <li>• Relationship evidence required</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl mb-3">Business & Investment PR</h4>
                    <ul className="space-y-2 text-blue-100 text-sm">
                      <li>• Subclass 888 - Business Innovation</li>
                      <li>• Subclass 132 - Business Talent</li>
                      <li>• Significant investment required</li>
                      <li>• Business ownership/management</li>
                      <li>• State nomination available</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8">
                    Discuss Your PR Options
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Services */}
      <section id="accommodation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center">
                  <Home size={40} className="text-[#1E5A8E]" />
                </div>
              </div>
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Housing</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">Accommodation Services</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Finding the right place to live is crucial for your success. We help you secure safe, comfortable, and convenient accommodation near your institution.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Student housing and shared apartments',
                  'Homestay arrangements',
                  'On-campus residence bookings',
                  'Temporary accommodation for arrival',
                  'Lease negotiation and support'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="text-[#FF6B35]" size={16} />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-[#1E5A8E] hover:bg-[#164a73]">
                  Find Accommodation
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
                  alt="Accommodation services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-departure Services */}
      <section id="pre-departure" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Pre-departure services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center">
                  <Briefcase size={40} className="text-[#1E5A8E]" />
                </div>
              </div>
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Pre-departure</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">Pre-departure Support</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Prepare for your new life abroad with confidence. Our comprehensive pre-departure program ensures you're ready for every aspect of your journey.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Pre-departure orientation sessions',
                  'Travel and insurance arrangements',
                  'Banking and financial setup guidance',
                  'Cultural adaptation and local customs briefing',
                  'Airport pickup and arrival assistance'
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="text-[#FF6B35]" size={16} />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-[#1E5A8E] hover:bg-[#164a73]">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our experts guide you through every step of your education and migration process
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 h-14 text-lg shadow-xl">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}