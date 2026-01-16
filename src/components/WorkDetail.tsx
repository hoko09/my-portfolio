// src/components/WorkDetail.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  category: string;
  src: string;
  description: string;
};

export default function WorkDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pb-20 relative">
      
      {/* ★修正点：fixedをやめて「absolute」に変更し、コンテナの中に配置しました */}
      <div className="absolute top-8 left-8 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold shadow-2xl hover:scale-105 transition-transform"
        >
          <span>←</span> BACK
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-32">
        {/* 画像エリア */}
        <motion.div
          layoutId={`image-${project.id}`}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
          transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
        >
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* テキストエリア */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6 lg:pt-10"
        >
          <h1 className="text-6xl font-bold leading-tight">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.category}</p>
          <div className="h-px w-full bg-gray-800 my-8" />
          <p className="text-lg leading-relaxed text-gray-300">
            {project.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}