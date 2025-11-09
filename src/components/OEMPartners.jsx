import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
  { name: 'Crestron', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Crestron_logo.svg' },
  { name: 'LG', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_Logo_%282015%29.svg' },
  { name: 'Extron', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Extron_logo.svg' },
  { name: 'Sony', url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Sony_wordmark.svg' },
  { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
];

const OEMPartners = () => {
  return (
    <section id="partners" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">OEM Partners</h2>
          <p className="mt-2 text-gray-600">We partner with leading global brands to deliver reliable, future-ready solutions.</p>
        </div>

        <div className="grid items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="flex h-14 w-32 items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-h-full max-w-full object-contain opacity-80"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMPartners;
