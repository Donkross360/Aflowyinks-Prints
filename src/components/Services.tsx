import React from 'react';
import { CreditCard, FileText, Image, Shirt, Package, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Premium business cards with various finishes and materials',
      features: ['350gsm Art Card', 'Matte/Gloss Lamination', 'Spot UV Available', 'Same Day Service'],
      price: 'From ₦15,000',
      bgColor: 'bg-coral-50',
      iconColor: 'text-coral-500'
    },
    {
      icon: FileText,
      title: 'Flyers & Brochures',
      description: 'Eye-catching marketing materials that drive results',
      features: ['A5, A4, A3 Sizes', 'Full Color CMYK', 'Fold Options', '24hr Turnaround'],
      price: 'From ₦8,000',
      bgColor: 'bg-mint-50',
      iconColor: 'text-mint-500'
    },
    {
      icon: Image,
      title: 'Banners & Roll-ups',
      description: 'Large format printing for events and advertising',
      features: ['Weather Resistant', 'Various Sizes', 'Easy Setup', 'Portable Stands'],
      price: 'From ₦25,000',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: Shirt,
      title: 'Brand Merchandise',
      description: 'Custom branded apparel and promotional items',
      features: ['T-shirts & Caps', 'Mugs & Bags', 'USB & Tech Items', 'Bulk Discounts'],
      price: 'From ₦5,000',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: Package,
      title: 'Stickers & Labels',
      description: 'Durable stickers and labels for any application',
      features: ['Waterproof Options', 'Die-cut Shapes', 'Vinyl Materials', 'Variable Data'],
      price: 'From ₦12,000',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500'
    },
    {
      icon: Building,
      title: 'Corporate Stationery',
      description: 'Professional letterheads, envelopes, and folders',
      features: ['Letterheads', 'Compliment Slips', 'Envelopes', 'Presentation Folders'],
      price: 'From ₦18,000',
      bgColor: 'bg-slate-50',
      iconColor: 'text-slate-500'
    }
  ];

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Printing Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From business essentials to large format displays, we deliver exceptional quality across all printing categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl border border-slate-200 hover:border-coral-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`${service.bgColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center border border-white/50`}>
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 bg-white/80 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-mint-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={scrollToQuote}
                    className="w-full py-3 bg-slate-800 text-white rounded-lg hover:bg-coral-500 transition-all duration-300 font-semibold group-hover:transform group-hover:scale-105"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Notice */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Need something not listed? We handle custom printing projects too!</p>
          <button 
            onClick={scrollToQuote}
            className="px-8 py-3 bg-mint-500 text-white rounded-xl hover:bg-mint-600 transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;