import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Prashant Anand
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-gray-600 max-w-xl"
      >
        Data Analyst | BI Developer | Cloud & ETL Enthusiast
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
