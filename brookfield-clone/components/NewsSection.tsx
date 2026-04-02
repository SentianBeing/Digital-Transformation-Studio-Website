'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      source: 'DiveGrid',
      type: 'Announcement',
      date: 'MAR 2026',
      title: 'Salhurry Crosses 80 Active Clients, Expands Into B2B SaaS Growth',
      logo: 'DG',
    },
    {
      source: 'DiveGrid',
      type: 'Press Release',
      date: 'FEB 2026',
      title: 'DiveGrid Infrastructure Breaks Ground on First Commercial Development',
      logo: 'DG',
    },
    {
      source: 'DiveGrid',
      type: 'Partnership',
      date: 'JAN 2026',
      title: 'Southern Sigma Ventures Joins DiveGrid as Strategic Material Supply Partner',
      logo: 'SSV',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>News & Updates
        </span>
        <h2 className="text-3xl md:text-4xl font-serif">Recent Highlights</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Featured News */}
        <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden group">
          <Image
            src="https://picsum.photos/seed/bruce/800/600"
            alt="Bruce Flatt"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-[#FF0066] text-white flex items-center justify-center font-bold text-sm">DG</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Feature</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">DiveGrid</p>
              </div>
              <div className="ml-auto text-[10px] font-bold uppercase tracking-widest opacity-80">MAR 2026</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif leading-tight">
              DiveGrid Founder on Building a Multi-Venture Company from the Ground Up
            </h3>
          </div>
        </div>

        {/* News List */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <div key={index} className="py-8 border-b border-gray-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#FF0066] text-white flex items-center justify-center font-bold text-[9px]">
                      {item.logo}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.type}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.source}</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.date}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif group-hover:text-[#FF0066] transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronUp size={18} />
              </button>
              <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronDown size={18} />
              </button>
            </div>
            <Link href="/insights" className="inline-block px-6 py-2 border border-[#111111] text-[11px] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all duration-300">
              See All News
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
