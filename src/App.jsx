import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import OEMPartners from './components/OEMPartners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white antialiased">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Solutions />
        <OEMPartners />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Sudesu AV Tech Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
