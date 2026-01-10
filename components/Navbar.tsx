
"use client";

import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Globe,
  Cpu,
  Cloud,
  ShieldCheck,
  Briefcase,
  HeartPulse,
  ShoppingCart,
  Truck,
  Smartphone,
  Palette,
  Megaphone,
  Rocket,
  Database,
  Video,
  Menu,
  X
} from 'lucide-react';

type MenuType = 'services' | 'expertise' | 'industries' | null;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!activeMenu || activeMenu !== 'services') {
      setShowMoreServices(false);
    }
  }, [activeMenu]);

  const toggleMobileMenu = (key: string) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const menuData = {
    services: {
      cta: "Tell us about your project idea and let us guide you",
      primary: [
        { title: "AI Automation Setup", icon: <Cpu size={20} /> },
        { title: "Mobile App Development", icon: <Smartphone size={20} /> },
        { title: "Website Development", icon: <Globe size={20} /> },
        { title: "UI/UX Design", icon: <Palette size={20} /> }
      ],
      secondary: [
        { title: "Digital Marketing", icon: <Megaphone size={20} /> },
        { title: "Digital Transformation Consulting", icon: <Rocket size={20} /> },
        { title: "Custom ERP Development", icon: <Database size={20} /> },
        { title: "Instagram Viral Video Ads", icon: <Video size={20} /> }
      ]
    },
    expertise: {
      cta: "Leverage our deep technical knowledge for your growth",
      items: [
        { title: "Cloud & DevOps Solutions", icon: <Cloud size={20} /> },
        { title: "AI & Machine Learning", icon: <Cpu size={20} /> },
        { title: "Cybersecurity Services", icon: <ShieldCheck size={20} /> },
        { title: "Web & Mobile Ecosystems", icon: <Globe size={20} /> }
      ]
    },
    industries: {
      cta: "Tailored solutions for your specific market challenges",
      items: [
        { title: "Fintech & Banking", icon: <Briefcase size={20} /> },
        { title: "Healthcare & Life Sciences", icon: <HeartPulse size={20} /> },
        { title: "E-commerce & Retail", icon: <ShoppingCart size={20} /> },
        { title: "Logistics & Supply Chain", icon: <Truck size={20} /> }
      ]
    }
  };

  const allServices = [...menuData.services.primary, ...menuData.services.secondary];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled && !isMobileMenuOpen
        ? 'bg-[#0a0a0a] border-b border-white/5 py-4'
        : 'bg-transparent border-b border-transparent py-6'
        }`}
      onMouseLeave={() => !isMobileMenuOpen && setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[110]">
        <div className="flex items-center cursor-pointer group" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="https://res.cloudinary.com/der2xk0cv/image/upload/v1768050854/divegridlogo_huvrkh.png"
            alt="DiveGrid Logo"
            className="h-8 md:h-9 w-auto object-contain transition-opacity group-hover:opacity-80"
          />
        </div>

        <div className="hidden lg:flex items-center gap-8 h-full">
          <a href="#" className="text-sm font-semibold hover:text-[#FF005E] transition-colors">Case studies</a>

          <div
            className={`flex items-center gap-1 cursor-pointer transition-colors relative h-full py-2 ${activeMenu === 'services' ? 'text-[#FF005E]' : 'hover:text-[#FF005E]'}`}
            onMouseEnter={() => setActiveMenu('services')}
          >
            <span className="text-sm font-semibold">Services</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
          </div>

          <div
            className={`flex items-center gap-1 cursor-pointer transition-colors relative h-full py-2 ${activeMenu === 'expertise' ? 'text-[#FF005E]' : 'hover:text-[#FF005E]'}`}
            onMouseEnter={() => setActiveMenu('expertise')}
          >
            <span className="text-sm font-semibold">Expertise</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'expertise' ? 'rotate-180' : ''}`} />
          </div>

          <div
            className={`flex items-center gap-1 cursor-pointer transition-colors relative h-full py-2 ${activeMenu === 'industries' ? 'text-[#FF005E]' : 'hover:text-[#FF005E]'}`}
            onMouseEnter={() => setActiveMenu('industries')}
          >
            <span className="text-sm font-semibold">Industries</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
          </div>

          <a href="#" className="text-sm font-semibold hover:text-[#FF005E] transition-colors">Company</a>
          <a href="#" className="text-sm font-semibold hover:text-[#FF005E] transition-colors">Careers</a>
        </div>

        <div className="flex items-center gap-4">
          <button className={`hidden md:block px-6 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 ${isScrolled
            ? 'border-white/20 hover:bg-white hover:text-black'
            : 'border-white/40 hover:bg-white/10'
            }`}>
            Contact us
          </button>

          {!isMobileMenuOpen && (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-[#FF005E] transition-colors"
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      <div
        className={`hidden lg:block absolute top-full left-0 right-0 transition-all duration-500 ease-out overflow-hidden ${activeMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 pt-2 pb-8">
          <div className="bg-[#151515] rounded-[2.5rem] border border-white/5 shadow-2xl p-10 flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                  {activeMenu === 'industries' ? 'Domain Expertise' : 'Connect with us'}
                </span>
                <h3 className="text-xl font-bold mb-8 leading-tight">
                  {activeMenu ? (menuData[activeMenu] as any).cta : ''}
                </h3>
                <button className="group flex items-center justify-between px-6 py-3 rounded-full border border-white/20 text-sm font-bold hover:bg-white/5 transition-all">
                  Book a meeting
                  <ArrowRight size={16} className="text-[#FF005E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="lg:w-3/4 flex flex-col gap-4">
                <div className="grid grid-cols-4 gap-4">
                  {activeMenu === 'services' ? (
                    menuData.services.primary.map((item, idx) => (
                      <div key={idx} className="group/card bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 h-48 flex flex-col justify-between hover:border-[#FF005E]/40 hover:bg-[#1e1e1e] transition-all cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center text-gray-400 group-hover/card:text-[#FF005E] group-hover/card:bg-[#FF005E]/10 transition-all">
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold leading-tight group-hover/card:text-white transition-colors">{item.title}</span>
                      </div>
                    ))
                  ) : (
                    activeMenu && (menuData[activeMenu] as any).items.map((item: any, idx: number) => (
                      <div key={idx} className="group/card bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 h-48 flex flex-col justify-between hover:border-[#FF005E]/40 hover:bg-[#1e1e1e] transition-all cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center text-gray-400 group-hover/card:text-[#FF005E] group-hover/card:bg-[#FF005E]/10 transition-all">
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold leading-tight group-hover/card:text-white transition-colors">{item.title}</span>
                      </div>
                    ))
                  )}
                </div>

                {activeMenu === 'services' && (
                  <>
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() => setShowMoreServices(!showMoreServices)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase transition-all hover:border-[#FF005E]/40 hover:bg-[#FF005E]/5 ${showMoreServices ? 'text-[#FF005E]' : 'text-gray-500'}`}
                      >
                        {showMoreServices ? 'Show Less' : 'More Services'}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${showMoreServices ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    <div className={`grid grid-cols-4 gap-4 transition-all duration-500 overflow-hidden ${showMoreServices ? 'opacity-100 max-h-[500px] mt-2' : 'opacity-0 max-h-0'}`}>
                      {menuData.services.secondary.map((item, idx) => (
                        <div key={idx} className="group/card bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 h-48 flex flex-col justify-between hover:border-[#FF005E]/40 hover:bg-[#1e1e1e] transition-all cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center text-gray-400 group-hover/card:text-[#FF005E] group-hover/card:bg-[#FF005E]/10 transition-all">
                            {item.icon}
                          </div>
                          <span className="text-sm font-bold leading-tight group-hover/card:text-white transition-colors">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-[#121212] z-[120] flex flex-col transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/der2xk0cv/image/upload/v1768050854/divegridlogo_huvrkh.png"
              alt="DiveGrid Logo"
              className="h-7 w-auto object-contain"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-gray-400 transition-colors"
          >
            <X size={32} strokeWidth={1.2} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-6 pt-10 pb-8 flex flex-col">
          <div className="flex flex-col space-y-6">
            <a href="#" className="text-[1.35rem] font-bold text-white tracking-tight">Case studies</a>

            <button
              onClick={() => toggleMobileMenu('services')}
              className="w-full flex items-center justify-between text-[1.35rem] font-bold text-white text-left tracking-tight"
            >
              Services
              <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${expandedMobileMenus['services'] ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenus['services'] ? 'max-h-[500px] mt-2 mb-4' : 'max-h-0'}`}>
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                {allServices.map((item, idx) => (
                  <a key={idx} href="#" className="text-sm font-semibold text-gray-400 hover:text-white flex items-center gap-3">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => toggleMobileMenu('expertise')}
              className="w-full flex items-center justify-between text-[1.35rem] font-bold text-white text-left tracking-tight"
            >
              Expertise
              <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${expandedMobileMenus['expertise'] ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenus['expertise'] ? 'max-h-[500px] mt-2 mb-4' : 'max-h-0'}`}>
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                {menuData.expertise.items.map((item, idx) => (
                  <a key={idx} href="#" className="text-sm font-semibold text-gray-400 hover:text-white">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => toggleMobileMenu('industries')}
              className="w-full flex items-center justify-between text-[1.35rem] font-bold text-white text-left tracking-tight"
            >
              Industries
              <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${expandedMobileMenus['industries'] ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenus['industries'] ? 'max-h-[500px] mt-2 mb-4' : 'max-h-0'}`}>
              <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                {menuData.industries.items.map((item, idx) => (
                  <a key={idx} href="#" className="text-sm font-semibold text-gray-400 hover:text-white">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="text-[1.35rem] font-bold text-white tracking-tight">Company</a>
            <a href="#" className="text-[1.35rem] font-bold text-white tracking-tight">Careers</a>
            <a href="#" className="text-[1.35rem] font-bold text-white tracking-tight">Contact us</a>
          </div>

          <div className="mt-auto pt-12 pb-6 flex flex-col items-center text-center">
            <span className="text-gray-500 text-sm font-medium mb-3">Schedule a call</span>
            <h3 className="text-white text-[1.3rem] font-bold leading-tight mb-8 max-w-[280px]">
              Tell us about your project idea and let us guide you
            </h3>

            <button className="w-full max-w-sm py-4 px-8 border border-white/20 rounded-full flex items-center justify-between group transition-all hover:bg-white/5 active:scale-95">
              <span className="text-white font-bold text-base">Book a meeting</span>
              <ArrowRight size={18} className="text-[#FF005E]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
