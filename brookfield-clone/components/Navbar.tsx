'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'About Us', href: '/about', hasDropdown: false },
  {
    name: 'Our Ventures',
    href: '/ventures',
    hasDropdown: true,
    dropdown: [
      { name: 'Salhurry', href: '/ventures/salhurry', desc: 'Sales & Marketing Growth Agency' },
      { name: 'DiveGrid Infrastructure', href: '/ventures/infrastructure', desc: 'Construction & Infrastructure Ventures' },
    ],
  },
  { name: 'Partners', href: '/partners', hasDropdown: false },
  { name: 'Careers', href: '/careers', hasDropdown: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/divegridlogo.png"
            alt="DiveGrid"
            width={130}
            height={38}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center space-x-1 text-[13px] font-medium transition-colors ${pathname === link.href || pathname.startsWith(link.href + '/') ? 'text-[#FF0066]' : 'hover:text-[#FF0066]'}`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180 text-[#FF0066]' : 'text-[#6B7280]'}`}
                  />
                )}
              </Link>

              {link.hasDropdown && link.dropdown && (
                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-3 w-72 z-50"
                    >
                      <div className="bg-white border border-[#E5E7EB] shadow-xl py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-5 py-4 hover:bg-[#f9f9f9] group/item border-b border-[#F3F4F6] last:border-0"
                          >
                            <div className="text-[13px] font-semibold group-hover/item:text-[#FF0066] transition-colors">{item.name}</div>
                            <div className="text-[11px] text-[#6B7280] mt-0.5 leading-snug">{item.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-5 text-[13px] font-medium">
            <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-[#FF0066]' : 'hover:text-[#FF0066]'}`}>
              Contact Us
            </Link>
            <Link href="/insights" className={`transition-colors ${pathname === '/insights' ? 'text-[#FF0066]' : 'hover:text-[#FF0066]'}`}>
              Insights
            </Link>
          </div>
          <div className="h-4 w-[1px] bg-[#E5E7EB]" />
          <Search size={18} className="cursor-pointer hover:text-[#FF0066] transition-colors" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <Search size={20} className="cursor-pointer" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-[#E5E7EB] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-4 border-b border-[#F3F4F6] text-base font-medium transition-colors ${pathname === link.href ? 'text-[#FF0066]' : 'hover:text-[#FF0066]'}`}
                  >
                    <span>{link.name}</span>
                  </Link>
                  {link.dropdown && (
                    <div className="bg-[#f9f9f9] px-4 py-2 mb-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2.5 text-[13px] text-[#6B7280] hover:text-[#FF0066] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-1">
                <Link href="/contact" className="flex py-4 border-b border-[#F3F4F6] text-base font-medium hover:text-[#FF0066] transition-colors">
                  Contact Us
                </Link>
                <Link href="/insights" className="flex py-4 text-base font-medium hover:text-[#FF0066] transition-colors">
                  Insights
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
