import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
          About DiveGrid
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-[#111111] mt-4 mb-6 leading-tight">
          Built to Build
        </h1>
        <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed">
          DiveGrid is a multi-venture company that creates, incubates, and scales
          high-growth businesses — from sales and marketing to construction and
          infrastructure.
        </p>
      </section>

      {/* ── 2. Mission ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — large quote */}
          <div>
            <p className="text-3xl md:text-4xl font-bold text-[#111111] leading-snug">
              "We identify market gaps and build ventures to fill them — then
              scale them into dominant, category-defining businesses."
            </p>
          </div>

          {/* Right — body + CTA */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] flex items-center gap-2">
              <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
              Our Mission
            </span>
            <p className="text-[#6B7280] text-base leading-relaxed">
              DiveGrid was founded on a simple conviction: the best businesses
              are built with intention. We don't chase trends — we study markets,
              find structural opportunities, and deploy the right team, capital,
              and strategy to win.
            </p>
            <p className="text-[#6B7280] text-base leading-relaxed">
              Every venture in our portfolio is purpose-built and deeply
              integrated into a broader ecosystem. We operate with founder-level
              commitment at every stage — from ideation through scale — and we
              expect the same from every partner and operator we work with.
            </p>
            <div className="pt-2">
              <Link
                href="/ventures"
                className="inline-block px-8 py-3 bg-[#FF0066] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#E6005C] transition-all duration-300"
              >
                See Our Ventures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Story ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 leading-tight">
            From Idea to Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
            <p className="text-[#FF0066] text-3xl font-bold mb-3">2022</p>
            <h3 className="text-xl font-bold text-[#111111] mb-4">The Idea</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              DiveGrid was conceived as a holding structure for high-conviction
              ventures. The founding team identified two persistent market gaps:
              fragmented sales execution for growing businesses, and a shortage
              of well-capitalised infrastructure operators. The blueprint for a
              multi-venture company was drawn.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
            <p className="text-[#FF0066] text-3xl font-bold mb-3">2024</p>
            <h3 className="text-xl font-bold text-[#111111] mb-4">
              First Venture: Salhurry
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Salhurry launched as DiveGrid's first operating venture — a
              full-service sales and marketing growth agency. Within its first
              year, Salhurry signed clients across multiple industries and began
              building the systematic growth playbooks that define its approach
              today.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
            <p className="text-[#FF0066] text-3xl font-bold mb-3">2025</p>
            <h3 className="text-xl font-bold text-[#111111] mb-4">
              DiveGrid Infrastructure &amp; Partnerships
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              DiveGrid Infrastructure was established to pursue large-scale
              construction and built-environment opportunities. Simultaneously,
              a strategic partnership with Southern Sigma Ventures was formed,
              creating a vertically integrated supply chain across mining,
              quarrying, and material supply.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Values ───────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F7] py-20">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 leading-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Ownership Mindset
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                We think and act like founders in every venture we touch. There
                are no passengers at DiveGrid — every person on the team takes
                responsibility for outcomes, not just tasks.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Build to Last
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                We create businesses with long-term durability, not short-term
                exits. Every decision is weighed against where the venture needs
                to be in ten years, not just the next quarter.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Operate with Precision
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Great ideas are common. Great execution is rare. We obsess over
                the processes, systems, and details that separate companies that
                grow from companies that stall.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">04</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Grow Together
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Our ventures amplify each other, compounding value across the
                portfolio. Salhurry drives growth for infrastructure clients;
                Infrastructure creates demand for supply chain partners. The
                whole is always greater than the sum of its parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How We Work ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0066] mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-[#FF0066]"></span>
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 leading-tight">
            The DiveGrid Method
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col">
            <p className="text-[#FF0066] text-5xl font-bold mb-6 leading-none">
              01
            </p>
            <h3 className="text-2xl font-bold text-[#111111] mb-4">
              Identify
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              We study markets with rigour — looking for structural
              underservice, fragmented competition, and persistent demand that
              existing players are failing to meet. When we find a gap worth
              building into, we move decisively.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-[#E5E7EB] mx-auto"></div>

          {/* Step 2 */}
          <div className="flex flex-col md:col-start-2 md:pl-8">
            <p className="text-[#FF0066] text-5xl font-bold mb-6 leading-none">
              02
            </p>
            <h3 className="text-2xl font-bold text-[#111111] mb-4">Build</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              We assemble the right team, product, and operational process for
              each venture — not a generic playbook but a bespoke architecture
              designed around the specific opportunity at hand.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <p className="text-[#FF0066] text-5xl font-bold mb-6 leading-none">
              03
            </p>
            <h3 className="text-2xl font-bold text-[#111111] mb-4">Scale</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              We invest in growth systems and strategic partnerships that allow
              each venture to expand beyond its initial footprint — leveraging
              the DiveGrid ecosystem and external alliances to compound results
              over time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
