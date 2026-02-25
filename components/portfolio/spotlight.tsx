"use client";

import { useEffect, useState } from "react";

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-300 lg:block"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsla(166, 72%, 55%, 0.06), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
}
