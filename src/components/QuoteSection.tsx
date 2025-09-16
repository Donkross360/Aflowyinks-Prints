import React, { useState } from 'react';
import { Upload, Send, CheckCircle } from 'lucide-react';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    quantity: '',
    description: '',
    urgent: false,
    designHelp: false
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Business Cards',
    'Flyers & Brochures', 
    'Banners & Roll-ups',
    'Brand Merchandise',
    'Stickers & Labels',
    'Corporate Stationery',
    'Other (specify in description)'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi Aflowyinks Prints! I'd like to request a quote for:

📋 Service: ${formData.service}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🔢 Quantity: ${formData.quantity}
📝 Description: ${formData.description}
${formData.urgent ? '⚡ URGENT: Yes' : ''}
${formData.designHelp ? '🎨 Design Help Needed: Yes' : ''}

Please send me a detailed quote. Thank you!`;

    const whatsappUrl = `https://wa.me/2348132580308?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <section id="quote" className="py-16 lg:py-24 bg-gradient-to-br from-mint-50 to-mint-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quote Request Sent!</h2>
            <p className="text-slate-600 text-lg mb-6">
              We've opened WhatsApp with your quote details. Our team will respond within 30 minutes during business hours.
            </p>
            <p className="text-slate-500">
              You can also call us directly at <strong>0813 258 0308</strong>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-16 lg:py-24 bg-gradient-to-br from-coral-50 to-coral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get Your Instant Quote
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fill out the form below and we'll send you a detailed quote via WhatsApp within 30 minutes during business hours
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white">Project Details</h3>
            <p className="text-coral-100">Tell us about your printing needs</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                  placeholder="0813 258 0308"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700 mb-2">
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                  placeholder="e.g., 1000 pieces, 2 banners"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors resize-none"
                placeholder="Describe your project: sizes, colors, materials, special requirements, deadline, etc."
              />
            </div>

            {/* File Upload Area */}
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-coral-400 transition-colors">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-700 mb-2">Upload Your Files (Optional)</h4>
              <p className="text-slate-500 text-sm mb-4">
                Drag & drop your design files here, or click to browse
                <br />
                Supported: PDF, AI, PSD, JPG, PNG (Max 10MB each)
              </p>
              <button
                type="button"
                className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Choose Files
              </button>
            </div>

            {/* Additional Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleChange}
                  className="w-5 h-5 text-coral-500 border-slate-300 rounded focus:ring-coral-500"
                />
                <span className="text-slate-700">⚡ Urgent Job (24hr delivery)</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="designHelp"
                  checked={formData.designHelp}
                  onChange={handleChange}
                  className="w-5 h-5 text-mint-500 border-slate-300 rounded focus:ring-mint-500"
                />
                <span className="text-slate-700">🎨 I need design help</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl hover:from-coral-600 hover:to-coral-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Quote Request via WhatsApp
            </button>
          </form>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Prefer to talk directly?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+2348132580308"
              className="flex items-center justify-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              Call: 0813 258 0308
            </a>
            <a 
              href="https://wa.me/2348132580308?text=Hi%20Aflowyinks%20Prints!%20I%27d%20like%20to%20discuss%20a%20printing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;