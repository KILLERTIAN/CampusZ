"use client";

import { Globe } from "@/components/magicui/globe";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { cn } from "@/lib/utils";

export default function Hero() {
  const words = ["secure", "efficient", "transparent", "powerful"];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative flex flex-col items-center pt-32 w-full min-h-screen px-6 md:px-12 text-center overflow-hidden">
      {/* 🌌 Dynamic Gradient Background */}
      <div className="absolute inset-0 z-[-1] animate-gradient bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFD700] via-[#FFA500] to-[#00B7DB] dark:from-[#0F172A] dark:via-[#121212] dark:to-[#002D26] transition-all duration-[8000ms] ease-in-out infinite" />

      {/* ✨ Sci-Fi Floating Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 🌀 Glow Effects */}
      <div className="absolute top-20 left-[-50px] w-72 h-72 rounded-full filter blur-3xl bg-[#8EF2F2]/40 dark:bg-[#4AFF4A]/30 transition-all duration-500" />
      <div className="absolute bottom-20 right-[-50px] w-80 h-80 rounded-full filter blur-3xl bg-[#B6FFB6]/40 dark:bg-[#2EF2D2]/30 transition-all duration-500" />

      {/* 🚀 Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "max-w-4xl md:max-w-5xl text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-transparent bg-gradient-to-b from-black to-gray-500/40 bg-clip-text dark:from-white dark:to-gray-500/40 z-10"
        )}
      >
        Empowering Institutes with{" "}
        <ContainerTextFlip words={words} className="text-2xl sm:text-4xl md:text-6xl" />
      </motion.h1>

      {/* 🌟 Supporting Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-md sm:text-lg md:text-2xl font-medium text-center bg-gradient-to-br from-[#00B7DB] to-[#11C359] dark:from-[#48FF5A] dark:to-[#30E6EA] bg-clip-text text-transparent mt-4"
      >
        Streamline student management, automate faculty payments, and enhance institutional efficiency.
      </motion.p>

      {/* 🎯 Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="/get-started"
          className="relative px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-[#48FF5A] to-[#11C359] hover:from-[#00B7DB] hover:to-[#30E6EA] text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-101 hover:shadow-[0px_0px_12px_rgba(48,230,234,0.8)] focus:outline-none focus:ring-2 focus:ring-[#30E6EA]/70 z-10 cursor-pointer"
        >
          Get Started
        </a>

        <a
          href="/learn-more"
          className="relative px-8 py-3 text-lg font-semibold rounded-full border border-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-200 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-[0px_0px_10px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-gray-400/50"
        >
          Learn More
        </a>

      </motion.div>

      {/* 🌍 3D Rotating Globe */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mt-10"
      >
        <Globe className="w-full" />
      </motion.div>
    </section>
  );
}
