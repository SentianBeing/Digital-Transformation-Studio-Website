
import React from 'react';

const TechStacks: React.FC = () => {
  const stacks = [
    {
      title: 'Ecommerce',
      items: ['WordPress', 'Strapi', 'Drupal', 'Umbraco']
    },
    {
      title: 'CMS',
      items: ['Magento', 'Shopify', 'Wix', 'BigCommerce', 'WooCommerce', 'Prestashop']
    },
    {
      title: 'Server & Technologies',
      items: ['Node.js', 'Apache', 'Angular', 'jQuery', 'Android', 'MongoDB', '.NET', 'Nginx', 'AWS', 'Azure', 'iOS']
    },
    {
      title: 'Framework',
      items: ['Laravel', 'CodeIgniter', 'Django', 'ASP.NET', 'Flutter', '.NET MVC', '.NET Core', 'Next.js', 'Bootstrap']
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#FF005E]">Technology Stacks</h2>
          <p className="text-gray-400">Strong expertise. Flexible capacity. Predictable delivery.</p>
        </div>

        <div className="p-8 md:p-12 rounded-[3rem] bg-[#111] border border-white/5 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-16">
            {stacks.map((stack, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-6 text-gray-300">
                  {stack.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stack.items.map((item) => (
                    <div 
                      key={item} 
                      className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      <span className="text-gray-300 font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
