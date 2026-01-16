// src/components/SmoothScroll.tsx
'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

// ★重要：「export default」がついていることを確認！
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}