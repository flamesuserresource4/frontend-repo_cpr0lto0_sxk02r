import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Verma',
    role: 'IT Infrastructure Lead, FinServe Co.',
    quote:
      'Sudesu delivered a flawless hybrid conferencing rollout across 40 rooms. The user training and documentation were top-notch.',
  },
  {
    name: 'Aparna Iyer',
    role: 'Workplace Strategy, Tech Unicorn',
    quote:
      'From design to commissioning, the team was proactive and detail-focused. Our leadership centre looks and sounds fantastic.',
  },
  {
    name: 'Sanjay Kulkarni',
    role: 'Operations Head, Pharma Enterprise',
    quote:
      'Their GUI-based control made our complex AV setup incredibly simple. The after-sales support has been prompt and reliable.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">What Clients Say</h2>
          <p className="mt-2 text-gray-600">Real experiences from teams we have partnered with.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600/10 to-yellow-400/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
