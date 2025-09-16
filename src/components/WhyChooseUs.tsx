import React from 'react';
import { CheckCircle, Clock, Palette, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Palette,
      title: 'Exceptional Quality',
      description: 'Color-managed workflow ensures every print matches your vision perfectly. We use premium materials and state-of-the-art equipment.',
      features: ['Color calibrated monitors', 'Premium paper stocks', 'Quality control checks', 'Professional finishing']
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Most orders completed within 24-48 hours. Rush jobs available for urgent requirements with same-day delivery in Lagos.',
      features: ['24hr standard turnaround', 'Same-day rush service', 'Lagos-wide delivery', 'Real-time order tracking']
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Personal project manager for every order. WhatsApp support, file help, and design consultation available throughout your project.',
      features: ['Personal project manager', 'WhatsApp support', 'File preparation help', 'Design consultation']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Lagos Businesses Choose Aflowyinks
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three core pillars that make us the preferred printing partner for government and businesses across Lagos State
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-mint-500 rounded-full"></div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{reason.description}</p>
                
                <div className="space-y-3">
                  {reason.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-mint-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <div key={star} className="w-5 h-5 bg-amber-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "Outstanding quality and service. They delivered our government event materials on time and exceeded expectations. Highly professional team."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-coral-600 font-bold">AO</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Adebayo Ogundimu</div>
                  <div className="text-sm text-slate-500">LASG Event Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <div key={star} className="w-5 h-5 bg-amber-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "Fast, reliable, and affordable. Our business cards and flyers always look professional. Great customer service via WhatsApp."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-mint-600 font-bold">SK</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Sarah Kehinde</div>
                  <div className="text-sm text-slate-500">Small Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <div key={star} className="w-5 h-5 bg-amber-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "They handle all our corporate printing needs. From business cards to large banners - consistent quality every time. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Michael Roberts</div>
                  <div className="text-sm text-slate-500">Corporate Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;