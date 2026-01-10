
import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Nowo",
      desc: "A Swedish fintech company specializing in retirement savings.",
      // Using images that approximate the orange UI from the screenshot
      img1: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=400",
      img2: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Nowo",
      desc: "A Swedish fintech company specializing in retirement savings.",
      img1: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=400",
      img2: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[2.5rem] md:text-5xl font-black mb-4 text-[#FF005E] tracking-tight">
            Case studies
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium opacity-80">
            We get inspired by creating solutions that users love.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {cases.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Card Container: Dark Gray Background with Rounded Corners */}
              <div className="relative aspect-[16/10] bg-[#1c1c1c] rounded-[2.5rem] overflow-hidden mb-10 flex items-center justify-center border border-white/[0.02] shadow-2xl transition-all duration-500 group-hover:border-[#FF005E]/20">
                
                {/* Overlapping Phone Mockups Simulation */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Background Phone (Left) */}
                  <div className="absolute left-[18%] top-[28%] w-[38%] aspect-[9/19] z-0 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-1">
                    <div className="w-full h-full bg-[#111] rounded-[2rem] border-[6px] md:border-[8px] border-[#2a2a2a] overflow-hidden shadow-2xl">
                      <div className="w-full h-full bg-[#FFF5E6]">
                        <img 
                          src={item.img1} 
                          className="w-full h-full object-cover opacity-90" 
                          alt="Mobile App Interface Back" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Foreground Phone (Right/Center) */}
                  <div className="absolute left-[36%] top-[12%] w-[42%] aspect-[9/19] z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-1">
                    <div className="w-full h-full bg-[#111] rounded-[2.5rem] border-[7px] md:border-[10px] border-[#222] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]">
                      <div className="w-full h-full bg-orange-500">
                        <img 
                          src={item.img2} 
                          className="w-full h-full object-cover" 
                          alt="Mobile App Interface Front" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle vignette/gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Project Title & Description Area */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-[1.5rem] font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  {/* Magenta Arrow as requested in the design */}
                  <span className="text-[#FF005E] text-2xl font-normal transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-[0.95rem] leading-relaxed max-w-[320px] font-medium opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
