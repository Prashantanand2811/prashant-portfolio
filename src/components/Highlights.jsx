import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Captured 3,200+ fraud anomalies monthly using Graph Neural Network based systems",
  "Reduced underwriting decision turnaround from 48 hours to 28 hours using RAG pipelines",
  "Maintained 99.97% uptime for real time ML inference systems",
  "Automated 8,500+ monthly support tickets using fine tuned LLM workflows",
  "Processed 2M+ daily events using Kafka and Spark Structured Streaming",
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-medium mb-3">
            Selected Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Results across ML, LLM, and production systems
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-7">
            A few outcome-focused highlights from my work across enterprise AI,
            data science, and machine learning systems.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-slate-300 shadow-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}