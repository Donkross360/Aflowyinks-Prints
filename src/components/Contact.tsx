import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi Aflowyinks Prints! 

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Please get back to me. Thank you!`;

    const whatsappUrl = `https://wa.me/2348132580308?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your printing project? Contact us today for a quote or consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Visit Our Office</h4>
                      <p className="text-slate-600 leading-relaxed">
                        16 Adetoun Close, College Road,<br />
                        Ogba, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-mint-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Call or WhatsApp</h4>
                      <p className="text-slate-600">
                        <a href="tel:+2348132580308" className="hover:text-mint-500 transition-colors">
                          0813 258 0308
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                      <p className="text-slate-600">
                        <a href="mailto:info@aflowyinksprints.com" className="hover:text-blue-500 transition-colors">
                          info@aflowyinksprints.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <div className="text-slate-600 text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="https://wa.me/2348132580308?text=Hi%20Aflowyinks%20Prints!%20I%27d%20like%20to%20discuss%20a%20printing%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 bg-mint-500 text-white rounded-xl hover:bg-mint-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                    <a
                      href="tel:+2348132580308"
                      className="flex items-center justify-center px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-coral-500 to-coral-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                <p className="text-coral-100">We'll get back to you within 2 hours during business hours</p>
              </div>

              {submitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">We've received your message and will respond shortly via WhatsApp or phone.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your printing needs, preferred delivery date, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl hover:from-coral-600 hover:to-coral-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">Find Us</h3>
                <p className="text-slate-600">16 Adetoun Close, College Road, Ogba, Lagos</p>
              </div>
              <div className="h-80 bg-slate-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.386!2d3.3410!3d6.6292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnNDcuMSJOIDPCsDIwJzI3LjYiRQ!5e0!3m2!1sen!2sng!4v1000000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aflowyinks Prints Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;