import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "LLM Systems",
  "Machine Learning",
  "MLOps",
  "Data Science",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6">
        
        <div className="max-w-4xl">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-sm font-medium text-sky-400 md:text-base"
          >
            Data Scientist • Machine Learning Engineer
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              ML systems
            </span>
            ,
            <br />
            LLM applications, and
            <br />
            production AI workflows
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-slate-300"
          >
            I work across fraud detection, recommendation systems, RAG pipelines,
            and real time ML infrastructure, focusing on turning models into
            reliable and scalable business impact.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/70 backdrop-blur px-4 py-2 text-sm text-slate-300 hover:border-sky-400 transition"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 hover:shadow-sky-400/30"
            >
              View Projects
            </a>

            <a
              href="#experience"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400 hover:bg-slate-900"
            >
              View Experience
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}