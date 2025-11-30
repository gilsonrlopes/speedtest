// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Proteção extra (opcional)
    },
    sitemap: 'https://www.grsites.com.br/sitemap.xml',
  };
}