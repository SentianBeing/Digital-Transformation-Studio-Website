
"use client";

import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#FF005E]">Proud to be a trusted partner</h2>
        <p className="text-gray-400 mb-20 max-w-2xl mx-auto">
          We measure our success with success of our customers and partners. By helping others win and grow we aspire to build bulletproof alliances.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block">
            <button className="p-4 rounded-full border border-white/10 hover:border-[#FF005E] transition-colors">
              <ArrowLeft size={24} />
            </button>
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
            <button className="p-4 rounded-full border border-white/10 hover:border-[#FF005E] transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="bg-[#151515] p-12 md:p-16 rounded-[2.5rem] border border-white/5 relative">
            <Quote className="absolute top-10 left-10 text-[#FF005E]/20 w-16 h-16" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 relative z-10">
              Divegrid delivered the platform, which significantly improved our impact metrics and user satisfaction ratings. We've appreciated the vendor's designs, product ownership, and strategic direction. Tallium performed well and I am grateful that they were transparent around changing priorities, timelines and impact of architectural choices.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/thomas/200/200" alt="Thomas Bell" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg">Thomas Bell</h4>
                <p className="text-gray-400 text-sm">Director of Technology, Global Nomads Group</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span className="grayscale">🇬🇧</span> London, UK
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-[#FF005E]' : 'bg-white/20'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
