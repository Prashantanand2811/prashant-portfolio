import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center" id="about">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-6">
      Hi, I’m Prashant Anand, a Master’s student in Management Information Systems at the University at Buffalo, specializing in Data Analytics, Data Engineering, and Machine Learning. I have hands-on experience building predictive models, developing scalable data pipelines, and designing real-time dashboards that support data-driven decision-making.

Skilled in Python, SQL, Tableau, and AWS, I’ve deployed machine learning solutions, automated ETL workflows, and integrated multi-source data to drive operational efficiency and business insights. My work bridges the gap between raw data and intelligent action through robust engineering and analytics.

I’m now looking for opportunities to leverage my expertise in data engineering and machine learning to create impactful, scalable solutions.
      </p>
      <a
        href="/Prashant_Anand_DA_lat.pdf"
        target="_blank"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
