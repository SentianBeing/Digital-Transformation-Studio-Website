'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Recognition = () => {
  const awards = [
    {
      title: 'Salhurry',
      subtitle: 'VENTURE LAUNCH 2024',
      category: 'Sales & Marketing Growth Agency — now serving 80+ clients',
      color: 'text-[#FF0066]',
      border: 'border-[#FF0066]',
    },
    {
      title: 'DiveGrid Infrastructure',
      subtitle: 'VENTURE BUILD 2025',
      category: 'Construction & Infrastructure — first major project delivered',
      color: 'text-[#FF0066]',
      border: 'border-[#FF0066]',
    },
    {
      title: 'Southern Sigma',
      subtitle: 'PARTNERSHIP 2025',
      category: 'Mining & Material Supply — strategic partner onboarded',
      color: 'text-[#FF0066]',
      border: 'border-[#FF0066]',
    },
    {
      title: 'DiveGrid',
      subtitle: 'MILESTONE 2026',
      category: 'Multi-venture portfolio surpasses 120+ combined clients',
      color: 'text-[#FF0066]',
      border: 'border-[#FF0066]',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto bg-[#f9f9f9]">
      <div className="mb-16">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-6 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Recognition
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2]">
          Key milestones across the DiveGrid portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-8 border-l-4 border-[#FF0066] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`flex flex-col mb-8 ${award.color}`}>
              <span className="text-3xl font-bold tracking-tighter leading-none">{award.title}</span>
              <span className="text-sm font-bold tracking-widest mt-1">{award.subtitle}</span>
            </div>
            <p className="text-sm font-medium text-gray-600">{award.category}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end mt-12 space-x-2">
        <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronLeft size={18} />
        </button>
        <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Recognition;
