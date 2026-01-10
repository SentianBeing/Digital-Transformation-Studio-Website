
import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] pt-32 rounded-[2.5rem] mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">Start growing </span>
              <span className="text-[#FF005E]">your business with us</span>
            </h2>
          </div>

          <div className="lg:w-1/2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full name *" 
                className="w-full bg-[#2a2a2a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF005E] transition-all"
              />
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full bg-[#2a2a2a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF005E] transition-all"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <span className="text-xl">🇺🇸</span>
                  <ChevronDown size={14} className="text-gray-400" />
                  <span className="text-gray-500 text-sm ml-1">+1</span>
                </div>
                <input 
                  type="tel" 
                  className="w-full bg-[#2a2a2a] border border-white/10 rounded-2xl px-20 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF005E] transition-all"
                />
              </div>
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full bg-[#2a2a2a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF005E] transition-all"
              />
            </div>

            <input 
              type="text" 
              placeholder="How did you hear about us?" 
              className="w-full bg-[#2a2a2a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF005E] transition-all"
            />

            <textarea 
              placeholder="Message" 
              rows={4} 
              className="w-full bg-[#2a2a2a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF005E] transition-all resize-none"
            ></textarea>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  className="mt-1 w-5 h-5 rounded border-white/20 bg-transparent accent-[#FF005E] cursor-pointer" 
                />
                <p className="text-[11px] text-gray-500 leading-tight max-w-[300px]">
                  We will add your info to our CRM for contacting you regarding your request. For more info please consult our <a href="#" className="text-[#FF005E] hover:underline">privacy policy</a>.
                </p>
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-[#FF005E] rounded-full font-bold text-sm tracking-widest text-white flex items-center justify-center gap-2 hover:bg-[#c2185b] transition-all">
                SEND MESSAGE <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/der2xk0cv/image/upload/v1768050854/divegridlogo_huvrkh.png" 
            alt="DiveGrid Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>
        <div className="flex gap-12 text-gray-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">Clutch</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </div>
        <p className="text-gray-600 text-xs">© 2024 DiveGrid. All rights reserved.</p>
      </div>

      <div className="h-6 bg-[#FF005E]"></div>
    </footer>
  );
};

export default Footer;
