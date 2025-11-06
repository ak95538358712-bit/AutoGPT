"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest in Ferrari. We will contact you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ferrari-red rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="font-inter text-xl text-gray-400">
              Begin your Ferrari journey today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                Visit Us
              </h3>
              <p className="font-inter text-gray-400 mb-2">
                Via Abetone Inferiore, 4
              </p>
              <p className="font-inter text-gray-400 mb-4">
                41053 Maranello (MO), Italy
              </p>
              <div className="h-px bg-gray-800 my-4" />
              <p className="font-inter text-gray-400">
                <span className="text-ferrari-red font-semibold">Phone:</span> +39 0536 949111
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 font-inter text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-ferrari-red">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-ferrari-red">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-inter text-sm font-semibold text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-sm text-white font-inter focus:outline-none focus:border-ferrari-red transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-inter text-sm font-semibold text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-sm text-white font-inter focus:outline-none focus:border-ferrari-red transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block font-inter text-sm font-semibold text-gray-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-sm text-white font-inter focus:outline-none focus:border-ferrari-red transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-inter text-sm font-semibold text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-sm text-white font-inter focus:outline-none focus:border-ferrari-red transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-ferrari-red text-white font-inter font-semibold rounded-sm hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="font-inter text-gray-600 text-sm">
            © 2024 Ferrari S.p.A. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </section>
  );
}
