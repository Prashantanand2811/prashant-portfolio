import React from "react";
import { motion } from "framer-motion";
import saayamLogo from "../assets/saayam-logo.png";

const focusAreas = [
  "LLM Systems",
  "RAG Pipelines",
  "MLOps",
  "NLP",
  "Real-Time Data Systems",
  "Generative AI",
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sky-400 text-sm font-medium mb-3">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Building intelligent systems with machine learning and data science
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-8">
            Data Scientist with 5 years delivering production-grade machine learning,
            generative AI, and LLM-powered solutions across finance, healthcare, and
            e-commerce focused on scalable MLOps, RAG systems, and measurable business impact.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={saayamLogo}
                  alt="Saayam for All"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-white">
                  What I work on
                </h3>
              </div>

              <p className="text-slate-300 leading-7 mb-4">
                At Saayam for All, I build AI-driven product prototypes and NLP systems
                for nonprofit resource optimization using BERT, PyTorch, and FastAPI.
                I also develop RAG and LangChain-powered applications to improve
                decision-making workflows and operational efficiency.
              </p>

              <p className="text-slate-300 leading-7">
                My experience spans machine learning, data engineering, and MLOps with
                tools such as PyTorch, Spark, Kafka, MLflow, and Kubernetes, turning
                ideas into reliable, production-ready AI systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Core Focus Areas
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="/Prashant_Anand_DA_lat.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}