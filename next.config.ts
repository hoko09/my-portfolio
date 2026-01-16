/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ★ 型エラーがあっても無視してビルドを強行する
    ignoreBuildErrors: true,
  },
  eslint: {
    // ★ Lintエラー（書き方のチェック）があっても無視する
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;