import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-yellow-400" />
          <span className="text-sm font-bold tracking-wide">SUDESU AV TECH</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#solutions" className="hover:text-blue-700">Solutions</a>
          <a href="#partners" className="hover:text-blue-700">Partners</a>
          <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-yellow-400 px-4 py-2 text-white shadow-sm">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
