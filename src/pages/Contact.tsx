import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry! We will get back to you soon.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Sydney",
      address: "123 Education Street, Sydney NSW 2000",
      phone: "+61 2 1234 5678",
      email: "sydney@endeavour.com.au",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Melbourne",
      address: "456 Migration Avenue, Melbourne VIC 3000",
      phone: "+61 3 8765 4321",
      email: "melbourne@endeavour.com.au",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Brisbane",
      address: "789 Student Plaza, Brisbane QLD 4000",
      phone: "+61 7 5555 1234",
      email: "brisbane@endeavour.com.au",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
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
                💬 <span>Let's Connect</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Get in{" "}
              <span className="text-white drop-shadow-lg">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Have questions? We're here to help. Contact us
              today and let's start your journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleChange("name", e.target.value)
                          }
                          placeholder="John Smith"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange(
                              "email",
                              e.target.value,
                            )
                          }
                          placeholder="john@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange(
                              "phone",
                              e.target.value,
                            )
                          }
                          placeholder="+61 400 000 000"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">
                          Service Interested In *
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleChange("service", value)
                          }
                          required
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">
                              Education Consultancy
                            </SelectItem>
                            <SelectItem value="migration">
                              Migration Services
                            </SelectItem>
                            <SelectItem value="accommodation">
                              Accommodation
                            </SelectItem>
                            <SelectItem value="pre-departure">
                              Pre-departure Support
                            </SelectItem>
                            <SelectItem value="health-insurance">
                              Health Insurance
                            </SelectItem>
                            <SelectItem value="other">
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange(
                            "message",
                            e.target.value,
                          )
                        }
                        placeholder="Tell us about your goals and how we can help..."
                        rows={6}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#1e5a7e] hover:bg-[#164a63] w-full md:w-auto"
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl text-gray-900 mb-8">
                Contact Information
              </h2>

              <Card className="mb-6 border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <Phone
                      className="text-[#f47820] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="text-[#1e5a7e] mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+61212345678"
                        className="text-gray-600 hover:text-[#1e5a7e]"
                      >
                        +61 2 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail
                      className="text-[#f47820] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="text-[#1e5a7e] mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@endeavour.com.au"
                        className="text-gray-600 hover:text-[#1e5a7e]"
                      >
                        info@endeavour.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock
                      className="text-[#f47820] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="text-[#1e5a7e] mb-1">
                        Business Hours
                      </p>
                      <p className="text-gray-600">
                        Monday - Friday
                      </p>
                      <p className="text-gray-600">
                        9:00 AM - 6:00 PM AEST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1E5A8E] text-white border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">
                    Book a Consultation
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Schedule a free consultation with our expert
                    advisors to discuss your education and
                    migration goals.
                  </p>
                  <Button className="bg-[#f47820] hover:bg-[#d66a1a] w-full">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1E5A8E] text-white flex items-center justify-center hover:bg-[#164a73] transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1E5A8E] text-white flex items-center justify-center hover:bg-[#164a73] transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1E5A8E] text-white flex items-center justify-center hover:bg-[#164a73] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1E5A8E] text-white flex items-center justify-center hover:bg-[#164a73] transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="mt-6 pt-6 border-t">
                    <a
                      href="https://wa.me/61212345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">
              Our Offices
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1e5a7e] mb-4">
                    {office.city}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <MapPin
                        className="text-[#f47820] flex-shrink-0 mt-1"
                        size={18}
                      />
                      <p className="text-gray-600">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Phone
                        className="text-[#f47820] flex-shrink-0 mt-1"
                        size={18}
                      />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-gray-600 hover:text-[#1e5a7e]"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex gap-2">
                      <Mail
                        className="text-[#f47820] flex-shrink-0 mt-1"
                        size={18}
                      />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-600 hover:text-[#1e5a7e]"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex gap-2">
                      <Clock
                        className="text-[#f47820] flex-shrink-0 mt-1"
                        size={18}
                      />
                      <p className="text-gray-600">
                        {office.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">
              Location
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">
              Visit Our Melbourne Office
            </h2>
          </div>
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.96095431531895!3d-37.81360797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5d2ba5c0f%3A0x5045675218ce7e0!2sLevel%2014%2F50%20Market%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Endeavour Education & Migration Consultancy Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a]">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-2xl max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  Join Our Team
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're always looking for passionate
                  professionals to join the Endeavour family. Be
                  part of a team that makes a real difference in
                  people's lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-[#1E5A8E] hover:bg-[#164a73] px-8"
                  >
                    View Open Positions
                  </Button>
                  <a
                    href="mailto:careers@endeavour.com.au"
                    className="text-[#1E5A8E] hover:text-[#164a73] underline"
                  >
                    careers@endeavour.com.au
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}