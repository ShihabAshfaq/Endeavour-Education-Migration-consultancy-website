import { useState } from 'react';
import { Calendar, Search, Tag, ArrowRight, FileText, Download } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'education', 'migration', 'student-life', 'tips'];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Universities in Australia for International Students',
      excerpt: 'Discover the best universities in Australia that offer world-class education and excellent support for international students.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      category: 'education',
      date: '2024-11-15',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Student Visa Application: Complete Guide for 2024',
      excerpt: 'Everything you need to know about applying for an Australian student visa, including requirements, documents, and timelines.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      category: 'migration',
      date: '2024-11-10',
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'Living in Australia: A Student\'s Guide to Accommodation',
      excerpt: 'Find out about different accommodation options, costs, and tips for finding the perfect place to live while studying.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      category: 'student-life',
      date: '2024-11-08',
      author: 'Emma Wilson'
    },
    {
      id: 4,
      title: '5 Tips for a Smooth Transition to Australian Culture',
      excerpt: 'Practical advice to help you adapt to life in Australia and make the most of your international experience.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      category: 'tips',
      date: '2024-11-05',
      author: 'John Smith'
    },
    {
      id: 5,
      title: 'Understanding OSHC: Your Health Insurance Guide',
      excerpt: 'A comprehensive guide to Overseas Student Health Cover and why it\'s essential for your studies in Australia.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      category: 'tips',
      date: '2024-11-01',
      author: 'Sarah Johnson'
    },
    {
      id: 6,
      title: 'Pathway to Permanent Residency After Graduation',
      excerpt: 'Explore your options for staying in Australia after completing your studies and transitioning to permanent residency.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      category: 'migration',
      date: '2024-10-28',
      author: 'Michael Chen'
    },
    {
      id: 7,
      title: 'Budgeting Tips for International Students',
      excerpt: 'Learn how to manage your finances effectively while studying abroad in Australia.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      category: 'student-life',
      date: '2024-10-25',
      author: 'Emma Wilson'
    },
    {
      id: 8,
      title: 'Most In-Demand Courses in Australia',
      excerpt: 'Discover which courses and fields of study are currently in high demand and offer excellent career prospects.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
      category: 'education',
      date: '2024-10-20',
      author: 'John Smith'
    },
    {
      id: 9,
      title: 'Working Rights for International Students',
      excerpt: 'Understand your work rights while studying in Australia and how to balance work with your studies.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      category: 'student-life',
      date: '2024-10-15',
      author: 'Sarah Johnson'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                📚 <span>Resources & Blog</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Stay Informed with <span className="text-white drop-shadow-lg">Expert Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Latest tips, guides, and news about education and migration to Australia
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Tag size={20} className="text-gray-600" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-[#1e5a7e]' : ''}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-[#f47820]/10 text-[#f47820]">
                      {post.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  <h3 className="text-xl text-[#1e5a7e] mb-2 group-hover:text-[#f47820] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <span className="text-[#f47820] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">By {post.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-xl">No articles found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-[#1e5a7e] mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles, tips, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-[#1e5a7e] hover:bg-[#164a63]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1e5a7e] mb-4">Downloadable Guides</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Free comprehensive guides to help you on your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#f47820]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-[#f47820]" size={32} />
                </div>
                <h3 className="text-xl text-[#1e5a7e] mb-2">Student Visa Checklist</h3>
                <p className="text-gray-600 mb-4">Complete checklist of documents required for your student visa application</p>
                <Button variant="outline" className="gap-2">
                  <Download size={16} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#f47820]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-[#f47820]" size={32} />
                </div>
                <h3 className="text-xl text-[#1e5a7e] mb-2">Pre-Departure Guide</h3>
                <p className="text-gray-600 mb-4">Everything you need to know before arriving in Australia</p>
                <Button variant="outline" className="gap-2">
                  <Download size={16} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#f47820]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-[#f47820]" size={32} />
                </div>
                <h3 className="text-xl text-[#1e5a7e] mb-2">University Comparison</h3>
                <p className="text-gray-600 mb-4">Compare top Australian universities and find your perfect match</p>
                <Button variant="outline" className="gap-2">
                  <Download size={16} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}