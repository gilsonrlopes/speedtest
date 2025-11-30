import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Otimizações de Imagem
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // ✅ Compressão automática
  compress: true,

  // ✅ React Strict Mode
  reactStrictMode: true,

  // ✅ Remove console.log em produção (mantém error e warn)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },

  // ✅ OTIMIZAÇÃO CRÍTICA: Reduz JavaScript desnecessário
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // ✅ Headers de Cache para Performance
  async headers() {
    return [
      {
        // Cache de imagens por 1 ano
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache de arquivos estáticos do Next.js
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;