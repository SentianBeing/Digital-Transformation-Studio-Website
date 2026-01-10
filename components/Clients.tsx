
import React from 'react';

const CLIENTS = [
  'Deloitte.', 'TBC BANK', 'sense bank', 'CoachHub', 'ALU AFRICAN LEADERSHIP UNIVERSITY'
];

const Clients: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          {CLIENTS.map((client) => (
            <span key={client} className="text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
