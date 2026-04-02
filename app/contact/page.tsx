'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setForm({ name: '', email: '', subject: '', message: '' })
    setSubmitted(false)
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF0066] mb-4">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#111111] leading-tight mb-6 max-w-3xl">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-[#6B7280] text-lg max-w-2xl leading-relaxed">
          Whether you want to work with Salhurry, partner with DiveGrid Infrastructure, or explore
          a strategic alliance — we&apos;d love to hear from you.
        </p>
      </section>

      {/* ── Main Contact Grid ── */}
      <section className="py-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#FF0066]">
                    <Mail size={18} />
                  </span>
                  <span className="text-[#6B7280] text-sm">info@divegrid.in</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#FF0066]">
                    <Phone size={18} />
                  </span>
                  <span className="text-[#6B7280] text-sm">+91 62826 87001</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-[#FF0066]">
                    <MapPin size={18} />
                  </span>
                  <span className="text-[#6B7280] text-sm">JS Arcade, MC Rd, Kilimanoor, Trivandrum</span>
                </li>
              </ul>
            </div>

            <hr className="border-[#E5E7EB]" />

            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-5">Venture Enquiries</h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@salhurry.in"
                  className="flex items-center justify-between border border-[#E5E7EB] p-4 hover:border-[#FF0066] transition-colors group"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">
                      Salhurry Enquiries
                    </p>
                    <p className="text-sm text-[#111111] font-medium">info@salhurry.in</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#6B7280] group-hover:text-[#FF0066] transition-colors"
                  />
                </a>
                <a
                  href="mailto:info@divegrid.in"
                  className="flex items-center justify-between border border-[#E5E7EB] p-4 hover:border-[#FF0066] transition-colors group"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280] mb-1">
                      Infrastructure Projects
                    </p>
                    <p className="text-sm text-[#111111] font-medium">info@divegrid.in</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#6B7280] group-hover:text-[#FF0066] transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF0066] hover:text-[#FF0066] transition-colors"
              >
                {/* LinkedIn icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 flex items-center justify-center border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF0066] hover:text-[#FF0066] transition-colors"
              >
                {/* X / Twitter icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 border border-[#E5E7EB] h-full min-h-[480px]">
                <div className="w-16 h-16 rounded-full bg-[#FF0066] flex items-center justify-center mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111111] mb-3">Message Sent!</h3>
                <p className="text-[#6B7280] max-w-sm mb-8">
                  Thank you for reaching out. A member of the DiveGrid team will be in touch with
                  you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="border border-[#111111] text-[#111111] px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="border border-[#E5E7EB] w-full px-4 py-3 text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#FF0066] transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="border border-[#E5E7EB] w-full px-4 py-3 text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#FF0066] transition-colors text-sm"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-[#E5E7EB] w-full px-4 py-3 text-[#111111] focus:outline-none focus:border-[#FF0066] transition-colors text-sm bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Enquiry</option>
                    <option value="salhurry">Salhurry — Sales &amp; Marketing</option>
                    <option value="infrastructure">DiveGrid Infrastructure — Project</option>
                    <option value="southern-sigma">Southern Sigma — Materials</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or enquiry…"
                    className="border border-[#E5E7EB] w-full px-4 py-3 text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#FF0066] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#FF0066] text-white py-4 font-bold uppercase tracking-widest text-[12px] hover:bg-[#E6005C] transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Three Ways to Work With DiveGrid ── */}
      <section className="bg-[#F7F7F7] py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF0066] mb-4">
            Work With Us
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] mb-12 max-w-xl">
            Three Ways to Engage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Hire Salhurry */}
            <div className="bg-white border border-[#E5E7EB] p-8 flex flex-col">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#111111] mb-3">Hire Salhurry</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 flex-1">
                Looking to grow your business? Salhurry builds growth engines for ambitious
                companies.
              </p>
              <Link
                href="/ventures/salhurry"
                className="inline-flex items-center gap-2 bg-[#FF0066] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all self-start"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2 — Partner on Infrastructure */}
            <div className="bg-white border border-[#E5E7EB] p-8 flex flex-col">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#111111] mb-3">
                Partner on Infrastructure
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 flex-1">
                Have a construction or development project? Let&apos;s talk about how DiveGrid
                Infrastructure can deliver it.
              </p>
              <Link
                href="/ventures/infrastructure"
                className="inline-flex items-center gap-2 bg-[#FF0066] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all self-start"
              >
                Discuss a Project <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3 — Strategic Partnership */}
            <div className="bg-white border border-[#E5E7EB] p-8 flex flex-col">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#111111] mb-3">
                Strategic Partnership
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 flex-1">
                Want to join the DiveGrid ecosystem as a supplier, investor, or strategic partner?
              </p>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 bg-[#FF0066] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all self-start"
              >
                Explore Partnerships <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
