"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { ShieldCheck, LineChart, Clock, Settings, Lock, Wallet } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#00B7DB] dark:text-[#48FF5A]" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security ensures data protection at every step.",
  },
  {
    icon: <LineChart className="w-12 h-12 text-[#11C359] dark:text-[#30E6EA]" />,
    title: "Data-Driven Insights",
    description: "Powerful analytics for informed decision-making.",
  },
  {
    icon: <Clock className="w-12 h-12 text-[#30E6EA] dark:text-[#00B7DB]" />,
    title: "Real-Time Updates",
    description: "Stay ahead with instant notifications and live tracking.",
  },
  {
    icon: <Settings className="w-12 h-12 text-[#48FF5A] dark:text-[#11C359]" />,
    title: "Automated Processes",
    description: "Reduce workload with AI-powered automation.",
  },
  {
    icon: <Lock className="w-12 h-12 text-[#00B7DB] dark:text-[#30E6EA]" />,
    title: "Privacy First",
    description: "Advanced encryption ensures complete confidentiality.",
  },
  {
    icon: <Wallet className="w-12 h-12 text-[#11C359] dark:text-[#48FF5A]" />,
    title: "Seamless Payments",
    description: "Automate faculty & student fee transactions effortlessly.",
  },
];

export default function Features() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative flex flex-col items-center w-full min-h-screen px-6 py-20 lg:px-20 text-center overflow-hidden">
      {/* 🌌 Background Gradient Animation (Same as Hero) */}
      <div className="absolute inset-0 z-[-1] animate-gradient bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFD700] via-[#FFA500] to-[#00B7DB] dark:from-[#0F172A] dark:via-[#121212] dark:to-[#002D26] transition-all duration-[8000ms] ease-in-out infinite" />

      {/* ✨ Floating Particles (Same as Hero) */}
      <Particles
        id="featuresParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.15, random: true },
            size: { value: 2.5, random: true },
            move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 🌀 Glow Effects (Same as Hero) */}
      <div className="absolute top-20 left-[-50px] w-72 h-72 rounded-full filter blur-3xl bg-[#8EF2F2]/40 dark:bg-[#4AFF4A]/30 transition-all duration-500" />
      <div className="absolute bottom-20 right-[-50px] w-80 h-80 rounded-full filter blur-3xl bg-[#B6FFB6]/40 dark:bg-[#2EF2D2]/30 transition-all duration-500" />

      {/* 🔥 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6 relative z-10"
      >
        Why Choose Us?
      </motion.h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-12 relative z-10">
        A next-gen platform designed to streamline student records, faculty payments, and operational efficiency.
      </p>

      {/* 🌟 Features Grid (Glassmorphism + Hover Glow) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-8 rounded-xl backdrop-blur-xl bg-white/20 dark:bg-gray-900/30 shadow-lg border border-white/30 dark:border-gray-800/40 hover:scale-105 transition-all duration-300 hover:border-[#00B7DB] dark:hover:border-[#48FF5A] hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
