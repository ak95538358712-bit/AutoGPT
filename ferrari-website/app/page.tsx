"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Heritage from "@/components/Heritage";
import Performance from "@/components/Performance";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Models />
      <Heritage />
      <Performance />
      <Contact />
    </main>
  );
}
