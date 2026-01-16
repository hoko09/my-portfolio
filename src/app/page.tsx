// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* ヒーローセクション */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
        {/* 背景の光の演出 */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase mb-4 block">
              Based in Tokyo / Digital Craftsman
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-7xl md:text-[12vw] font-bold leading-[0.9] tracking-tighter"
          >
            CREATIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              DEVELOPER
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-8"
          >
            <Link href="/work" className="group flex items-center gap-4 text-xl overflow-hidden">
              <span className="relative">
                View Works
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                →
              </div>
            </Link>
          </motion.div>
        </div>

        {/* スクロールを促すインジケーター */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </section>
    </main>
  );
}