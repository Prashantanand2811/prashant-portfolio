import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-800 bg-slate-950 p-10 text-center shadow-sm"
        >
          <p className="text-sky-400 text-sm font-medium mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s connect
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-7 mb-8">
            I am open to Data Scientist, Machine Learning Engineer, and AI focused opportunities. Feel free to reach out for roles, collaborations, or technical conversations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:panand2428@gmail.com"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/prashantanand28/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Prashantanand2811"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              GitHub
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Prashant Anand
          </p>
        </motion.div>
      </div>
    </section>
  );
}