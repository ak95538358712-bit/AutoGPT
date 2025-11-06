"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold font-playfair text-ferrari-red">
          FERRARI
        </div>
        <div className="hidden md:flex space-x-8 text-white font-inter">
          <a href="#home" className="hover:text-ferrari-red transition-colors">
            Home
          </a>
          <a href="#models" className="hover:text-ferrari-red transition-colors">
            Models
          </a>
          <a href="#heritage" className="hover:text-ferrari-red transition-colors">
            Heritage
          </a>
          <a href="#performance" className="hover:text-ferrari-red transition-colors">
            Performance
          </a>
          <a href="#contact" className="hover:text-ferrari-red transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
