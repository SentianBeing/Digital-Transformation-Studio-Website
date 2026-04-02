'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FileText, Headphones, ArrowRight } from 'lucide-react';

const Insights = () => {
  const insights = [
    {
      title: 'How Salhurry Helps Businesses Build Predictable Revenue Engines',
      type: 'White Paper',
      date: 'MAR 2026',
      image: 'https://picsum.photos/seed/salhurry-growth/800/450',
      icon: <FileText size={16} />,
    },
    {
      title: 'Infrastructure as a Competitive Moat: The DiveGrid Build Thesis',
      type: 'White Paper',
      date: 'JAN 2026',
      image: 'https://picsum.photos/seed/infra-build/800/450',
      icon: <FileText size={16} />,
    },
    {
      title: 'Southern Sigma Ventures on Building a Resilient Material Supply Chain',
      type: 'Podcast',
      date: 'FEB 2026',
      image: 'https://picsum.photos/seed/sigma-mining/800/450',
      icon: <Headphones size={16} />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-serif">Featured Insights</h2>
        </div>
        <Link href="/insights" className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#FF0066] hover:gap-3 transition-all">
          View All <ArrowRight size={14} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-6">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white p-6 border border-[#E5E7EB] shadow-sm group-hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="text-[#FF0066]">{insight.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF0066]">{insight.type}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">{insight.date}</span>
              </div>
              <h3 className="text-xl font-serif leading-tight group-hover:text-[#FF0066] transition-colors">
                {insight.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
