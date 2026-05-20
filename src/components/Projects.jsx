import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Clinical Decision Support LLM",
    description:
      "Built a retrieval-augmented clinical assistant using LLM fine-tuning and semantic search for healthcare decision support workflows.",
    tech: [
      "Hugging Face",
      "Transformers",
      "RAG",
      "Semantic Search",
      "Python",
    ],
    image: "/projects/clinical-llm.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
  {
    title: "Document Question Answering System",
    description:
      "Developed a document intelligence pipeline for contextual QA using NLP embeddings, semantic retrieval, and transformer-based ranking.",
    tech: ["BERT", "NLP", "Semantic Search", "Python"],
    image: "/projects/document-qa.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
  {
    title: "Scalable Movie Recommendation System",
    description:
      "Designed a real-time recommendation system using Kafka and Spark, processing 1M+ daily events with deep learning embeddings and automated deployment.",
    tech: ["Kafka", "Spark", "PyTorch", "Kubeflow", "ONNX"],
    image: "/projects/movie-recs.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
  {
    title: "Fraud Detection in Online Transactions",
    description:
      "Built a fraud detection pipeline using XGBoost, CNNs, and Graph Neural Networks, achieving strong recall and precision on imbalanced datasets.",
    tech: ["XGBoost", "CNN", "PyTorch Geometric", "SMOTE"],
    image: "/projects/fraud-detection.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
  {
    title: "Airfare Data Analytics",
    description:
      "Built a preprocessing and analytics workflow for airline pricing data using pandas, NumPy, feature engineering, one-hot encoding, and imputation.",
    tech: ["Python", "Pandas", "NumPy", "Data Analysis"],
    image: "/projects/airfare-analytics.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
  {
    title: "Advanced Data Visualization in Tableau",
    description:
      "Created interactive dashboards with calculated fields, LOD expressions, and parameterized views to improve reporting and business insight generation.",
    tech: ["Tableau", "BI", "Dashboards", "Data Visualization"],
    image: "/projects/tableau-dashboard.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
  {
    title: "Workout Tracking & Analysis",
    description:
      "Developed ML models for fitness tracking and built an interactive dashboard for personalized analysis and recommendations.",
    tech: ["Python", "Streamlit", "Random Forest", "XGBoost"],
    image: "/projects/workout-tracker.png",
    github: "https://github.com/Prashantanand2811",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-medium mb-3">
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Machine Learning, LLM, and Data Science Projects
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-7">
            A selection of projects across recommendation systems, LLM
            applications, fraud detection, analytics, and visualization.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white leading-snug mb-3 min-h-[56px]">
                  {project.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400 mb-4 min-h-[110px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300 transition group-hover:border-sky-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-pink-400"
                  >
                    Details
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}