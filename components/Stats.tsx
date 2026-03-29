'use client';

import React from 'react';
import { motion } from 'motion/react';

const Stats = () => {
  const stats = [
    { label: 'Active Ventures', value: '2+' },
    { label: 'Clients Served', value: '120+' },
    { label: 'Industries', value: '4+' },
    { label: 'Team Members', value: '80+' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-6 block flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Our Scale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] text-[#111111]">
            Built to create compounding value — we launch and grow ventures that solve real problems across markets and industries.
          </h2>
        </div>
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">{stat.label}</div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FF0066]">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
