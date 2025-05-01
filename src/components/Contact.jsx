import React from "react";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6 text-center" id="contact">
      <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
      <p className="text-lg text-gray-700 mb-4">
        Feel free to reach out for opportunities or collaboration.
      </p>
      <p className="text-md text-blue-600 mb-6">
        📧 <a href="mailto:panand3@buffalo.edu">panand3@buffalo.edu</a>
      </p>
      <div className="flex justify-center gap-8 mt-4">
        <a
          href="https://github.com/Prashantanand2811"
          target="_blank"
          className="text-gray-600 hover:text-black transition text-lg"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/prashantanand28/"
          target="_blank"
          className="text-gray-600 hover:text-black transition text-lg"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
