// src/app/page.tsx
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-neutral-900">
      <Hero />
      <Gallery />
    </main>
  );
}