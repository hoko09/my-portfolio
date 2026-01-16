// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header"; // ★ヘッダーを追加

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Awwwards Portfolio",
  description: "Created by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Cursor />
          <Header /> {/* ★ここに配置（全ページ共通のヘッダー） */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}