import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Advanced Data Visualization in Tableau",
    description:
      "Created 10+ interactive dashboards with LOD expressions, table calculations, and parameterized views, reducing reporting delays by 40%.",
  },
  {
    title: "Fraud Detection in Online Transactions",
    description:
      "Built a Random Forest model using SMOTE and cost-sensitive learning, achieving 93% recall and 20% better fraud detection over baseline.",
  },
  {
    title: "Talend–Oracle Cloud ETL Pipeline",
    description:
      "Developed scalable ETL pipelines using Talend, improving data loading by 55% and integrating with Tableau for real-time business intelligence.",
  },
  {
    title: "Loan Eligibility Automation",
    description:
      "Built a hybrid ML + rule-based pipeline to assess loan approvals and deployed dashboards to guide business decisions.",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Implemented collaborative + content-based filtering with a Streamlit UI for personalized recommendations using Scikit-learn and Flask.",
  },
  {
    title: "Workout Tracking & Analysis",
    description:
      "Engineered fitness dashboards and built ML models (RF, SVM, XGBoost) for personalized training insights via AI-powered Streamlit UI.",
  },
  {
    title: "Airfare Data Analytics",
    description:
      "Built a parallelized preprocessing pipeline using NumPy/pandas, with one-hot encoding and statistical imputation for clean analytics.",
  },
];

export default function Projects() {
  return (
    <section className="p-10 bg-white min-h-screen" id="projects">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
