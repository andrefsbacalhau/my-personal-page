import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../data";

const Education = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 py-25" id="education">
      <h2 className="text-4xl md:text-6xl font-medium tracking-light mb-5">
        Education
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {EDUCATION.map((education, index) => (
          <motion.div key={index} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-sm md:w-1/4 mb-2 md:mb-0">
                {education.yearRange}
              </div>
              <div className="md:w-3/4 mb-10">
                <div className="max-w-3xl backdrop-blue-3xl p-4 bg-stone-600/10 rounded-lg">
                  <h2 className="text-xl mb-2">{education.title}</h2>
                  <p className="mb-3 text-sm italic">{education.location}</p>
                  <h1 className="mt-4">
                    Final evaluation: {education.finalEval}
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
