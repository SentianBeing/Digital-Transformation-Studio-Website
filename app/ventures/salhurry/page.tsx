import Link from 'next/link';
import Image from 'next/image';

export default function SalhurryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-0 bg-[#F7F7F7]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>DiveGrid Venture
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#111111] leading-none mt-4">
            Salhurry
          </h1>
          <p className="text-xl font-medium text-[#FF0066] mt-4">
            Sales &amp; Marketing Growth Agency
          </p>
          <p className="mt-6 text-[#6B7280] text-lg max-w-2xl leading-relaxed">
            Salhurry is DiveGrid&apos;s dedicated growth agency — built to help businesses scale their revenue through intelligent sales systems, performance marketing, and data-driven strategy. We don&apos;t just run campaigns. We build the infrastructure behind sustainable growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://www.salhurry.in"
              className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
            >
              Visit Salhurry
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block px-8 py-3 border border-[#111111] text-[#111111] text-sm font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all duration-300"
            >
              See How We Work
            </Link>
          </div>
          <div className="mt-16 w-full">
            <Image
              src="https://res.cloudinary.com/dyc4fcvot/image/upload/v1774775921/salhurry-meaning.jpg_rjgfld.jpg"
              alt="Salhurry — Sales and Marketing Growth Agency"
              width={1400}
              height={600}
              className="w-full rounded-sm aspect-[21/9] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mt-4 mb-12">
            We Build Growth Engines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Salhurry partners with ambitious businesses to build the systems, strategies, and teams needed to grow predictably. We don&apos;t do one-off campaigns — we architect entire growth infrastructures.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed mt-6">
                Whether you&apos;re a startup looking to establish your first repeatable revenue motion or a scaling company trying to break through a growth plateau, Salhurry brings the methodology, talent, and execution capacity to get you there.
              </p>
            </div>
            <div className="space-y-6">
              {[
                'Proprietary lead generation frameworks',
                'Data-driven marketing strategies',
                'Sales process architecture',
                'Revenue operations setup',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <span className="mt-1 inline-block w-6 h-[2px] bg-[#FF0066] flex-shrink-0 translate-y-2"></span>
                  <p className="text-[#111111] text-base font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mt-4 mb-12">
            How We Help You Grow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Lead Generation',
                description:
                  'We build outbound and inbound lead gen systems that fill pipelines with qualified prospects consistently.',
              },
              {
                number: '02',
                title: 'Growth Marketing',
                description:
                  'Multi-channel marketing that acquires, retains, and expands your customer base efficiently.',
              },
              {
                number: '03',
                title: 'Sales Process Design',
                description:
                  'We map, optimize, and systematize your entire sales process from first touch to closed deal.',
              },
              {
                number: '04',
                title: 'Revenue Operations',
                description:
                  'Align your sales, marketing, and customer success teams around a single revenue engine.',
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
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Our Impact
          </span>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '80+', label: 'Active Clients' },
              { number: '3.2x', label: 'Average Revenue Growth' },
              { number: '12', label: 'Industries Served' },
              { number: '94%', label: 'Client Retention Rate' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-serif font-bold text-[#FF0066]">
                  {stat.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#F7F7F7] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mt-4 mb-12">
            From Audit to Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description: 'Diagnose your current growth gaps and opportunities',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Design a custom growth blueprint for your business',
              },
              {
                step: '03',
                title: 'Execute',
                description: 'Launch campaigns, systems, and teams aligned to the plan',
              },
              {
                step: '04',
                title: 'Optimize',
                description: 'Continuously measure, learn, and improve',
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-[#E5E7EB] z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}
                <span className="text-4xl font-serif font-bold text-[#FF0066] block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#FF0066] py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Ready to accelerate your growth?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
            Let&apos;s build a revenue engine that drives consistent, compounding growth for your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.salhurry.in"
              className="inline-block px-8 py-3 bg-white text-[#FF0066] text-sm font-bold uppercase tracking-widest hover:bg-[#F7F7F7] transition-all duration-300"
            >
              Visit Salhurry
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#FF0066] transition-all duration-300"
            >
              Learn About DiveGrid
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
