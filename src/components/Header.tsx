// src/components/Header.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Menu from './Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[100] mix-blend-difference text-white">
        {/* ロゴ */}
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          My Portfolio
        </Link>

        {/* ハンバーガーボタン */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex flex-col gap-1.5 w-8 cursor-pointer"
        >
          <span className={`block w-full h-[2px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-full h-[2px] bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-[2px] bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* メニューコンポーネントを配置 */}
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}