// src/app/work/[id]/page.tsx
import { client } from "@/libs/client";
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 0;

// ★ Vercelのチェックを確実に通すための最もシンプルな定義
export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // params を await する（Next.js 15 の必須ルール）
  const { id } = await params;

  const project = await client
    .get({
      endpoint: "projects",
      contentId: id,
    })
    .catch(() => null);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-neutral-900 min-h-screen text-white pb-20">
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold hover:bg-white/20 transition-colors">
          ← BACK
        </Link>
      </div>

      <div className="w-full h-[60vh] relative">
        <img
          src={project.image?.url || "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <span className="text-green-400 font-mono mb-4 block">
          {project.category}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          {project.title}
        </h1>
        <div className="bg-neutral-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-neutral-700">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}