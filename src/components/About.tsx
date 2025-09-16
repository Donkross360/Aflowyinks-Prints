import React from 'react';
import { Award, Users, MapPin, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About Aflowyinks Prints
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded with a mission to deliver exceptional printing solutions across Lagos State, 
                Aflowyinks Prints has grown from a small local print shop to a trusted partner for 
                government agencies, corporations, and small businesses throughout Nigeria.
              </p>
              <p>
                Our commitment to quality, speed, and customer satisfaction has earned us recognition 
                as an approved vendor for the Lagos State Government, while maintaining personalized 
                service for every client, regardless of project size.
              </p>
              <p>
                With state-of-the-art printing equipment and a team of skilled professionals, we 
                specialize in delivering color-accurate, high-quality prints with industry-leading 
                turnaround times.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-coral-100">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-coral-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-coral-100">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24h</div>
                  <div className="text-coral-100">Average Delivery</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-mint-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-500 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>

        {/* CEO Profile */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Meet Our CEO</h3>
              <h4 className="text-xl font-semibold text-coral-500 mb-4">Ogundare Olayinka Afolabi</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                With over a decade of experience in the printing and graphics industry, Olayinka founded 
                Aflowyinks Prints with a vision to revolutionize printing services in Lagos. His commitment 
                to excellence and customer-first approach has been instrumental in building lasting 
                relationships with clients ranging from government agencies to small startups.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Under his leadership, Aflowyinks has become synonymous with quality, reliability, and 
                innovation in the Lagos printing industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-coral-500 shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}ceo.jpeg`}
                  alt="Ogundare Olayinka Afolabi - CEO & Founder of Aflowyinks Prints"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-slate-600">
                <div className="font-semibold">Founder & CEO</div>
                <div className="text-sm">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-coral-500 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              To provide exceptional printing solutions that help Lagos businesses and organizations 
              communicate effectively, build their brand presence, and achieve their goals through 
              high-quality, timely, and cost-effective printing services.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-mint-500 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">Our Values</h3>
            </div>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-mint-500 rounded-full mr-3"></div>
                <span><strong>Quality:</strong> Never compromise on excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-coral-500 rounded-full mr-3"></div>
                <span><strong>Speed:</strong> Deliver on time, every time</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                <span><strong>Service:</strong> Customer satisfaction first</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span><strong>Innovation:</strong> Embrace new technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Trusted by Leading Organizations</h3>
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">LASG</span>
                </div>
                <div className="text-sm font-semibold text-slate-700">Lagos State Government</div>
                <div className="text-xs text-slate-500">Approved Vendor</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">SME</span>
                </div>
                <div className="text-sm font-semibold text-slate-700">Small Businesses</div>
                <div className="text-xs text-slate-500">200+ Clients</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">NGO</span>
                </div>
                <div className="text-sm font-semibold text-slate-700">Non-Profits</div>
                <div className="text-xs text-slate-500">Community Partners</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">CORP</span>
                </div>
                <div className="text-sm font-semibold text-slate-700">Corporations</div>
                <div className="text-xs text-slate-500">Enterprise Clients</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-600 font-medium">
                Join hundreds of satisfied clients who trust Aflowyinks for their printing needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;