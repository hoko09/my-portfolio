// src/components/Gallery.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// 受け取るデータの形を定義（型定義）
type Project = {
  id: string;
  title: string;
  category: string;
  src: string;
};

// ★ここが修正点：親から projects を受け取るように変更
export default function Gallery({ projects }: { projects: Project[] }) {
  
  // もしデータが空っぽだった場合の安全策
  if (!projects || projects.length === 0) {
    return <div className="text-white text-center py-20">Loading projects...</div>;
  }

  return (
    <div className="py-20 px-4 md:px-20 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* 受け取った projects を使ってループ表示 */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-800"
          >
            <Link href={`/work/${project.id}`} className="block w-full h-full">
              {/* 画像 */}
              <img
                src={project.src}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* テキスト（マウスホバーで浮き出る演出） */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}