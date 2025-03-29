"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Hero from "@/components/Hero";
import Features from "@/components/Feature";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative">
      {/* ✨ Sci-Fi Floating Particles (Global Effect) */}
      <Particles
        id="globalParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, area: 1000 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.2, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Sections with Particles Behind */}
      <Hero />
      <Features />
      <HowItWorks/>
    </div>
  );
}
