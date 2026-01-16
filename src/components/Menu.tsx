// src/components/Menu.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuLinks = [
  { title: "Projects", href: "/" },
  { title: "About", href: "/about" }, // まだページはないですが動線だけ作ります
  { title: "Contact", href: "/contact" },
  { title: "Twitter/X", href: "https://twitter.com" },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景のオーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[90]"
            onClick={onClose}
          />
          
          {/* メニュー本体 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-neutral-900 z-[95] p-12 flex flex-col justify-center border-l border-white/10"
          >
            <div className="space-y-8">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={onClose}
                    className="block text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-white transition-all hover:scale-105 origin-left"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 left-12 text-gray-500 text-sm">
              &copy; 2026 MY PORTFOLIO.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}