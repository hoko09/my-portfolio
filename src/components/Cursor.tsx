// src/components/Cursor.tsx
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16, // カーソルの中心に合わせる調整
        y: mousePosition.y - 16
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
    />
  );
}