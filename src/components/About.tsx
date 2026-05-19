// src/components/About.tsx
import { motion } from "framer-motion";

const aboutParagraphs = [
  `Hi! I’m <span class="text-purple-400 font-semibold">Jyothika</span>, a passionate <span class="text-green-400 font-semibold">Full-Stack Developer</span> and <span class="text-yellow-400 font-semibold">Data Analyst</span>. I love creating elegant solutions that combine <span class="text-cyan-400 font-semibold">technology</span> and <span class="text-pink-400 font-semibold">creativity</span>.`,

  `With experience in <span class="text-purple-400 font-semibold">React, Tailwind CSS, Python, SQL, Power BI</span>, I enjoy transforming complex problems into user-friendly applications and insightful data visualizations.`,

  `I thrive in <span class="text-green-400 font-semibold">collaborative environments</span> and constantly challenge myself to explore <span class="text-yellow-400 font-semibold">emerging technologies</span>, aiming to deliver solutions that are both <span class="text-pink-400 font-semibold">efficient</span> and <span class="text-cyan-400 font-semibold">aesthetically pleasing</span>.`,

  `Beyond coding, I’m passionate about <span class="text-purple-400 font-semibold">UI/UX design</span>, analyzing data trends, and building tools that make life easier for users. Each project is a new opportunity to learn, grow, and create impact.`,
];

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen w-full text-white flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-90"
      >
        <source src="/FUTURE_FS_01/assets/about-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* About Photo – moved down & right to cover watermark */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ y: 90, x: 100, opacity: 0.9 }}
          animate={{
            y: [100, 90, 100],
            x: [110, 100, 110],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/FUTURE_FS_01/assets/about-me.jpg"
            alt="Jyothika"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-purple-500 object-cover shadow-lg brightness-125"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          {aboutParagraphs.map((para, i) => (
            <motion.p
              key={i}
              className="text-white/80 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
