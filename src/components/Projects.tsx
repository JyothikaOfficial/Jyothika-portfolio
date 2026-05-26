// src/components/Projects.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  img: string;
  github?: string;
  category: "Data Analyst" | "Full Stack" | "ML";
  languages: string[];
  details: string;
}

const projects: Project[] = [
  {
    title: "Credit Card Financial Dashboard",
    description:
      "Interactive Power BI dashboard analyzing customer spending behavior and transaction trends.",
    img: "/assets/credit-card-dashboard.jpg",
    github:
      "https://github.com/JyothikaOfficial/Credit-Card-Financial-Transaction-dashboard",
    category: "Data Analyst",
    languages: ["Power BI", "Excel", "Data Visualization"],
    details:
      "Developed an interactive dashboard to analyze credit card transactions and customer spending behavior. Visualized $73M+ transaction revenue using KPI cards, donut charts, line charts, and geospatial maps. Implemented dynamic filters for gender, city, category, and profession-based analysis while identifying fraud-related trends and improving business decision-making through modern data storytelling techniques.",
  },
  {
    title: "Hospital Management System Analysis Dashboard",
    description:
      "KPI-driven hospital analytics dashboard with appointment, finance, and performance insights.",
    img: "/assets/hospital-dashboard.jpg",
    github: "https://github.com/JyothikaOfficial/",
    category: "Data Analyst",
    languages: ["SQL", "Power BI", "DAX"],
    details:
      "Built an interactive hospital analytics dashboard with doctor, department, and appointment-based filtering. Analyzed cancellation rates, patient demographics, doctor performance, and payment behavior using DAX metrics. Improved decision-making efficiency by 45% through actionable insights on staffing, patient care trends, and resource optimization strategies.",
  },
  {
    title: "Call Center Trend Analysis",
    description:
      "Excel-based call center analytics project focused on staffing optimization and SLA improvement.",
    img: "/assets/call-center-analysis.jpg",
    github: "https://github.com/JyothikaOfficial/",
    category: "Data Analyst",
    languages: ["Excel", "Data Visualization", "Analytics"],
    details:
      "Analyzed 117K+ call records to identify peak demand patterns, staffing gaps, and customer behavior trends. Cleaned 47K+ abnormal and NULL values using Excel techniques, pivot tables, and advanced formulas. Developed executive-level visualizations that supported manpower reallocation, reduced call abandonment rates, and improved customer satisfaction through data-driven workforce planning.",
  },
  {
    title: "Sales Data Analysis",
    description:
      "Data Analytics project using Excel & Power BI dashboards for actionable business insights.",
    img: "/assets/data-analytics.jpg",
    github: "https://github.com/JyothikaOfficial/FUTURE_FS_02.git",
    category: "Data Analyst",
    languages: ["Excel", "Power BI", "Python"],
    details:
      "Analyzed sales data and created interactive dashboards using Power BI and Excel for reporting key business insights.",
  },
  {
    title: "Gaming Landing Page",
    description:
      "Immersive landing page crafted for gamers to explore, connect, and dive into epic tournaments.",
    img: "/assets/gaming.jpg",
    github: "https://github.com/JyothikaOfficial/Shadow_Morpher",
    category: "Full Stack",
    languages: ["HTML", "CSS", "JavaScript", "GSAP"],
    details:
      "This landing page delivers a futuristic gaming experience with parallax effects, smooth transitions, and responsive UI for all devices.",
  },
  {
    title: "E-Commerce Store",
    description: "Responsive online shop with full cart functionality.",
    img: "/assets/ecommerce.jpg",
    github: "https://github.com/JyothikaOfficial/custom_craft",
    category: "Full Stack",
    languages: ["HTML", "CSS", "PHP", "MySQL"],
    details:
      "A full-fledged online store that allows users to browse, add to cart, and checkout. Backend built with PHP & MySQL, ensuring data persistence.",
  },
  {
    title: "Conversion of Sign Language using Text & Speech",
    description:
      "Smart assistive app bridging sign language with real-time text and voice conversion.",
    img: "/assets/sign%20language.jpg",
    github:
      "https://github.com/JyothikaOfficial/Conversion-of-sign-language-to-text-and-speech-using-deep-learning",
    category: "ML",
    languages: ["Python", "TensorFlow", "OpenCV"],
    details:
      "This ML project detects hand gestures using deep learning and converts them into meaningful text and speech output, enhancing accessibility.",
  },
  {
    title: "Rebrand E-Commerce Store",
    description:
      "Brand Spark – Nike: Modernized UI & UX for a rebranded Nike store.",
    img: "/assets/brand-spark.jpg",
    github: "https://github.com/JyothikaOfficial/FUTURE_FS_03.git",
    category: "Full Stack",
    languages: ["HTML", "CSS", "JavaScript", "React"],
    details:
      "Redesigned and improved the UI/UX for an existing Nike store with modern layouts and smooth transitions.",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and experience with smooth transitions and animations.",
    img: "/assets/portfolio.jpg",
    github: "https://github.com/JyothikaOfficial/FUTURE_FS_01.git",
    category: "Full Stack",
    languages: ["React", "Tailwind CSS", "Framer Motion"],
    details:
      "A modern and animated portfolio built with React and Framer Motion, showcasing interactive UI, responsive design, and elegant animations.",
  },
  {
    title: "Shob Hub E-Commerce Project",
    description:
      "End-to-end e-commerce platform delivering a seamless shopping experience.",
    img: "/assets/shop-hub.jpg",
    github: "https://github.com/JyothikaOfficial/FUTURE_FS_02.git",
    category: "Full Stack",
    languages: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    details:
      "Complete online shopping platform with product management, cart functionality, and payment integration.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<
    "All" | "Data Analyst" | "Full Stack" | "ML"
  >("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 text-white min-h-screen">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100"
        >
          <source src="/assets/projects-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Heading */}
      <motion.h2
        className="relative text-5xl font-extrabold text-center mb-12 z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="relative z-10 flex justify-center gap-5 mb-12 flex-wrap">
        {(["All", "Full Stack", "Data Analyst", "ML"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2.5 rounded-full font-semibold border transition-all duration-300 backdrop-blur-md ${
              filter === f
                ? "bg-purple-700/70 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                : "bg-white/10 text-white border-white/40 hover:bg-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={p.title}
            className="relative group bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:bg-purple-900/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="relative h-60 overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Touch Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setSelectedProject(p)}
                  className="px-5 py-2 bg-purple-600/80 rounded-full font-semibold hover:bg-purple-700 transition text-white text-sm"
                >
                  Touch This
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-6 max-w-2xl w-full border border-purple-600/40 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-purple-400">
                {selectedProject.title}
              </h3>
              <p className="text-white/90 mb-4">{selectedProject.details}</p>
              <p className="text-white/80 mb-4">
                <span className="font-semibold">Languages Used:</span>{" "}
                {selectedProject.languages.join(", ")}
              </p>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/80 rounded-lg hover:bg-purple-700 transition text-sm font-semibold shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
