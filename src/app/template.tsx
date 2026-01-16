// src/app/template.tsx
'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }} // 最初は透明＆ぼかし
      animate={{ opacity: 1, filter: 'blur(0px)' }}  // ふわっと鮮明になる
      transition={{ duration: 0.5, ease: 'easeOut' }} // 0.5秒かけて変化
    >
      {children}
    </motion.div>
  );
}