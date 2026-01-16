// src/components/Gallery.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/projects';

export default function Gallery() {
  return (
    // ★ここを変更：relative z-10 を追加して、Heroより手前に表示させる
    <div className="min-h-screen bg-black text-white py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Link href={`/work/${project.id}`} key={project.id}>
            <motion.div
              className="relative aspect-video cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* 画像 */}
              <motion.div
                layoutId={`image-${project.id}`}
                className="relative w-full h-full overflow-hidden rounded-lg"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* テキスト情報 */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.category}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}