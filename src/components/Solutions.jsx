import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, LayoutGrid, Database, Wrench } from 'lucide-react';

const solutions = [
  {
    title: 'Audio Visual Integration',
    desc: 'End-to-end design and commissioning of conference rooms, huddle spaces, townhalls and training centres.',
    icon: Cpu,
  },
  {
    title: 'GUI-Based Applications',
    desc: 'Custom control interfaces and user workflows for AV and collaboration systems with intuitive UX.',
    icon: LayoutGrid,
  },
  {
    title: 'Application & DB Management',
    desc: 'Secure, scalable application stacks with database management and integrations for enterprise needs.',
    icon: Database,
  },
  {
    title: 'End-to-End AV Project Handling',
    desc: 'Consulting, procurement, installation, testing, training and AMC support under one roof.',
    icon: Wrench,
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Solutions</h2>
            <p className="mt-2 max-w-2xl text-gray-600">We bring together the best of AV engineering and modern software to create intelligent, reliable workspaces.</p>
          </div>
          <div className="hidden h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 md:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ title, desc, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-600/10 p-3 text-blue-700 ring-1 ring-blue-600/20">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-600/10 to-yellow-400/10 blur-2xl transition duration-300 group-hover:from-blue-600/20 group-hover:to-yellow-400/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
