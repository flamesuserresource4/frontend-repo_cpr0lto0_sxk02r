import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-600">About Us</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Who We Are</h2>
          <p className="text-base text-gray-600">
            Sudesu AV Tech Pvt. Ltd is incorporated by well-experienced professionals with a passion for building smart, collaborative environments. We specialise in consulting, designing, and implementing audio-visual and collaboration solutions that align with modern workplace needs.
          </p>
          <p className="text-base text-gray-600">
            Our mission is rooted in <strong>Synergy, Innovation, Satisfaction</strong>. We partner with organisations to transform communication, enhance productivity, and deliver seamless experiences across rooms, campuses, and distributed teams.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Presence</p>
              <p className="mt-1 text-lg font-semibold">Headquartered in Hyderabad</p>
              <p className="text-sm text-gray-500">Pan-India deployment & service</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Approach</p>
              <p className="mt-1 text-lg font-semibold">Consult → Design → Integrate → Support</p>
              <p className="text-sm text-gray-500">End-to-end ownership</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-0 rounded-3xl bg-gradient-to-tr from-blue-200 via-blue-100 to-yellow-100 blur-2xl" />
          <div className="relative rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'AV Integration', value: '150+' },
                { label: 'Meeting Rooms', value: '400+' },
                { label: 'Cities Covered', value: '20+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-yellow-400 p-6 text-white">
              <p className="text-sm uppercase tracking-wide">Mission</p>
              <p className="mt-1 text-lg font-semibold">Synergy, Innovation, Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
