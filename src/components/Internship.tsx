// src/components/Internship.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const internships = [
  {
    company: "Skifter Technologies",
    role: "Full Stack Developer Intern",
    duration: "June 2025 – Sep 2025",
    description:
      "Built responsive web apps with React & Tailwind. Implemented REST APIs using Node.js & Express. Collaborated in agile teams using GitHub.",
    points: [
      "React, Tailwind, Node.js, Express",
      "Responsive pages & APIs",
      "Team collaboration with Git",
    ],
    image: "/FUTURE_FS_01/assets/fullstack-bg.jpg",
  },
  {
    company: "Sri Motors (Yamaha Authorized Dealer)",
    role: "Customer Engagement Intern",
    duration: "Jan 2024 – Feb 2024",
    description:
      "Handled customer interactions, assisted inventory management, and documentation. Developed communication & problem-solving skills.",
    points: [
      "Customer engagement & support",
      "Inventory management",
      "Communication improvement",
    ],
    image: "/FUTURE_FS_01/assets/customer-bg.jpg",
  },
  {
    company: "Future Interns",
    role: "Full Stack Development Intern",
    duration: "Oct 2025 – Nov 2025",
    description:
      "Developed dynamic web apps using React & Node.js. Integrated APIs, worked with DBs, and performed code reviews.",
    points: [
      "React & Node.js projects",
      "API integration & DB connectivity",
      "Agile team code reviews",
    ],
    image: "/FUTURE_FS_01/assets/future-interns-bg.jpg",
  },
];

export default function Internship() {
  const [selected, setSelected] = useState<number | null>(null);

  // 🧠 Auto-close card when user scrolls to another section
  useEffect(() => {
    const handleScroll = () => {
      if (selected !== null) setSelected(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selected]);

  // 🧠 Warn if user reloads / closes tab with card open
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (selected !== null) {
        e.preventDefault();
        e.returnValue = "Please close the open card before leaving this page.";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [selected]);

  return (
    <section
      className="relative pt-12 pb-24 min-h-screen text-white overflow-hidden"
      id="internship"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/FUTURE_FS_01/assets/internship-bg-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Internship Experience
      </motion.h2>

      {/* Cards Grid */}
      <div className="relative z-5 flex flex-wrap justify-center gap-12 px-6 mt-2">
        {internships.map((i, idx) => {
          const isSelected = selected === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setSelected(isSelected ? null : idx)}
              className="relative flex flex-col items-center cursor-pointer transition-all duration-500"
            >
              {/* Circular Card */}
              <motion.div
                className="w-64 h-64 rounded-full overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 flex items-center justify-center shadow-lg relative"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(255,255,255,0.15)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                <img
                  src={i.image}
                  alt={i.company}
                  className="w-full h-full object-cover transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg">
                    Touch to See Details
                  </span>
                </div>
              </motion.div>

              {/* Role & Company */}
              <div className="mt-0 text-center">
                <h3 className="text-xl font-bold">{i.role}</h3>
                <p className="text-white/80">{i.company}</p>
                <span className="text-white/60 text-sm">{i.duration}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Full-width Details */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 w-full px-6 py-3 z-20"
          >
            {internships
              .filter((_, idx) => idx === selected)
              .map((i, idx) => (
                <motion.div
                  key={idx}
                  className="w-full bg-white/10 backdrop-blur-md rounded-t-3xl p-6 shadow-lg relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-400 transition-colors"
                  >
                    &times;
                  </button>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 h-64 overflow-hidden rounded-xl">
                      <img
                        src={i.image}
                        alt={i.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 text-white">
                      <h3 className="text-2xl font-bold mb-2">{i.role}</h3>
                      <p className="text-white/80 mb-1">{i.company}</p>
                      <span className="text-white/60 text-sm mb-4">
                        {i.duration}
                      </span>
                      <p className="text-white/90 mb-2">{i.description}</p>
                      <h4 className="font-semibold mb-1">
                        Technologies & Tasks:
                      </h4>
                      <ul className="list-disc list-inside text-white/90 space-y-1">
                        {i.points.map((pt, j) => (
                          <li key={j}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
