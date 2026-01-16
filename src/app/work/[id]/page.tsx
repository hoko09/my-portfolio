// src/app/work/[id]/page.tsx
import { projects } from '@/projects';
import WorkDetail from '@/components/WorkDetail'; // ★さっき作った部品を読み込む

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <div>Not found</div>;

  // データをアニメーション担当（WorkDetail）に渡す
  return <WorkDetail project={project} />;
}