'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect: translate the video container as the user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={containerRef} className="pt-32 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 relative z-10">
        <div className="lg:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight"
          >
            We Build What&apos;s Next
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="mt-6 h-[3px] w-24 bg-[#FF0066]"
          />
        </div>
        <div className="lg:col-span-4 lg:pb-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            DiveGrid is a multi-venture company that builds, scales, and backs ambitious businesses — from sales and marketing growth to construction and infrastructure development.
          </motion.p>
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="relative aspect-[16/7] w-full overflow-hidden rounded-sm bg-gray-100"
      >
        <motion.video
          style={{ scale }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/der2xk0cv/video/upload/v1773416165/vide_1_gdqbya.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </motion.video>
        {/* Subtle overlay to ensure text readability if needed, though here text is above */}
        <div className="absolute inset-0 bg-black/5"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
