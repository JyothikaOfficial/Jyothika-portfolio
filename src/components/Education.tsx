// src/components/Education.tsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Edu = {
  degree: string;
  details: string;
  duration: string;
  highlights?: string[];
  color?: string;
};

type Cert = {
  title: string;
  pct: number;
  description: string;
  advantages: string[];
  disadvantages: string[];
};

const education: Edu[] = [
  {
    degree: "Master of Computer Application",
    details: "Sathyabama Institute Of Science And Technology, Chennai",
    duration: "2024 – Present",
    highlights: [
      "Specialization: Web & Cloud",
      "Coursework: Advanced Algorithms, ML Basics",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    degree: "Bachelor of Computer Application – 8.0 CGPA",
    details: "Gurunanak College, Chennai",
    duration: "2021 – 2024",
    highlights: [
      "Final Year Project: E-commerce platform",
      "Dept. rank: Top 10%",
    ],
    color: "from-pink-500 to-orange-400",
  },
];

const certifications: Cert[] = [
  {
    title: "Python for Data Science - UDEMY",
    pct: 95,
    description: "Python basics, syntax, data structures, and OOP concepts.",
    advantages: [
      "Improves coding fundamentals",
      "Widely used language",
      "Good for automation and web dev",
    ],
    disadvantages: [
      "Not as fast as compiled languages",
      "Limited mobile development support",
    ],
  },
  {
    title: "Introduction to Cybersecurity - CISCO",
    pct: 80,
    description: "Basics of cybersecurity, threats, and mitigation techniques.",
    advantages: ["Understanding security fundamentals", "Career-ready skills"],
    disadvantages: ["Needs constant updating due to new threats"],
  },
  {
    title: "AWS Cloud Practitioner - NASSCOM & AWS",
    pct: 70,
    description: "Introduction to AWS services and cloud concepts.",
    advantages: [
      "Cloud knowledge",
      "Foundation for advanced AWS certifications",
    ],
    disadvantages: ["Basic level, limited practical skills"],
  },
  {
    title: "Java with Selenium Workshop - TESTLEAF",
    pct: 85,
    description: "Hands-on Java automation using Selenium WebDriver.",
    advantages: ["Automation skills", "Practical testing experience"],
    disadvantages: ["Limited to Selenium context"],
  },
  {
    title: "Introduction to AI - INFOSYS SPRINGBOARD",
    pct: 75,
    description: "Basic AI concepts, ML workflow, and Python usage.",
    advantages: ["Foundation for AI projects", "Good for resume"],
    disadvantages: ["Limited depth, mostly introductory"],
  },
  {
    title: "Data Analytics Job Simulation - DELOITTE",
    pct: 88,
    description: "End-to-end analytics simulation using real datasets.",
    advantages: [
      "Practical data analysis experience",
      "Industry-oriented skills",
    ],
    disadvantages: ["Simulation only, not full real-world experience"],
  },
  {
    title: "Aptitude Internship Certificate - ICAT",
    pct: 92,
    description:
      "Developed problem-solving and analytical skills through ICAT Aptitude Internship.",
    advantages: [
      "Improves reasoning & problem-solving",
      "Industry recognition",
    ],
    disadvantages: ["Short-term internship, limited exposure"],
  },
  {
    title: "Machine Learning with Python - INFOSYS",
    pct: 85,
    description:
      "Hands-on ML projects, Python libraries like scikit-learn, pandas, and numpy.",
    advantages: ["Practical ML knowledge", "Good for resume & projects"],
    disadvantages: ["Introductory level, needs further practice"],
  },
];

export default function Education() {
  const [activeEdu, setActiveEdu] = useState<number | null>(null);
  const [activeCert, setActiveCert] = useState<number | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveEdu(null);
        setActiveCert(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (activeEdu !== null || activeCert !== null) {
      setTimeout(() => modalCloseRef.current?.focus(), 100);
    }
  }, [activeEdu, activeCert]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: -5, scale: 0.96 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -2, 2, -2, 0],
      transition: { duration: 0.8, repeat: Infinity },
    },
  };

  const modalBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modalContent = {
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    visible: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 20, opacity: 0, scale: 0.98 },
  };

  return (
    <section
      id="education"
      className="relative h-screen py-20 px-6 text-white overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/education-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-40"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          🎓 Education & Certifications
        </motion.h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-4">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              className="p-6 rounded-2xl shadow-2xl border border-white/10 cursor-pointer bg-white/5 backdrop-blur-md"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setActiveEdu(idx)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-3 h-12 rounded-full bg-gradient-to-b ${
                    edu.color ?? "from-purple-500 to-indigo-500"
                  } shrink-0`}
                />
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-white/80 mt-1">{edu.details}</p>
                  <span className="text-sm text-white/60 mt-2 block">
                    {edu.duration}
                  </span>
                </div>
              </div>
              {edu.highlights?.length && (
                <ul className="mt-4 text-sm text-white/80 list-disc list-inside space-y-1">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              className="p-4 rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform bg-transparent border border-white/20"
              onClick={() => setActiveCert(i)}
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-white/90 font-semibold text-lg mb-1">
                {c.title}
              </h4>
              <div className="w-full bg-white/6 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 bg-gradient-to-r from-green-400 to-yellow-400"
                  style={{ width: `${c.pct}%`, transition: "width 0.8s ease" }}
                />
              </div>
              <span className="text-white/60 text-sm mt-1 block">
                {c.pct}% Complete
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {/* Education Modal */}
        {activeEdu !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setActiveEdu(null)}
            />
            <motion.div
              className="relative z-50 max-w-3xl w-full mx-4 md:mx-0 rounded-2xl shadow-2xl overflow-hidden border border-white/20"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Background Image */}
              <img
                src={activeEdu === 0 ? "/assets/pg.jpg" : "/assets/ug.jpg"}
                alt="Education Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/50 z-0"></div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <button
                  ref={modalCloseRef}
                  onClick={() => setActiveEdu(null)}
                  className="absolute right-4 top-4 text-white/90 bg-white/6 hover:bg-white/10 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Close
                </button>
                <h3 className="text-2xl font-bold mb-10">
                  {education[activeEdu].degree}
                </h3>
                <p className="text-white/80 mb-4">
                  {education[activeEdu].details}
                </p>
                <p className="text-sm text-white/70 mb-4">
                  {education[activeEdu].duration}
                </p>
                <div className="grid gap-10">
                  <h4 className="font-semibold">Highlights</h4>
                  <ul className="list-disc list-inside text-white/80">
                    {education[activeEdu].highlights?.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Certification Modal */}
        {activeCert !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setActiveCert(null)}
            />
            <motion.div
              className="relative z-50 max-w-3xl w-full mx-4 md:mx-0 rounded-2xl shadow-2xl overflow-hidden border border-white/20"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Background Image */}
              <img
                src="/assets/certifications.jpg"
                alt="Certifications Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/55 z-0"></div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute right-4 top-4 text-white/90 bg-white/6 hover:bg-white/10 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Close
                </button>
                <h3 className="text-2xl font-bold mb-3">
                  {certifications[activeCert].title}
                </h3>
                <p className="text-white/80 mb-2">
                  {certifications[activeCert].description}
                </p>
                <div className="flex gap-6 flex-wrap">
                  <div>
                    <h5 className="font-semibold text-white/90">Advantages:</h5>
                    <ul className="list-disc list-inside text-white/70">
                      {certifications[activeCert].advantages.map((a, j) => (
                        <li key={j}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white/90">
                      Disadvantages:
                    </h5>
                    <ul className="list-disc list-inside text-white/70">
                      {certifications[activeCert].disadvantages.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
