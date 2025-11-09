import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for brand tint (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/50 via-blue-500/30 to-yellow-400/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-300" />
          Sudesu AV Tech Pvt. Ltd.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Empowering Smart Workspaces Through AV Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-4 max-w-3xl text-pretty text-base text-white/90 sm:text-lg"
        >
          From audio-visual integration to application & database management — we simplify how your business communicates.
        </motion.p>

        <motion.a
          href="#solutions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/30 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Explore Solutions
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
