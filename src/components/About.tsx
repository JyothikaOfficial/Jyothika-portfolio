// src/components/About.tsx
import { motion } from "framer-motion";

const aboutParagraphs = [
  `<p class="text-justify">
  Hi! I’m <span class="text-purple-400 font-semibold">Jyothika</span>, a passionate <span class="text-yellow-400 font-semibold">Data Analyst</span> who enjoys transforming raw data into meaningful insights and business solutions. I love working with <span class="text-cyan-400 font-semibold">data</span>, discovering patterns, and helping organizations make smarter decisions through analytics.
  </p>`,

  `<p class="text-justify">
  With experience in <span class="text-purple-400 font-semibold">Python, SQL, Power BI, Excel, and Data Visualization</span>, I specialize in analyzing datasets, building interactive dashboards, and presenting insights in a clear and impactful way.
  </p>`,

  `<p class="text-justify">
  I enjoy solving real-world problems using <span class="text-green-400 font-semibold">data-driven approaches</span> and continuously learning <span class="text-yellow-400 font-semibold">emerging analytical tools and technologies</span>. My goal is to create solutions that are both <span class="text-pink-400 font-semibold">efficient</span> and valuable for businesses and users.
  </p>`,

  `<p class="text-justify">
  Beyond analytics, I’m passionate about <span class="text-purple-400 font-semibold">business intelligence</span>, identifying trends, and building reports that support strategic decision-making. Every project is an opportunity for me to learn, grow, and make a positive impact through data.
  </p>`,
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
        <source src="/assets/about-bg.mp4" type="video/mp4" />
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
            src="/assets/about-me.jpg"
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
