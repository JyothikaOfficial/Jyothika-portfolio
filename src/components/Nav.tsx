// src/components/Nav.tsx
import React from "react";

const linkIds = [
  "hero",
  "about",
  "projects",
  "skills",
  "education",
  "internship",
  "contact",
];

const Nav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60, // adjust if navbar is sticky
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Jyo's Portfolio</div>
        <div className="space-x-6 text-white">
          {linkIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-purple-400 transition"
            >
              {id
                .split("-")
                .map((w) => w[0].toUpperCase() + w.slice(1))
                .join(" ")}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
