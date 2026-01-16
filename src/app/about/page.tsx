// src/app/about/page.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React / Next.js", 
  "Node.js", "WebGL / Three.js", "GSAP / Framer Motion"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-32 pb-20 px-4 md:px-20">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* 左側：プロフィール画像（抽象的なイメージ） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] w-full md:w-4/5 overflow-hidden rounded-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
            alt="Portrait"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* 右側：テキストコンテンツ */}
        <div className="space-y-12">
          
          {/* キャッチコピー */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Code is <br />
              <span className="text-gray-500">Poetry.</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              私は、単に機能するコードを書くだけではありません。<br />
              ユーザーの感情を動かし、記憶に残るデジタル体験を創造します。<br />
              デザインとエンジニアリングの境界線を溶かし、<br />
              世界に新しい価値を提供することが私のミッションです。
            </p>
          </motion.div>

          {/* スキルリスト */}
          <div>
            <h3 className="text-sm tracking-widest text-gray-500 mb-6 border-b border-gray-800 pb-2">
              SKILLS & TOOLS
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}