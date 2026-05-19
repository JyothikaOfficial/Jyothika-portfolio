import React from "react";
import { motion } from "framer-motion";

const certs = [
  "Python Essentials",
  "Cybersecurity Intro",
  "AWS Cloud Practitioner",
  "Placement Guidance – TESTLEAF",
  "AWS Skill Builder",
  "AI Intro – INFOSYS",
  "DELOITTE Cyber Simulation",
  "Data Analytics Simulation",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function CertList() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-4 max-w-lg mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {certs.map((title, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-violet-600 text-white rounded-lg p-4 shadow-lg cursor-pointer"
        >
          {title}
        </motion.div>
      ))}
    </motion.div>
  );
}
