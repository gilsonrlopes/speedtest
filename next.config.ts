import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Correção para Firefox - Webpack Config
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    // Reduz logging para evitar problemas
    config.infrastructureLogging = { level: 'error' };
    return config;
  },

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
      {
        // Headers para melhor compatibilidade com Firefox (desenvolvimento)
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;