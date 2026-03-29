'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  reverse?: boolean;
  overlay?: boolean;
}

const FeatureSection = ({ title, subtitle, description, imageSrc, buttonText, reverse, overlay }: FeatureSectionProps) => {
  if (overlay) {
    return (
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden group">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8"
              >
                {title}
              </motion.h2>
              <div className="max-w-md">
                <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-90">{subtitle}</p>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">{description}</p>
                <Link href="/ventures" className="inline-block px-8 py-3 border border-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#FF0066] transition-all duration-300">
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Non-overlay version if needed, but the image shows mostly overlays for these sections */}
    </section>
  );
};

export default FeatureSection;
