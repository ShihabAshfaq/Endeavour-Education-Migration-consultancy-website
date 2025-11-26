import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import logo from 'figma:asset/9355a784dd65dc7ee19f946c56dd6c0c0834be29.png';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Endeavour Education & Migration" className="h-12 w-auto mb-4" />
            <h3 className="text-white text-xl mb-4">Endeavour Education & Migration</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Your trusted partner for education and migration services in Australia. We help students achieve their dreams of studying abroad.
            </p>
            <div className="space-y-2">
              <a href="tel:+61212345678" className="flex items-center gap-2 text-sm hover:text-[#FF6B35] transition-colors">
                <Phone size={16} />
                <span>+61 2 1234 5678</span>
              </a>
              <a href="mailto:info@endeavour.com.au" className="flex items-center gap-2 text-sm hover:text-[#FF6B35] transition-colors">
                <Mail size={16} />
                <span>info@endeavour.com.au</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Education Street<br />Sydney NSW 2000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/health-insurance" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Health Insurance</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Resources</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Events</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#education" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Education Consultancy</span>
                </Link>
              </li>
              <li>
                <Link to="/services#migration" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Migration Services</span>
                </Link>
              </li>
              <li>
                <Link to="/services#accommodation" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Accommodation Support</span>
                </Link>
              </li>
              <li>
                <Link to="/services#pre-departure" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>Pre-departure Support</span>
                </Link>
              </li>
              <li>
                <Link to="/health-insurance" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>OSHC - Student</span>
                </Link>
              </li>
              <li>
                <Link to="/health-insurance" className="hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                  <ArrowRight size={14} />
                  <span>OSHC - Visitor</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates, tips, and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="w-full bg-[#1E5A8E] hover:bg-[#164a73]">
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white text-sm mb-3">Follow Us</h4>
              <div className="flex gap-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-[#1E5A8E] hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-[#1E5A8E] hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-[#1E5A8E] hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-[#1E5A8E] hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <p>&copy; {new Date().getFullYear()} Endeavour Education & Migration Consultancy. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy-policy" className="hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#FF6B35] transition-colors">
                Terms & Conditions
              </Link>
              <span>ABN: 12 345 678 901</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}