// src/app/contact/page.tsx
'use client';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-32 px-4 md:px-20">
      
      <div className="max-w-4xl mx-auto">
        {/* ヘ出し：アニメーション付き */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Let's work <br />
            <span className="text-gray-500">together.</span>
          </h1>
          <p className="text-xl text-gray-400">
            新しいプロジェクトのご相談、お待ちしております。
          </p>
        </motion.div>

        {/* フォームエリア */}
        <form className="space-y-12">
          {/* お名前 */}
          <div className="group">
            <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
              NAME
            </label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-transparent border-b border-gray-700 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800"
            />
          </div>

          {/* メールアドレス */}
          <div className="group">
            <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
              EMAIL
            </label>
            <input 
              type="email" 
              placeholder="hello@example.com"
              className="w-full bg-transparent border-b border-gray-700 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800"
            />
          </div>

          {/* メッセージ */}
          <div className="group">
            <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
              MESSAGE
            </label>
            <textarea 
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-gray-700 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800 resize-none"
            />
          </div>

          {/* 送信ボタン */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors mt-8"
          >
            SEND MESSAGE
          </motion.button>
        </form>

      </div>
    </div>
  );
}