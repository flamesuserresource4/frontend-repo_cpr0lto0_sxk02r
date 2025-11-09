import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Get in Touch</h2>
          <p className="mt-2 text-gray-600">We'd love to learn about your workspace goals.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none" placeholder="" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                <textarea className="min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-600 focus:outline-none" placeholder="Tell us about your project..." />
              </div>
              <button type="button" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 px-6 py-2 text-white shadow-md transition hover:opacity-95">
                Submit
              </button>

              <div className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted by our team.</div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-yellow-400 p-6 text-white shadow-sm">
              <p className="text-sm uppercase tracking-wide">Head Office</p>
              <p className="mt-1 text-lg font-semibold">Hyderabad, Telangana, India</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Pan-India service coverage</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-90000-00000</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@sudesuavtech.com</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="Sudesu AV Tech Hyderabad"
                src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
