import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-white md:text-base"
        >
          Prashant Anand
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}