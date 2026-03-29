import Link from 'next/link';
import Image from 'next/image';

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Our Partners
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#111111] leading-tight max-w-4xl mt-4 mb-6">
          Strategic Alliances That Amplify Everything We Build
        </h1>
        <p className="text-[#6B7280] text-lg max-w-2xl leading-relaxed">
          DiveGrid believes that the right partnerships create compounding advantage. Our partners extend our capabilities, reinforce our ventures, and share our commitment to building real, lasting value.
        </p>
      </section>

      {/* Southern Sigma Ventures Feature */}
      <section id="southern-sigma" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-[480px] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/mining-sigma/800/600"
              alt="Southern Sigma Ventures mining operations"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066]">
              Strategic Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-3 mb-2">
              Southern Sigma Ventures
            </h2>
            <p className="text-[#6B7280] text-base font-medium mb-6">
              Mining, Quarrying &amp; Material Supply
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-[#6B7280] leading-relaxed">
                Southern Sigma Ventures is DiveGrid&apos;s primary strategic partner in the materials sector. With deep expertise in mining, quarrying, and material supply, Southern Sigma ensures our infrastructure and construction ventures have reliable, high-quality material supply chains.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                From aggregates and crushed stone to specialised construction materials, Southern Sigma Ventures provides the raw foundations that make great infrastructure possible.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Through this partnership, DiveGrid Infrastructure projects benefit from competitive material pricing, reliable delivery schedules, and the quality assurance that only an experienced materials partner can provide.
              </p>
            </div>

            {/* Partnership Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Material Supply',
                  description: 'Aggregates, crushed stone, sand, and specialised materials',
                },
                {
                  title: 'Quarrying Operations',
                  description: 'Active quarry operations ensuring consistent material availability',
                },
                {
                  title: 'Logistics & Delivery',
                  description: 'End-to-end supply chain management to project sites',
                },
              ].map((highlight) => (
                <div
                  key={highlight.title}
                  className="border-l-4 border-[#FF0066] pl-5 py-2"
                >
                  <h4 className="text-[#111111] font-semibold text-sm mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Partnership Means */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Partnership Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-4 mb-6 max-w-2xl mx-auto">
            More Than a Vendor Relationship
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed mb-16">
            DiveGrid approaches every partnership as a long-term alliance. We invest in our partners&apos; success because their strength is our strength. True partnership means shared goals, transparent communication, and mutual accountability at every stage.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { stat: '1', label: 'Strategic Partner' },
              { stat: '3', label: 'Years Relationship' },
              { stat: '100%', label: 'Material Supply Coverage' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-5xl font-bold text-[#FF0066] mb-2">{item.stat}</p>
                <p className="text-[#6B7280] text-sm uppercase tracking-widest font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section id="become-partner" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>Partnership Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-4 mb-6">
              Partner With DiveGrid
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              We&apos;re always open to meaningful partnerships that strengthen our ventures and create shared value. DiveGrid works with partners across three core categories — each playing a distinct role in the growth of our ecosystem.
            </p>

            <div className="space-y-6">
              {[
                {
                  type: 'Material & Supply Partners',
                  description:
                    'Like Southern Sigma Ventures, these partners ensure our construction and infrastructure ventures have the physical inputs they need — delivered reliably, at scale, and to specification.',
                },
                {
                  type: 'Technology & Systems Partners',
                  description:
                    'Software, platforms, and tooling partners that help our ventures operate with greater efficiency, insight, and competitive edge across sales and operations.',
                },
                {
                  type: 'Distribution & Market Partners',
                  description:
                    'Channel and market access partners that extend the reach of Salhurry and DiveGrid Infrastructure into new geographies and customer segments.',
                },
              ].map((item) => (
                <div key={item.type} className="flex gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FF0066] flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h4 className="text-[#111111] font-semibold mb-1">{item.type}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#F7F7F7] p-10 border border-[#E5E7EB]">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">
              Interested in partnering?
            </h3>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              If you represent an organisation that could add meaningful value to DiveGrid or any of our ventures — whether through supply, technology, or market access — we want to hear from you. Reach out and let&apos;s explore what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#FF0066] py-16 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build something together?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re a potential supply partner, technology collaborator, or market ally — DiveGrid is always open to conversations that lead somewhere real.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#FF0066] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
