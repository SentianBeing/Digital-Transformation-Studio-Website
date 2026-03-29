'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const Partners = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners = [
    {
      name: 'Salhurry',
      description: 'A sales and marketing growth agency built to help businesses build predictable revenue systems, scale customer acquisition, and dominate their markets through data-driven growth strategies.',
      image: 'https://res.cloudinary.com/dyc4fcvot/image/upload/v1774773004/salhurry_i1eqo8.png',
      href: '/ventures/salhurry',
    },
    {
      name: 'DiveGrid Infrastructure',
      description: 'Our construction and infrastructure venture builder delivers large-scale built environments — partnering with developers, municipalities, and institutions to bring critical projects from concept to completion.',
      image: 'https://res.cloudinary.com/dyc4fcvot/image/upload/v1774771911/Untitled_design_1_e1bcfd.jpg',
      href: '/ventures/infrastructure',
    },
    {
      name: 'Southern Sigma Ventures',
      description: 'A trusted partner in mining, quarrying, and material supply — Southern Sigma Ventures provides the raw material foundations that support DiveGrid\'s infrastructure and construction projects.',
      image: 'https://res.cloudinary.com/dyc4fcvot/image/upload/v1774772249/compressed_9441540d-c4eb-4dfd-82d1-02d24e1db7da_yo6i5l.webp',
      href: '/partners',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto bg-[#F7F7F7]">
      <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Partners
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-[#111111] tracking-tight">Our Ventures & Partners</h2>
      </div>
      <div className="border-t border-[#E5E7EB]">
        {partners.map((partner, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={partner.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border-b border-[#E5E7EB] overflow-hidden cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-10 items-start">
                {/* Image Container */}
                <motion.div
                  animate={{
                    width: isHovered ? '45%' : '22%',
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="relative flex-shrink-0 overflow-hidden rounded-sm shadow-sm"
                >
                  <div className="aspect-[16/9] relative w-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                {/* Content Container */}
                <div className="flex-grow flex flex-col justify-start pt-1">
                  <motion.h3
                    layout
                    className={`text-2xl md:text-4xl font-serif transition-colors duration-300 ${isHovered ? 'text-[#FF0066]' : 'text-[#111111]'}`}
                  >
                    {partner.name}
                  </motion.h3>

                  <AnimatePresence mode="wait">
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-6"
                      >
                        <p className="text-base md:text-lg text-[#6B7280] mb-8 max-w-md leading-relaxed">
                          {partner.description}
                        </p>
                        <Link href={partner.href} className="inline-block px-8 py-2.5 border border-[#FF0066] text-[#FF0066] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#E6005C] hover:text-white transition-all duration-300">
                          Learn More
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
