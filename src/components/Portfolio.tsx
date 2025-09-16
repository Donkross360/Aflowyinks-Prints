import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'LASG Event Materials',
      category: 'government',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete branding package for Lagos State Government event including banners, brochures, and signage'
    },
    {
      id: 2,
      title: 'Corporate Business Cards',
      category: 'business',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury business cards with spot UV and foil stamping for executive team'
    },
    {
      id: 3,
      title: 'Restaurant Menu Design',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/4087996/pexels-photo-4087996.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Double-sided laminated menus with food photography integration'
    },
    {
      id: 4,
      title: 'Event Banners & Backdrops',
      category: 'events',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large format banners and step-and-repeat backdrops for corporate events'
    },
    {
      id: 5,
      title: 'Product Packaging',
      category: 'packaging',
      image: 'https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom packaging design and printing for cosmetics brand launch'
    },
    {
      id: 6,
      title: 'Branded T-shirts & Caps',
      category: 'merchandise',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Screen printed promotional merchandise for tech company team building'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'government', label: 'Government' },
    { id: 'business', label: 'Business' },
    { id: 'events', label: 'Events' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'merchandise', label: 'Merchandise' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            From government contracts to small business branding, see how we've helped Lagos businesses and organizations achieve their goals
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-coral-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <span className="px-3 py-1 bg-mint-100 text-mint-700 text-xs font-semibold rounded-full uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients including LASG, corporate organizations, and small businesses across Lagos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('quote');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-slate-700 rounded-xl border-2 border-slate-200 hover:border-mint-500 hover:text-mint-600 transition-all duration-300 font-semibold"
              >
                View More Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;