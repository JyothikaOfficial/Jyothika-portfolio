"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </motion.button>
  );
}
