import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "Power BI",
      img: "/assets/powerbi.jpg",
      desc: "Develop business intelligence reports and dashboards.",
    },
    {
      name: "Python",
      img: "/assets/python-bg.jpg",
      desc: "Data analysis, scripting, and backend programming.",
    },
    {
      name: "Database / SQL",
      img: "/assets/db-bg.jpg",
      desc: "Design and query databases for data storage.",
    },
    {
      name: "Tableau",
      img: "/assets/tableau.jpg",
      desc: "Build interactive dashboards for data visualization.",
    },
    {
      name: "Excel",
      img: "/assets/excel.jpg",
      desc: "Analyze and visualize data with Excel.",
    },
    {
      name: "HTML5",
      img: "/assets/html-bg.jpg",
      desc: "Structure web pages with semantic tags and clean markup.",
    },
    {
      name: "CSS3",
      img: "/assets/css-bg.jpg",
      desc: "Style and animate websites with responsive layouts.",
    },
    {
      name: "Word",
      img: "/assets/word.jpg",
      desc: "Create professional documents with MS Word.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/skills-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-5xl font-extrabold mb-12 text-center text-white tracking-wider -mt-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl justify-items-center -mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden p-2 transition-transform duration-500 w-[230px] sm:w-[260px] md:w-[280px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              rotateY: 10,
              rotateX: -5,
              scale: 1.07,
              transition: { duration: 0.4 },
            }}
          >
            <div className="relative bg-black/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-white/20 shadow-md hover:shadow-[0_0_20px_#ff4dd266] transition-all duration-500">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-32 object-cover rounded-xl mb-3 transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="text-lg font-semibold text-white transition-colors">
                {skill.name}
              </h3>

              {/* Description on hover */}
              <motion.p
                className="absolute top-0 left-0 w-full h-full bg-black/70 text-white p-4 flex items-center justify-center text-center opacity-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {skill.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
