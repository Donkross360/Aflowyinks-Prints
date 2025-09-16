import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const TrustBar = () => {
  return (
    <section className="py-12 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-mint-400 mb-2">Trusted by Lagos Businesses & Government</p>
          <p className="text-slate-300">LASG Vendor • On-time Delivery • Color-accurate Prints • Flexible MOQs</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-mint-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-mint-400" />
            </div>
            <h3 className="font-semibold text-lg">LASG Approved</h3>
            <p className="text-slate-400 text-sm">Official vendor for Lagos State Government projects</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-coral-400" />
            </div>
            <h3 className="font-semibold text-lg">Fast Turnaround</h3>
            <p className="text-slate-400 text-sm">24-48 hour delivery for most print jobs</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-slate-400 text-sm">Color-managed workflow ensures perfect prints</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg">Flexible Orders</h3>
            <p className="text-slate-400 text-sm">From single copies to bulk orders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;