'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Youtube, ChevronDown } from 'lucide-react';

const footerLinks = [
  {
    title: 'About Us',
    links: [
      { name: 'Who We Are', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Our Story', href: '/about#story' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Our Ventures',
    links: [
      { name: 'Salhurry', href: '/ventures/salhurry' },
      { name: 'DiveGrid Infrastructure', href: '/ventures/infrastructure' },
      { name: 'All Ventures', href: '/ventures' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { name: 'Southern Sigma Ventures', href: '/partners#southern-sigma' },
      { name: 'Become a Partner', href: '/partners#become-partner' },
      { name: 'All Partners', href: '/partners' },
    ],
  },
  {
    title: 'Insights',
    links: [
      { name: 'White Papers', href: '/insights' },
      { name: 'Podcasts', href: '/insights' },
      { name: 'Case Studies', href: '/insights' },
      { name: 'News & Updates', href: '/insights' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Work With Us', href: '/contact#work-with-us' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] text-[#111111] pt-20 pb-10 px-6 md:px-12 border-t border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand and Social */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/divegridlogo.png"
                alt="DiveGrid"
                width={120}
                height={35}
                className="object-contain"
              />
            </Link>
            <p className="text-[13px] text-[#6B7280] leading-relaxed mb-6 max-w-xs">
              A multi-venture company building and scaling ambitious businesses across sales, marketing, construction, and infrastructure.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} className="cursor-pointer hover:text-[#FF0066] transition-colors" />
              </a>
              <a href="#" aria-label="X (Twitter)">
                <div className="cursor-pointer hover:text-[#FF0066] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={18} className="cursor-pointer hover:text-[#FF0066] transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280] mb-5">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[13px] font-medium hover:text-[#FF0066] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-[11px] font-medium text-[#6B7280]">
            <span className="hover:text-[#FF0066] cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-[#FF0066] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#FF0066] cursor-pointer transition-colors">Cookie Policy</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-[#6B7280]">
            <span>© 2026 DiveGrid. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
