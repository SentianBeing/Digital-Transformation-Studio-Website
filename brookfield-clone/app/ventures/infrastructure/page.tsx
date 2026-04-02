import Link from 'next/link';
import Image from 'next/image';

export default function InfrastructurePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-0 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>DiveGrid Venture
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-none mt-4">
            DiveGrid Infrastructure
          </h1>
          <p className="text-xl font-medium text-white/70 mt-4">
            Construction &amp; Infrastructure Venture Builder
          </p>
          <p className="mt-6 text-white/80 text-lg max-w-2xl leading-relaxed">
            DiveGrid Infrastructure develops, manages, and delivers large-scale construction and infrastructure projects across commercial, public, and residential sectors. We bring together expert teams, strategic supply partnerships, and rigorous project discipline to build things that last.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="#approach"
              className="inline-block px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              Our Approach
            </Link>
          </div>
          <div className="mt-16 w-full">
            <Image
              src="https://picsum.photos/seed/construction-hero/1400/550"
              alt="DiveGrid Infrastructure — Construction and Infrastructure Ventures"
              width={1400}
              height={550}
              className="w-full aspect-[21/9] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mt-4 mb-12">
            Infrastructure That Lasts Generations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Commercial Development',
                description:
                  'Office parks, retail centres, mixed-use developments designed for long-term commercial performance and tenant satisfaction.',
              },
              {
                title: 'Public Infrastructure',
                description:
                  'Roads, utilities, civic buildings, and transport hubs built to the highest standards of safety, durability, and public service.',
              },
              {
                title: 'Residential Projects',
                description:
                  'Large-scale housing developments and communities that balance density, liveability, and long-term property value.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 border-l-4 border-[#FF0066] bg-[#F7F7F7] hover:bg-white border border-[#E5E7EB] hover:border-[#FF0066] transition-colors"
              >
                <h3 className="text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mt-4 mb-12">
            End-to-End Project Delivery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Project Development',
                description: 'Feasibility studies, design coordination, and planning approvals from concept to groundbreaking.',
              },
              {
                number: '02',
                title: 'Construction Management',
                description: 'On-site execution, subcontractor management, and rigorous quality control throughout the build.',
              },
              {
                number: '03',
                title: 'Material Sourcing',
                description: 'Working with Southern Sigma Ventures for reliable, cost-effective supply of construction materials.',
              },
              {
                number: '04',
                title: 'Handover & Support',
                description: 'Post-completion support, defect management, and ongoing maintenance to protect your investment.',
              },
            ].map((service) => (
              <div
                key={service.number}
                className="bg-white border border-[#E5E7EB] p-8 hover:border-[#FF0066] transition-colors"
              >
                <span className="text-3xl font-serif font-bold text-[#FF0066] block mb-4">
                  {service.number}
                </span>
                <h3 className="text-lg font-bold text-[#111111] mb-3">{service.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '5+', label: 'Projects Delivered' },
              { number: '3', label: 'Active Developments' },
              { number: '100%', label: 'On-Time Delivery Rate' },
              { number: 'R50M+', label: 'Construction Value Managed' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-serif font-bold text-[#FF0066]">
                  {stat.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
                <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Strategic Supply
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mt-4 mb-6">
                Backed by Southern Sigma Ventures
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-4">
                Our partnership with Southern Sigma Ventures gives DiveGrid Infrastructure a distinct supply chain advantage. SSV provides direct access to raw materials, aggregates, and construction inputs — reducing procurement lead times and cost volatility across all our active projects.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                This vertical integration allows us to move faster, control quality at the source, and pass cost efficiencies directly to our clients and development partners.
              </p>
              <Link
                href="/partners"
                className="inline-block px-8 py-3 border border-[#111111] text-[#111111] text-sm font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all duration-300"
              >
                View Our Partners
              </Link>
            </div>
            <div className="w-full">
              <Image
                src="https://picsum.photos/seed/mining-quarry/800/500"
                alt="Southern Sigma Ventures — Strategic Supply Partnership"
                width={800}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF0066] py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
            From initial feasibility to final handover, DiveGrid Infrastructure delivers projects with precision and purpose. Let&apos;s talk about what we can build together.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-[#FF0066] text-sm font-bold uppercase tracking-widest hover:bg-[#F7F7F7] transition-all duration-300"
            >
              Start a Conversation
            </Link>
            <Link
              href="/ventures"
              className="inline-block px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#FF0066] transition-all duration-300"
            >
              All Ventures
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
