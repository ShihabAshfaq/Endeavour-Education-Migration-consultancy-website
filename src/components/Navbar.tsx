import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/9355a784dd65dc7ee19f946c56dd6c0c0834be29.png';
import { Button } from '../components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../components/ui/navigation-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Education Consultancy', path: '/services#education' },
    { name: 'Migration Services', path: '/services#migration' },
    { name: 'Accommodation', path: '/services#accommodation' },
    { name: 'Pre-departure Support', path: '/services#pre-departure' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Endeavour" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`transition-colors ${
                isActive('/services')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              Services
            </Link>

            <Link
              to="/health-insurance"
              className={`transition-colors ${
                isActive('/health-insurance')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              Health Insurance
            </Link>

            <Link
              to="/resources"
              className={`transition-colors ${
                isActive('/resources')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              Resources
            </Link>

            <Link
              to="/events"
              className={`transition-colors ${
                isActive('/events')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              Events
            </Link>

            <Link
              to="/faq"
              className={`transition-colors ${
                isActive('/faq')
                  ? 'text-[#1E5A8E]'
                  : 'text-gray-700 hover:text-[#1E5A8E]'
              }`}
            >
              FAQ
            </Link>

            <Link to="/contact">
              <Button className="bg-[#1E5A8E] hover:bg-[#164a73] text-white px-6">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 transition-colors ${
                isActive('/')
                  ? 'text-[#1E5A8E] bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 transition-colors ${
                isActive('/about')
                  ? 'text-[#1E5A8E] bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>

            {/* Services Mobile Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 flex items-center justify-between"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="bg-gray-50">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-2 text-gray-600 hover:text-[#FF6B35]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/health-insurance"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 transition-colors ${
                isActive('/health-insurance')
                  ? 'text-[#1E5A8E] bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Health Insurance
            </Link>

            <Link
              to="/resources"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 transition-colors ${
                isActive('/resources')
                  ? 'text-[#1E5A8E] bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Resources
            </Link>

            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 transition-colors ${
                isActive('/events')
                  ? 'text-[#1E5A8E] bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Events
            </Link>

            <Link
              to="/faq"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 transition-colors ${
                isActive('/faq')
                  ? 'text-[#1E5A8E] bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              FAQ
            </Link>

            <div className="px-4 pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#1E5A8E] hover:bg-[#164a73] text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}