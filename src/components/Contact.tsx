import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnngbako", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        form.reset();
      } else {
        setStatus("Failed to send ❌ Please try again later");
      }
    } catch (err) {
      setStatus("Failed to send ❌ Check your connection");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center items-center min-h-screen text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/contact-bg.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Compact Glassmorphism Form Card */}
      <div className="relative z-10 w-full max-w-md p-6 rounded-3xl bg-transparent backdrop-blur-3xl border border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.2)]">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/assets/profile.jpg"
            alt="Jyothika Thiyagarajan"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-pink-500 shadow-[0_0_20px_rgba(255,0,255,0.3)] object-cover"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 tracking-wide text-white drop-shadow-lg">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-transparent text-white placeholder-pink-300 border border-pink-500/30 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition duration-200 shadow-[0_0_15px_rgba(255,0,255,0.3)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-transparent text-white placeholder-purple-300 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-200 shadow-[0_0_15px_rgba(128,0,255,0.3)]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-transparent text-white placeholder-indigo-300 border border-indigo-500/30 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 shadow-[0_0_15px_rgba(0,0,255,0.3)] resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-pink-500 font-semibold text-white shadow-[0_0_30px_rgba(255,0,255,0.3)] hover:shadow-[0_0_50px_rgba(255,0,255,0.5)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-5 text-sm text-pink-300">{status}</p>
        )}

        <div className="mt-5 text-center flex flex-col items-center gap-2 text-white/90">
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-pink-400" />
            <span>jyothikathiyagarajan@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-lg">
            <a
              href="https://www.linkedin.com/in/jyothika-t-039519288"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JyothikaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
