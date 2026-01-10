
"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does DiveGrid handle all phases of the software development life cycle (SDLC)?",
      a: "Yes. DiveGrid is a full-cycle software development company delivering end-to-end SDLC services. Our team manages everything from discovery, requirement analysis, and solution architecture to development, testing, deployment, and long-term support. This ensures consistency, scalability, and high-quality delivery across every project."
    },
    {
      q: "How long does it take DiveGrid to deliver a custom software or mobile app solution?",
      a: "Project timelines depend on scope, complexity, and technology requirements. As an experienced mobile app development company, DiveGrid typically delivers MVPs within a few weeks, while larger enterprise software solutions follow a structured milestone-based roadmap. We prioritize speed without compromising quality."
    },
    {
      q: "How does DiveGrid ensure the quality of software products?",
      a: "Quality assurance is embedded throughout DiveGrid’s development process. We follow industry best practices including automated testing, manual QA, code reviews, security checks, and performance optimization. This approach ensures reliable, scalable, and production-ready software solutions."
    },
    {
      q: "What is the cost of hiring DiveGrid’s software development services?",
      a: "The cost depends on project requirements, engagement model, and technology stack. DiveGrid offers flexible pricing models including fixed-price, time-and-material, and dedicated team engagements. As a software development company in India, we deliver cost-effective solutions with global-quality standards."
    },
    {
      q: "Where does DiveGrid provide software and mobile app development services?",
      a: "DiveGrid serves clients globally while maintaining a strong presence in India. We are a trusted mobile app development company in Kerala, delivering custom software development, web applications, and mobile solutions for startups, enterprises, and growing businesses worldwide."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-[#FF005E] rounded-full"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Check out some of the most common questions asked by the clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
            Questions about our Software Development Services
          </h2>
          <button className="relative group overflow-hidden flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF005E] to-[#FF4E90] font-bold text-sm tracking-widest text-white shadow-xl shadow-[#FF005E]/20 hover:shadow-[#FF005E]/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              GET IN TOUCH
              <ArrowUpRight size={18} className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
          </button>
        </div>

        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all ${openIndex === idx ? 'bg-white border-white' : ''}`}>
                  {openIndex === idx ? <Minus size={16} className="text-black" /> : <Plus size={16} className="text-white" />}
                </div>
              </button>
              {openIndex === idx && (
                <div className="pb-8 text-gray-400 leading-relaxed text-sm animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
