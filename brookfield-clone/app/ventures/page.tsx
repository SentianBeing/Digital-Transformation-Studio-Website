import Link from "next/link";
import Image from "next/image";

export default function VenturesPage() {
  return (
    <main>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
          Our Ventures
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-[#111111] mt-4 mb-6 leading-tight">
          What We&apos;re Building
        </h1>
        <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed">
          DiveGrid builds and backs ventures that create real, lasting value.
          Each venture is purpose-built to dominate its market.
        </p>
      </section>

      {/* ── 2. Venture 1 — Salhurry ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — left */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dyc4fcvot/image/upload/v1774776762/compressed_1b4c4e78-74b1-4eee-88cc-0b410707bf52_uzakmi.webp"
              alt="Salhurry team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content — right */}
          <div className="flex flex-col gap-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#FF0066] border border-[#FF0066] px-3 py-1 self-start">
              Sales &amp; Marketing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
              Salhurry
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              Salhurry is DiveGrid&apos;s sales and marketing growth agency, built to
              help businesses acquire customers faster, scale revenue
              systematically, and build predictable growth engines. We combine
              strategic clarity with execution muscle to deliver results.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-3">
              {[
                "Lead Generation Systems",
                "Growth Marketing Strategy",
                "Sales Process Design",
                "Revenue Operations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#FF0066] font-bold text-base">✓</span>
                  <span className="text-[#111111] text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/ventures/salhurry"
                className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
              >
                Explore Salhurry
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-[#FF0066] text-[#FF0066] text-sm font-bold uppercase tracking-widest hover:bg-[#FF0066] hover:text-white transition-all duration-300"
              >
                Contact Salhurry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Venture 2 — DiveGrid Infrastructure ──────────────────────────── */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content — left */}
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#FF0066] border border-[#FF0066] px-3 py-1 self-start">
                Construction &amp; Infrastructure
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
                DiveGrid Infrastructure
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed">
                DiveGrid Infrastructure partners with developers, municipalities,
                and institutions to deliver large-scale built environments. From
                commercial developments to essential public infrastructure, we
                bring capital, expertise, and execution to every project.
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-3">
                {[
                  "Commercial Development",
                  "Infrastructure Projects",
                  "Project Management",
                  "Sustainable Construction",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-[#FF0066] font-bold text-base">
                      ✓
                    </span>
                    <span className="text-[#111111] text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/ventures/infrastructure"
                  className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
                >
                  Explore Infrastructure
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border border-[#FF0066] text-[#FF0066] text-sm font-bold uppercase tracking-widest hover:bg-[#FF0066] hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image — right */}
            <div className="relative w-full aspect-[4/3] overflow-hidden order-1 md:order-2">
              <Image
                src="https://picsum.photos/seed/construction-site/800/600"
                alt="DiveGrid Infrastructure construction site"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Venture Philosophy ────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
            The DiveGrid Approach
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
            Ventures That Reinforce Each Other
          </h2>

          <p className="text-[#6B7280] text-base leading-relaxed">
            The DiveGrid portfolio is engineered for compounding returns across
            ventures. Salhurry drives demand generation for infrastructure
            clients, accelerating project pipelines for DiveGrid Infrastructure.
            Southern Sigma Ventures — our strategic partner in mining, quarrying,
            and material supply — provides the raw material backbone that keeps
            infrastructure projects on time and on budget. Each piece reinforces
            the others, creating a resilient, integrated ecosystem rather than a
            collection of isolated businesses.
          </p>

          {/* Pink outlined quote box */}
          <div className="w-full border border-[#FF0066] p-8 mt-4">
            <p className="text-xl md:text-2xl font-bold text-[#111111] italic leading-snug">
              "We don&apos;t just invest in businesses. We build them, operate
              them, and connect them."
            </p>
            <p className="text-[#FF0066] text-sm font-bold uppercase tracking-widest mt-4">
              — DiveGrid
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
            >
              Learn About DiveGrid
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
