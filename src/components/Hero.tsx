// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import "./Hero.css"; // gradient, pulse, blinking cursor styles

const phrases = [
  "a Full-Stack Developer & Data Analyst",
  "building interactive web applications",
  "analyzing data for better decisions",
  "turning data into insights",
  "transforming ideas into code",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const full = phrases[index];
    const timeout = setTimeout(() => {
      setText((prev) =>
        forward
          ? full.slice(0, prev.length + 1)
          : full.slice(0, prev.length - 1)
      );

      if (forward && text === full) setForward(false);
      if (!forward && text === "") {
        setForward(true);
        setIndex((i) => (i + 1) % phrases.length);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [text, index, forward]);

  const cursorActive = forward || text !== phrases[index];

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center text-white px-4 overflow-hidden"
    >
      {/* Particles / Floating lights */}
      <Particles
        className="absolute inset-0 pointer-events-none"
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { speed: 0.4, direction: "top", outModes: "out" },
            color: { value: "#a855f7" },
          },
        }}
      />

      {/* Background image zoom */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/FUTURE_FS_01/assets/hero-bg.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col items-center gap-4 text-center max-w-xl"
      >
        {/* Hero photo with zoom + float + hover tilt */}
        <motion.img
          src="/FUTURE_FS_01/assets/about-me.jpg"
          alt="Jyothika"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500 object-cover shadow-lg mb-4 shadow-pulse"
          initial={{ scale: 1, y: 0, rotate: 0 }}
          animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
          whileHover={{ rotate: 3, scale: 1.15 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hero text with typing + gradient */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I’m Jyothika— <span className="text-gradient">{text}</span>
          {cursorActive && <span className="blinking-cursor">|</span>}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-md text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Passionate about crafting full-stack web solutions and uncovering
          insights through data analytics. Skilled in React, Tailwind, Python,
          and modern data visualization tools to build impactful digital
          experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.a
            href="#projects"
            className="flex-1 md:flex-none px-5 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-green-500 rounded-lg text-center"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #a855f7" }}
            transition={{ duration: 0.3 }}
          >
            Explore Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="flex-1 md:flex-none px-5 py-2 border border-purple-600 rounded-lg text-center"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px #7c3aed" }}
            transition={{ duration: 0.3 }}
          >
            Get in Touch
          </motion.a>

          <motion.a
            href="/FUTURE_FS_01/assets/resume.pdf"
            download
            className="flex-1 md:flex-none px-5 py-2 bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 rounded-lg text-center"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #10b981" }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
