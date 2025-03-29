import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { Upload, Brain, Search, CheckCircle } from "lucide-react";
import { useCallback } from "react";

const steps = [
  {
    icon: <Upload className="w-12 h-12 text-[#00B7DB] dark:text-[#48FF5A]" />,
    title: "Upload Photos",
    description: "Provide clear images to train your personalized recognition model.",
  },
  {
    icon: <Brain className="w-12 h-12 text-[#11C359] dark:text-[#30E6EA]" />,
    title: "Train Model",
    description: "AI processes your images to build a powerful recognition system.",
  },
  {
    icon: <Search className="w-12 h-12 text-[#30E6EA] dark:text-[#00B7DB]" />,
    title: "Scan Event Photos",
    description: "Our system scans event images to identify your presence.",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-[#48FF5A] dark:text-[#11C359]" />,
    title: "View Results",
    description: "Instantly see which images contain you and access detailed insights.",
  },
];

export default function HowItWorks() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative flex flex-col items-center w-full min-h-screen px-6 py-20 lg:px-20 text-center overflow-hidden">
      {/* 🌌 Gradient Background */}
      <div className="absolute inset-0 z-[-1] animate-gradient bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFD700] via-[#FFA500] to-[#00B7DB] dark:from-[#0F172A] dark:via-[#121212] dark:to-[#002D26] transition-all duration-[8000ms] ease-in-out infinite" />

      {/* ✨ Floating Particles */}
      <Particles
        id="howItWorksParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.2, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 1.2, direction: "none", outModes: "out" },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 🔥 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6 relative z-10"
      >
        How It Works
      </motion.h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-12 relative z-10">
        Follow these simple steps to experience seamless AI-powered recognition.
      </p>

      {/* 🛠️ Step-by-Step Process Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="p-8 rounded-xl backdrop-blur-xl bg-white/20 dark:bg-gray-900/30 shadow-lg border border-white/30 dark:border-gray-800/40 hover:scale-105 transition-all duration-300 hover:border-[#00B7DB] dark:hover:border-[#48FF5A] hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
