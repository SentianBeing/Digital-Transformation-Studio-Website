import Link from 'next/link';
import Image from 'next/image';

const openRoles = [
  {
    title: 'Growth Marketing Manager',
    venture: 'Salhurry',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    title: 'Sales Development Rep',
    venture: 'Salhurry',
    type: 'Full-time',
    location: 'Hybrid',
  },
  {
    title: 'Site Project Manager',
    venture: 'DiveGrid Infrastructure',
    type: 'Full-time',
    location: 'On-site',
  },
  {
    title: 'Quantity Surveyor',
    venture: 'DiveGrid Infrastructure',
    type: 'Full-time',
    location: 'On-site',
  },
  {
    title: 'Operations Analyst',
    venture: 'DiveGrid HQ',
    type: 'Full-time',
    location: 'Hybrid',
  },
];

const benefits = [
  {
    title: 'Competitive Packages',
    description: 'Market-leading salaries + performance bonuses',
  },
  {
    title: 'Growth Budget',
    description: 'Annual learning and development allowance',
  },
  {
    title: 'Flexible Working',
    description: 'Remote-first with regular team meetups',
  },
  {
    title: 'Venture Access',
    description: 'Opportunity to grow into leadership roles across ventures',
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Careers at DiveGrid
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#111111] leading-tight max-w-4xl mt-4 mb-6">
          Join a Team That Builds Real Things
        </h1>
        <p className="text-[#6B7280] text-lg max-w-2xl leading-relaxed mb-10">
          At DiveGrid, you don&apos;t just work a job — you help build ventures that shape industries. We&apos;re looking for ambitious people who think like founders and execute like operators.
        </p>
        <Link
          href="#open-roles"
          className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
        >
          See Open Roles
        </Link>
      </section>

      {/* Why DiveGrid */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Why DiveGrid
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-4 mb-12 max-w-xl">
            What Makes Us Different
          </h2>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Venture Exposure',
                description:
                  'Work across multiple ventures. Gain breadth and depth simultaneously.',
              },
              {
                title: 'Ownership Culture',
                description:
                  'We give our people real responsibility and decision-making power from day one.',
              },
              {
                title: 'High Growth',
                description: 'DiveGrid moves fast. Your career can too.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border border-[#E5E7EB]"
              >
                <div className="w-10 h-[3px] bg-[#FF0066] mb-6"></div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Two-column image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-[320px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/career-team/800/600"
                alt="DiveGrid team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[320px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/career-office/800/600"
                alt="DiveGrid office environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Open Roles
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-4 mb-10">
          We&apos;re Hiring
        </h2>

        {/* Filter tabs (visual only) */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#E5E7EB] pb-4">
          {['All', 'Salhurry', 'DiveGrid Infrastructure', 'Operations'].map(
            (tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                  i === 0
                    ? 'bg-[#FF0066] text-white'
                    : 'border border-[#E5E7EB] text-[#6B7280] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Job listings */}
        <div>
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="border-b border-[#E5E7EB] py-6 flex flex-wrap justify-between items-center gap-4"
            >
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-[#111111] font-semibold text-base">
                  {role.title}
                </h3>
                <span className="bg-[#FF0066]/10 text-[#FF0066] text-[11px] font-bold uppercase tracking-widest px-3 py-1">
                  {role.venture}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-[#6B7280] text-sm">{role.type}</span>
                <span className="text-[#6B7280] text-sm">{role.location}</span>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-4 mb-12 max-w-xl">
            We Take Care of Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 border border-[#E5E7EB]"
              >
                <div className="w-8 h-[3px] bg-[#FF0066] mb-6"></div>
                <h3 className="text-lg font-bold text-[#111111] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="bg-[#111111] py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build with us?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We&apos;re always looking for exceptional people. If you&apos;re driven, curious, and want to work on things that matter — let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
