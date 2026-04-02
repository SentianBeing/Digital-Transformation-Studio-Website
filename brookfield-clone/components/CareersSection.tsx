'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const CareersSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-6 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Careers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] mb-8">
            Join a team that builds real things — ventures, infrastructure, and businesses that last.
          </h2>
          <Link href="/careers" className="inline-block px-8 py-3 border border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Explore Careers
          </Link>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://picsum.photos/seed/career1/800/600"
              alt="Team collaborating"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://picsum.photos/seed/career2/800/600"
              alt="Office environment"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src="https://picsum.photos/seed/career3/800/450"
            alt="Team meeting"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src="https://picsum.photos/seed/career4/800/450"
            alt="Global presence"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src="https://picsum.photos/seed/career5/800/450"
            alt="Diverse team"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
