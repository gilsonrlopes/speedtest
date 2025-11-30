import { MetadataRoute } from 'next';
import { CIDADES } from '@/lib/cidades';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.grsites.com.br';

  // 1. URLs Estáticas (Home, Cases, etc)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-beto-montador`, // Adicionei seu case aqui
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. URLs Dinâmicas (Gera uma url para CADA cidade do arquivo cities.ts)
  const cityRoutes: MetadataRoute.Sitemap = CIDADES.map((cidade) => ({
    url: `${baseUrl}/criacao-de-sites/${cidade.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: cidade.tipo === 'capital' ? 0.9 : 0.8,
  }));

  // O SEGREDO ESTÁ AQUI: Juntar (...) as duas listas
  const sitemapCompleto = [...staticRoutes, ...cityRoutes];

  console.log(`✅ Sitemap gerado com ${sitemapCompleto.length} URLs.`); // Para você ver no terminal

  return sitemapCompleto;
}