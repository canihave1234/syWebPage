"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-8
        right-8
        z-50
        bg-orange-600
        text-white
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        transition
      "
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
}
