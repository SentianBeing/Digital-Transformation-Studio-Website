
import React from 'react';

const Expertise: React.FC = () => {
  const services = [
    {
      title: 'Website Development',
      desc: 'Build, re-engineer, or support any software product.',
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute top-2 left-0 w-8 h-8 bg-[#FF005E]/60 rounded-sm rotate-[45deg]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#FF005E] rounded-sm rotate-[45deg]"></div>
        </div>
      )
    },
    {
      title: 'Software development',
      desc: 'Hire the required talent to ramp up your team and close the skills gap.',
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#FF005E]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF005E]/40"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF005E]/40"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF005E]/40"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF005E]/40"></div>
        </div>
      )
    },
    {
      title: 'Mobile App Development',
      desc: 'Process transformation, solution design, technology infrastructure modernization.',
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-0 w-8 h-8 bg-[#FF005E]/40 rounded-lg"></div>
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-[#FF005E] rounded-lg"></div>
        </div>
      )
    },
    {
      title: 'Ui/Ux Design',
      desc: 'Shape a new product with user research, ideation, prototyping, and user testing included.',
      icon: (
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-0 w-6 h-6 bg-[#FF005E]/20 rounded-md"></div>
          <div className="absolute top-2 left-2 w-6 h-6 bg-[#FF005E]/40 rounded-md"></div>
          <div className="absolute top-4 left-4 w-6 h-6 bg-[#FF005E] rounded-md"></div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 text-[#FF005E]">Our Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative min-h-[340px] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#FF005E]/30"
              style={{
                background: 'linear-gradient(180deg, #262626 0%, #0a0a0a 100%)'
              }}
            >
              <div className="mb-8">
                {service.icon}
              </div>

              <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-start md:items-start gap-4">
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-2 group/btn">
                    <span className="text-sm font-bold text-white transition-colors group-hover/btn:text-[#FF005E]">Learn more</span>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-[#FF005E] transition-transform group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
