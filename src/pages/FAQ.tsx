import { useState } from 'react';
import { ChevronDown, Search, BookOpen, Plane, GraduationCap, Shield, Home, FileText } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: FileText },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'visa', label: 'Visas & Migration', icon: Plane },
    { id: 'oshc', label: 'Health Insurance', icon: Shield },
    { id: 'accommodation', label: 'Accommodation', icon: Home },
    { id: 'general', label: 'General', icon: BookOpen }
  ];

  const faqs = [
    {
      id: 1,
      category: 'education',
      question: 'How do I choose the right course and university in Australia?',
      answer: 'Our education consultants assess your academic background, career goals, budget, and preferences to recommend suitable courses and universities. We consider factors like course content, university rankings, location, fees, and post-study work opportunities. We represent over 100 Australian institutions and can guide you to the best fit for your goals.'
    },
    {
      id: 2,
      category: 'education',
      question: 'What are the entry requirements for Australian universities?',
      answer: 'Entry requirements vary by course and level. Generally, you need: completed previous education (high school for undergraduate, bachelor\'s for postgraduate), English proficiency test (IELTS, PTE, TOEFL), and relevant work experience for some courses. We help you understand specific requirements and prepare your application accordingly.'
    },
    {
      id: 3,
      category: 'education',
      question: 'How long does it take to get a university offer?',
      answer: 'Most universities provide conditional offers within 1-2 weeks of application submission. After submitting additional documents (if required), you\'ll receive an unconditional offer within another 1-2 weeks. The timeline can vary based on course demand and application completeness.'
    },
    {
      id: 4,
      category: 'visa',
      question: 'What is a Student Visa (Subclass 500) and how do I apply?',
      answer: 'The Student Visa (Subclass 500) allows international students to study in Australia. You need a Confirmation of Enrolment (CoE) from your institution, proof of financial capacity, Overseas Student Health Cover (OSHC), English proficiency, and Genuine Temporary Entrant (GTE) statement. We guide you through the entire application process and document preparation.'
    },
    {
      id: 5,
      category: 'visa',
      question: 'How long does student visa processing take?',
      answer: 'Student visa processing times vary by country and individual circumstances. On average, it takes 4-6 weeks, but can be faster or longer depending on your case. We recommend applying at least 6-8 weeks before your course start date to allow for any delays or additional document requests.'
    },
    {
      id: 6,
      category: 'visa',
      question: 'Can I work while studying in Australia?',
      answer: 'Yes! Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during scheduled course breaks. This helps you gain work experience and support your living expenses. Some courses also include work placements as part of the curriculum.'
    },
    {
      id: 7,
      category: 'visa',
      question: 'What is the Genuine Temporary Entrant (GTE) requirement?',
      answer: 'The GTE requirement ensures you intend to stay in Australia temporarily for study purposes. You need to demonstrate your ties to your home country, explain why you chose Australia and your specific course, and show how it relates to your career goals. We help you craft a compelling GTE statement.'
    },
    {
      id: 8,
      category: 'visa',
      question: 'What are the pathways to permanent residency after studying?',
      answer: 'Australia offers several pathways including: Post-Study Work Visa (Subclass 485), Skilled Migration (Subclass 189/190), Employer Sponsorship (Subclass 186/482), and State Nomination programs. Your eligibility depends on your qualification, work experience, age, and English proficiency. Our migration agents can assess your options.'
    },
    {
      id: 9,
      category: 'oshc',
      question: 'What is OSHC and why is it mandatory?',
      answer: 'Overseas Student Health Cover (OSHC) is mandatory health insurance for international students in Australia. It covers doctor visits, hospital treatments, ambulance services, and prescription medications. You must have OSHC for the entire duration of your visa. We help you choose the right OSHC plan for your needs.'
    },
    {
      id: 10,
      category: 'oshc',
      question: 'Can I include my family in my OSHC policy?',
      answer: 'Yes, you can purchase OSHC for your spouse/partner and dependent children. Family OSHC policies (Single, Couple, Family) are available. The cost increases with each member added, but it ensures your entire family has health coverage while in Australia.'
    },
    {
      id: 11,
      category: 'oshc',
      question: 'Which OSHC provider should I choose?',
      answer: 'We work with major OSHC providers including Allianz, Bupa, Medibank, and NIB. All providers must meet government requirements, but they differ in price, coverage extras, and claim processes. We compare providers and recommend the best option based on your budget and needs.'
    },
    {
      id: 12,
      category: 'accommodation',
      question: 'What accommodation options are available in Australia?',
      answer: 'Options include: on-campus student residences, homestay with Australian families, shared apartments/houses, private studio apartments, and purpose-built student accommodations (PBSA). Each option varies in cost, location, and amenities. We help you find suitable accommodation before you arrive.'
    },
    {
      id: 13,
      category: 'accommodation',
      question: 'How much should I budget for accommodation?',
      answer: 'Costs vary by city and accommodation type. Sydney/Melbourne: $250-500/week; Brisbane/Perth: $200-400/week; Regional areas: $150-300/week. On-campus and homestay are typically more affordable. We provide detailed cost breakdowns for your chosen city and connect you with trusted accommodation providers.'
    },
    {
      id: 14,
      category: 'accommodation',
      question: 'Can you help me secure accommodation before I arrive?',
      answer: 'Absolutely! We partner with accommodation providers across major Australian cities. We can arrange temporary accommodation for your arrival and help you find long-term housing. We provide virtual tours, lease agreement reviews, and support throughout the process.'
    },
    {
      id: 15,
      category: 'general',
      question: 'Is there a fee for your consultancy services?',
      answer: 'Our initial consultation and course counseling services are FREE. We\'re commission-based and receive payment from our partner institutions, so there\'s no cost to you for education placement services. We only charge for additional services like visa lodgement assistance, migration advice (by registered agents), and document preparation if required.'
    },
    {
      id: 16,
      category: 'general',
      question: 'How long before my course starts should I contact you?',
      answer: 'Ideally, contact us 6-12 months before your intended course start date. This gives enough time for university selection, application, visa processing, and preparation. However, we can also assist with urgent applications depending on course availability and visa processing times.'
    },
    {
      id: 17,
      category: 'general',
      question: 'Do you provide support after I arrive in Australia?',
      answer: 'Yes! Our pre-departure orientation prepares you for life in Australia, and we provide ongoing support after you arrive. This includes assistance with settling in, extending visas, changing courses, finding part-time work, and addressing any issues during your studies.'
    },
    {
      id: 18,
      category: 'general',
      question: 'What documents do I need to start my application?',
      answer: 'Basic documents include: valid passport, academic transcripts and certificates, English test results (IELTS/PTE/TOEFL), CV/resume, passport-sized photos, and financial documents. Specific requirements vary by course. We provide a personalized checklist based on your chosen course and institution.'
    },
    {
      id: 19,
      category: 'education',
      question: 'Can I transfer to another university after starting my course?',
      answer: 'Yes, but there are restrictions. You generally need to complete 6 months of your principal course before transferring. You\'ll need a release letter from your current institution and acceptance from the new institution. We can guide you through the transfer process and visa implications.'
    },
    {
      id: 20,
      category: 'visa',
      question: 'What happens if my visa application is rejected?',
      answer: 'If rejected, you may have options to appeal or reapply depending on the reasons. We carefully prepare applications to minimize rejection risk. If rejection occurs, we analyze the reasons, advise on next steps, and can assist with appeals or fresh applications with stronger documentation.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
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
            <div className="inline-block bg-[#1E5A8E]/40 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="flex items-center gap-2">
                ❓ <span>Frequently Asked Questions</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Got Questions? <span className="text-white drop-shadow-lg">We Have Answers</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Find answers to common questions about studying in Australia, visas, health insurance, and more
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <Input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-4 py-6 text-lg border-2 focus:border-[#1E5A8E]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => {
              const Icon = category.icon;
              const count = category.id === 'all' 
                ? faqs.length 
                : faqs.filter(faq => faq.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-full transition-all
                    ${activeCategory === category.id 
                      ? 'bg-[#1E5A8E] text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                  <Badge variant="secondary" className={`
                    ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200'}
                  `}>
                    {count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Search className="mx-auto mb-4 text-gray-400" size={48} />
                  <h3 className="text-2xl text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search or category filter</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-[#1E5A8E]/10 text-[#1E5A8E] hover:bg-[#1E5A8E]/10">
                              {categories.find(c => c.id === faq.category)?.label}
                            </Badge>
                          </div>
                          <h3 className="text-lg text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`flex-shrink-0 text-[#1E5A8E] transition-transform ${
                            openQuestion === faq.id ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      </button>
                      
                      {openQuestion === faq.id && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our expert consultants are here to help. Get in touch for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors shadow-xl">
                Contact Us
              </button>
            </Link>
            <Link to="/events">
              <button className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 py-4 rounded-lg transition-colors shadow-xl">
                Attend a Workshop
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}