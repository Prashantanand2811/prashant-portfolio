import React from "react";
import { motion } from "framer-motion";

import saayamLogo from "../assets/saayam-logo.png";
import maxgenLogo from "../assets/maxgen.png";
import hclLogo from "../assets/hcltech.png";
import iitBombayLogo from "../assets/iitbombay.png";

const experiences = [
  {
    role: "Machine Learning Engineer ",
    company: "Saayam for all",
    duration: "Sep 2025 – April 2026",
    logo: saayamLogo,
    points: [
      "Analyzed data from 50+ customer interactions using NLP models (BERT via Hugging Face) to uncover pain points in nonprofit resource allocation, driving a 25% improvement in AI-recommended feature alignments and enhancing donor matching accuracy.",
      "Developed and deployed 3 AI-driven product prototypes with PyTorch and FastAPI, including automated timelines for model training and inference,while creating 10+ ML tutorials and dashboards that accelerated team adoption by 40% and reduced onboarding time by 2 weeks.",
      "Prioritized 15+ AI feature enhancements through A/B testing and performance analytics on Snowflake, integrating reinforcement learning (Ray RLlib) for program optimization, resulting in a 30% uplift in user engagement and $50K+ in streamlined nonprofit program efficiency.",

    ]
  },
  {
    role: "Senior Machine Learning Engineer",
    company: "Maxgen Technologies Pvt. Ltd.",
    duration: "Oct 2021 – May 2024",
    logo: maxgenLogo,
    points: [
      "Fine tuned LLMs using LoRA and PEFT with FAISS and Pinecone vector retrieval, automating 8,500+ monthly support tickets and reducing manual resolution time by 38%.",
      "Built GenAI customer intelligence systems using prompt engineering, RAG, and sentence transformer embeddings, increasing lead scoring precision by 2.4x across 5 client deployments.",
      "Designed MLOps pipelines with Airflow, MLflow, Docker, and AWS ECS, compressing feature delivery cycles from 3 weeks to 9 days for cross functional teams.",
      "Processed 2M+ daily IoT events using Kafka and Spark Structured Streaming, increasing client operational uptime by 18 hours per quarter through predictive maintenance models.",
      "Mentored 5 junior engineers on transformer fine tuning and inference optimization."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "HCL Technologies",
    duration: "Aug 2020 – Aug 2021",
    logo: hclLogo,
    points: [
      "Constructed forecasting pipelines using PySpark, Random Forest, and Prophet on 120K+ monthly support tickets, achieving 98% forecast accuracy and eliminating 22 recurring escalation bottlenecks through proactive capacity planning.",
      "Developed anomaly detection systems with cost sensitive learning, SMOTE, and ensemble classifiers, cutting 12 infrastructure failures per month and recovering $150K in annual productivity losses through automated alerting.",
      "Optimized ETL workflows with Airflow and SQL based dimensional modeling, reducing daily execution time by 4 hours and improving overall engineering throughput by 20%."
    ]
  },
  {
    role: "Research Intern",
    company: "Indian Institute of Technology, Bombay",
    duration: "Jan 2020 – Jun 2020",
    logo: iitBombayLogo,
    points: [
      "Optimized video data for the BARC analytics project, improving system performance and reporting accuracy.",
      "Developed a custom 2D PoseNet model using TensorFlow and explored extensions toward 3D pose modeling.",
      "Built interactive interfaces using React and Babylon.js for real time pose and motion analysis.",
      "Worked on machine learning and computer vision research workflows combining frontend systems and data optimization."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sky-400 text-sm font-medium mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-7">
            A progression across research, machine learning engineering, GenAI,
            and production scale AI systems in enterprise environments.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative md:pl-20"
              >
                <div className="absolute left-0 top-2 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-sm">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm backdrop-blur">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-white md:hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {exp.role}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">
                            {exp.company}
                          </p>
                        </div>

                        <span className="inline-flex w-fit rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300">
                          {exp.duration}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-3">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-300 md:text-[15px]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}