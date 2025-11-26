import { Users, Target, Heart, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: <Heart size={40} className="text-[#1E5A8E]" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical practice in all our services.'
    },
    {
      icon: <Users size={40} className="text-[#1E5A8E]" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor our services to meet your unique needs.'
    },
    {
      icon: <Award size={40} className="text-[#1E5A8E]" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results.'
    },
    {
      icon: <Target size={40} className="text-[#1E5A8E]" />,
      title: 'Commitment',
      description: 'We are committed to supporting you throughout your entire journey.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Director & Migration Agent',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
    },
    {
      name: 'Sarah Johnson',
      role: 'Education Consultant',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Visa Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
      name: 'Emma Wilson',
      role: 'Student Services Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
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
                ℹ️ <span>About Endeavour</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Empowering Your <span className="text-white drop-shadow-lg">Global Aspirations</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Expert guidance and dedicated support for students and migrants pursuing their international dreams
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-[250px]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#1E5A8E] rounded-full flex items-center justify-center text-white text-2xl">
                    15+
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Years of</p>
                    <p className="text-xs text-gray-500">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 mt-2">Building Dreams Since 2008</h2>
              <p className="text-gray-600 mb-4">
                Founded over 15 years ago, Endeavour Education & Migration Consultants was born from a passion to help individuals achieve their dreams of studying and living abroad. Our founders recognized the challenges faced by international students and migrants and set out to create a consultancy that truly cares about its clients.
              </p>
              <p className="text-gray-600 mb-4">
                Since then, we've helped over 5,000 students and families navigate the complex world of education and migration. Our success is built on trust, expertise, and a genuine commitment to our clients' success.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to grow and evolve, maintaining strong partnerships with leading educational institutions and staying updated with the latest migration regulations to provide you with the best possible service.
              </p>

              <Link to="/services">
                <Button className="bg-[#1E5A8E] hover:bg-[#164a73]">
                  Explore Our Services
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#1E5A8E]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-[#1E5A8E]" size={32} />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional education and migration consultancy services that empower individuals to achieve their global aspirations. We strive to make the journey of studying and living abroad accessible, smooth, and successful for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted and respected education and migration consultancy, recognized for our integrity, expertise, and unwavering commitment to client success. We envision a world where geographical boundaries don't limit educational and life opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Our Team</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">Trust & Certification</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Accreditations & Memberships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are proud members of leading industry bodies and maintain all necessary registrations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['MARA Registered', 'QEAC Certified', 'AAERI Member', 'Australian Business'].map((item, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow text-center">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our experienced team guide you on your journey to success
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 h-14 text-lg shadow-xl">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}