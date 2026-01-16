// src/app/contact/page.tsx
'use client';

import { useFormState } from 'react-dom'; // ★サーバーと通信するためのフック
import { motion } from 'framer-motion';
import { sendContactForm } from '../actions'; // ★さっき作った裏方プログラムをインポート

const initialState = {
  message: '',
  errors: {},
  success: false,
};

export default function ContactPage() {
  // ★フォームの状態管理（state: 結果, dispatch: 送信実行）
  const [state, dispatch] = useFormState(sendContactForm, initialState);

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-32 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        
        {/* 送信成功時の表示 */}
        {state.success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-900/30 border border-green-500/50 p-12 rounded-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-green-400 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300">お問い合わせを受け付けました。<br />内容を確認次第、ご連絡いたします。</p>
          </motion.div>
        ) : (
          /* 通常時のフォーム表示 */
          <>
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

            {/* ★ action={dispatch} でサーバー側の関数と接続！ */}
            <form action={dispatch} className="space-y-12">
              
              {/* お名前 */}
              <div className="group">
                <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  NAME
                </label>
                <input 
                  name="name" // ★これが必要
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800"
                />
                {/* エラー表示 */}
                {state.errors?.name && (
                  <p className="text-red-500 text-sm mt-2">{state.errors.name}</p>
                )}
              </div>

              {/* メールアドレス */}
              <div className="group">
                <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  EMAIL
                </label>
                <input 
                  name="email" // ★これが必要
                  type="email" 
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800"
                />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm mt-2">{state.errors.email}</p>
                )}
              </div>

              {/* メッセージ */}
              <div className="group">
                <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  MESSAGE
                </label>
                <textarea 
                  name="message" // ★これが必要
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-2xl text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-800 resize-none"
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm mt-2">{state.errors.message}</p>
                )}
              </div>

              {/* 送信ボタン（Server Actions使用時は自動でloading状態にはならないので、必要ならuseFormStatusを使いますが、まずはシンプルに） */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-12 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors mt-8"
              >
                SEND MESSAGE
              </motion.button>
              
              {/* 全体エラーメッセージ */}
              {state.message && !state.success && (
                 <p className="text-red-500 mt-4">{state.message}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}