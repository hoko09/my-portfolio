// src/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-neutral-900 text-white overflow-hidden">
      <motion.div 
        initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }}
        className="text-center z-10"
      >
        <div className="overflow-hidden">
          <motion.h1 variants={textVariants} className="text-6xl md:text-9xl font-bold tracking-tighter">
            CREATIVE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 variants={textVariants} className="text-6xl md:text-9xl font-light italic serif">
            developer
          </motion.h1>
        </div>
        <motion.p variants={textVariants} className="mt-8 text-sm md:text-base text-gray-400 uppercase tracking-widest">
          Based in Tokyo, Crafting Digital Experiences
        </motion.p>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}