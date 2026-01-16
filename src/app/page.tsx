// src/app/page.tsx
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import { client } from "@/libs/client"; // MicroCMS接続ツール

// ★ここがポイント：キャッシュを無効化して、常に最新のデータを取る設定
// （これがないと、MicroCMSで更新しても反映に時間がかかります）
export const revalidate = 0; 

export default async function Home() {
  
  // 1. MicroCMSから生データを取得
  const data = await client.get({ endpoint: "projects" });

  // 2. データを整形（MicroCMSの形 → アプリが読める形に変換）
  // ※これを「Adapterパターン」と呼び、アプリを守るための重要な防壁です
  const microCMSProjects = data.contents.map((item: any) => ({
    id: item.id,                 // MicroCMSのID
    title: item.title,           // タイトル
    category: item.category,     // カテゴリー
    // 画像URLの変換（万が一画像がない時はダミーを出す安全策付き）
    src: item.image?.url || "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000",
  }));

  return (
    <main className="bg-neutral-900 min-h-screen">
      <Hero />
      {/* 3. 整形したデータをGalleryに渡す */}
      <Gallery projects={microCMSProjects} />
    </main>
  );
}