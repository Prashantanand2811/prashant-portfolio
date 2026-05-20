import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "SQL", "Java", "JavaScript","R", "C++"],
  },
  {
    title: "ML & AI",
    items: ["PyTorch", "TensorFlow", "XGBoost", "Scikit-learn", "LLMs", "RAG","LangChain",
      "LlamaIndex",
      "Hugging Face"],
  },
  {
    title: "Data & Systems",
    items: ["Spark", "Kafka", "Airflow", "Databricks","AWS",
      "GCP"],
  },
  {
    title: "MLOps & Cloud",
    items: ["MLflow", "Docker", "Kubernetes", "AWS", "FastAPI", "Flask","CI/CD",],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sky-400 text-sm font-medium mb-3">
            Key Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical strengths across ML, data, and production systems
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-7">
            A focused set of tools and technologies I use to build machine learning,
            LLM, and data-driven applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}