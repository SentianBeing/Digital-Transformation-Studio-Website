'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Salhurry: Growth is a System, Not a Guess",
    subtitle: "Sales & Marketing Venture",
    description: "Salhurry is DiveGrid's sales and marketing growth agency — built to help businesses acquire customers faster, scale revenue systematically, and turn pipelines into predictable engines of growth.",
    image: "https://res.cloudinary.com/dyc4fcvot/image/upload/v1774703211/510b77bc956df08c389866de3e82ab0e_ybfisg.jpg",
    href: "/ventures/salhurry",
  },
  {
    id: 2,
    title: "Building the Infrastructure of Tomorrow",
    subtitle: "Construction & Infrastructure Venture",
    description: "DiveGrid's construction and infrastructure venture partners with developers, governments, and institutions to deliver high-quality built environments — from commercial developments to essential public infrastructure.",
    image: "https://res.cloudinary.com/dyc4fcvot/image/upload/v1774770924/ChatGPT_Image_Mar_29_2026_01_24_56_PM_jkkaht.png",
    href: "/ventures/infrastructure",
  },
  {
    id: 3,
    title: "Resources That Power Progress",
    subtitle: "Strategic Partnerships",
    description: "Through partnerships like Southern Sigma Ventures, DiveGrid connects its ventures to critical supply chains in mining, quarrying, and material supply — ensuring the raw foundations that make great things possible.",
    image: "https://res.cloudinary.com/dyc4fcvot/image/upload/v1774771266/compressed_b011610b-4344-442e-8544-69685ac8c404_jj8zxu.webp",
    href: "/partners",
  }
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 6000; // 6 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = 50; // Update every 50ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">

          {/* Top part: Pagination */}
          <div className="mb-12 flex items-center space-x-4">
            <div className="flex space-x-2 bg-black/20 backdrop-blur-sm p-2 rounded-sm border border-white/10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setProgress(0);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#FF0066] w-4' : 'bg-white/40'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Middle part: Horizontal Line */}
          <div className="relative w-full h-[1px] bg-white/20 mb-12">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#FF0066]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bottom part: Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end text-white">
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-90">
                      {slides[currentSlide].subtitle}
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed max-w-md">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                  <Link
                    href={slides[currentSlide].href}
                    className="inline-block px-8 py-3 border border-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#FF0066] transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
