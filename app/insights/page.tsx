import Link from 'next/link'
import Image from 'next/image'

const insights = [
  {
    id: 1,
    title: 'How Salhurry Builds Predictable Revenue Engines for B2B Companies',
    type: 'White Paper',
    venture: 'Salhurry',
    date: 'MAR 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/insight-salhurry/800/500',
    excerpt:
      'A deep dive into the systematic approach Salhurry uses to transform unpredictable sales pipelines into reliable revenue machines.',
  },
  {
    id: 2,
    title: 'Infrastructure as a Competitive Moat: The DiveGrid Build Thesis',
    type: 'White Paper',
    venture: 'DiveGrid Infrastructure',
    date: 'JAN 2026',
    readTime: '12 min read',
    image: 'https://picsum.photos/seed/insight-infra/800/500',
    excerpt:
      'Why we believe construction and infrastructure ventures create some of the most defensible competitive advantages available today.',
  },
  {
    id: 3,
    title: 'Southern Sigma Ventures on Building a Resilient Material Supply Chain',
    type: 'Podcast',
    venture: 'Partners',
    date: 'FEB 2026',
    readTime: '45 min listen',
    image: 'https://picsum.photos/seed/insight-sigma/800/500',
    excerpt:
      'Southern Sigma Ventures shares how they built a resilient quarrying and material supply operation that supports large-scale infrastructure projects.',
  },
  {
    id: 4,
    title: 'The Multi-Venture Company Model: Why DiveGrid Bets on Portfolio Synergy',
    type: 'Article',
    venture: 'DiveGrid',
    date: 'DEC 2025',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/insight-model/800/500',
    excerpt:
      'An inside look at how DiveGrid structures its ventures to create compounding returns through cross-portfolio synergy.',
  },
  {
    id: 5,
    title: '5 Growth Marketing Mistakes That Kill B2B Pipeline',
    type: 'Article',
    venture: 'Salhurry',
    date: 'NOV 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/insight-mistakes/800/500',
    excerpt:
      'Salhurry identifies the five most common growth marketing mistakes that prevent B2B companies from scaling their pipeline.',
  },
  {
    id: 6,
    title: "Breaking Ground: Lessons from DiveGrid Infrastructure's First Commercial Project",
    type: 'Case Study',
    venture: 'DiveGrid Infrastructure',
    date: 'OCT 2025',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/insight-project/800/500',
    excerpt:
      'A candid retrospective on the challenges, decisions, and lessons from delivering our first major commercial development.',
  },
]

export default function InsightsPage() {
  const featured = insights[0]
  const rest = insights.slice(1)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF0066] mb-4">
          Insights
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#111111] leading-tight mb-6 max-w-3xl">
          Ideas That Move Businesses Forward
        </h1>
        <p className="text-[#6B7280] text-lg max-w-2xl leading-relaxed mb-10">
          Thinking from across the DiveGrid portfolio — on growth, infrastructure, materials, and
          what it takes to build businesses that last.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest rounded-full bg-[#FF0066] text-white">
            All
          </button>
          <button className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF0066] hover:text-[#FF0066] transition-colors">
            White Papers
          </button>
          <button className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF0066] hover:text-[#FF0066] transition-colors">
            Podcasts
          </button>
          <button className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF0066] hover:text-[#FF0066] transition-colors">
            Articles
          </button>
          <button className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest rounded-full border border-[#E5E7EB] text-[#6B7280] hover:border-[#FF0066] hover:text-[#FF0066] transition-colors">
            Case Studies
          </button>
        </div>
      </section>

      {/* ── Featured Insight ── */}
      <section className="py-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 border border-[#E5E7EB] overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 bg-[#F7F7F7] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066]">
                {featured.type}
              </span>
              <span className="border border-[#E5E7EB] px-2 py-0.5 text-[11px] font-medium text-[#6B7280] bg-white">
                {featured.venture}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111111] leading-snug mb-4">
              {featured.title}
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-[11px] text-[#6B7280] uppercase tracking-widest mb-8">
              <span>{featured.date}</span>
              <span className="w-1 h-1 rounded-full bg-[#6B7280]" />
              <span>{featured.readTime}</span>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 bg-[#FF0066] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all self-start"
            >
              Read Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── All Insights Grid ── */}
      <section className="pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF0066] mb-4">
          All Insights
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((item) => (
            <article key={item.id} className="flex flex-col">
              {/* Card Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  unoptimized
                />
              </div>

              {/* Card Content */}
              <div className="p-6 border border-[#E5E7EB] border-t-0 flex flex-col flex-1">
                {/* Type + Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF0066]">
                    {item.type}
                  </span>
                  <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">
                    {item.date}
                  </span>
                </div>

                {/* Venture pill */}
                <div className="mb-3">
                  <span className="border border-[#E5E7EB] text-[11px] px-2 py-0.5 text-[#6B7280]">
                    {item.venture}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-[#111111] text-base leading-snug mb-3 hover:text-[#FF0066] transition-colors cursor-pointer">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-[#6B7280] text-sm leading-relaxed flex-1"
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.excerpt}
                </p>

                {/* Read time */}
                <p className="text-[11px] text-[#6B7280] mt-4 uppercase tracking-wider">
                  {item.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Subscribe CTA ── */}
      <section className="bg-[#FF0066] py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Get DiveGrid insights, venture updates, and industry thinking delivered to your inbox.
          </p>

          <div className="max-w-md mx-auto flex gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white px-4 py-3 text-[#111111] placeholder-[#6B7280] focus:outline-none text-sm min-w-0"
            />
            <button className="flex-shrink-0 bg-[#111111] text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#333] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
