import { Link } from 'react-router-dom';
import { GraduationCap, Plane, Home as HomeIcon, Shield, ArrowRight, CheckCircle, Users, Award, Globe, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      icon: <GraduationCap size={48} className="text-[#1E5A8E]" />,
      title: 'Education Consultancy',
      description: 'Expert guidance for studying abroad with top universities worldwide.',
      link: '/services#education'
    },
    {
      icon: <Plane size={48} className="text-[#1E5A8E]" />,
      title: 'Migration Services',
      description: 'Comprehensive visa and migration support for your journey.',
      link: '/services#migration'
    },
    {
      icon: <HomeIcon size={48} className="text-[#1E5A8E]" />,
      title: 'Accommodation',
      description: 'Secure and comfortable housing solutions for international students.',
      link: '/services#accommodation'
    },
    {
      icon: <Shield size={48} className="text-[#1E5A8E]" />,
      title: 'Health Insurance',
      description: 'OSHC and OVHC coverage for students and visitors.',
      link: '/health-insurance'
    }
  ];

  const stats = [
    { icon: <Users size={36} />, number: '5000+', label: 'Students Assisted' },
    { icon: <Award size={36} />, number: '15+', label: 'Years Experience' },
    { icon: <Globe size={36} />, number: '50+', label: 'Partner Universities' },
    { icon: <Star size={36} />, number: '98%', label: 'Success Rate' }
  ];

  const destinations = [
    { name: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80' },
    { name: 'Melbourne', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80' },
    { name: 'Brisbane', image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&q=80' },
    { name: 'Perth', image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=600&q=80' },
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
            <div className="inline-block bg-[#1E5A8E]/40 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="flex items-center gap-2">
                🎓 <span>Trusted Education & Migration Consultants</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Your Gateway to <span className="text-white drop-shadow-lg">World-Class Education</span> & Migration Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
              Expert guidance for studying and migrating to Australia - Your trusted partner for Australian education and migration services
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 h-14 text-lg shadow-xl">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1E5A8E] px-8 h-14 text-lg bg-transparent backdrop-blur-sm">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-[#1E5A8E] mb-3">
                  {stat.icon}
                </div>
                <div className="text-4xl text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your education and migration journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to={service.link} className="text-[#1E5A8E] hover:underline inline-flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Study in Australia</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Popular Australian Cities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover world-class education opportunities in Australia's most vibrant cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {destinations.map((dest, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-[4/5] relative">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl">{dest.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative order-2 md:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-[250px]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#1E5A8E] rounded-full flex items-center justify-center text-white text-2xl">
                    98%
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Visa Success</p>
                    <p className="text-xs text-gray-500">Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">We Make Your Dreams Come True</h2>
              <p className="text-gray-600 mb-8">
                With over 15 years of experience, we've helped thousands of students and families achieve their international education and migration goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-1">Expert Counseling</h3>
                    <p className="text-gray-600">Personalized guidance from certified education consultants</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-1">100% Free Service</h3>
                    <p className="text-gray-600">No hidden fees - our services are completely free for students</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-1">End-to-End Support</h3>
                    <p className="text-gray-600">From application to arrival, we're with you every step</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="mt-8 inline-block">
                <Button className="bg-[#1E5A8E] hover:bg-[#164a73]">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Success Stories</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">What Our Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#1E5A8E] text-[#1E5A8E]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Endeavour made my dream of studying in Australia a reality. Their team was supportive throughout the entire process."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="text-gray-900">Priya Sharma</p>
                      <p className="text-sm text-gray-500">University of Sydney</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation with our expert counselors today
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 h-14 text-lg shadow-xl">
              Book Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}