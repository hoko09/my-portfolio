// src/app/actions.ts
'use server';

import { z } from 'zod';

// バリデーションのルール（スキーマ）を定義
const schema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
  message: z.string().min(10, { message: "メッセージは10文字以上でお願いします" }),
});

export async function sendContactForm(prevState: any, formData: FormData) {
  // 1. フォームのデータを取得
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  // 2. データの検証（バリデーション）
  const validatedFields = schema.safeParse(rawData);

  // 3. 検証失敗ならエラーを返す
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "入力内容に誤りがあります。",
    };
  }

  // 4. ここで本当はメール送信APIなどを叩く（今回はログ出力でシミュレーション）
  console.log("【送信成功】サーバーにデータが届きました:", validatedFields.data);
  
  // 少し待機して「処理中」の演出ができるようにする（1秒待つ）
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    errors: {},
    message: "お問い合わせを受け付けました！ありがとうございます。",
  };
}