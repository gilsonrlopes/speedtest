// app/page.tsx

import { CIDADES } from "@/lib/cidades";
import { Metadata } from "next";
import Script from "next/script";

// Componentes
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TemplatesShowcase from "@/components/TemplatesShowcase";
import CaseBetoSection from "@/components/CaseBetoSection";
import Testimonials from "@/components/Testimonials";
import LighthouseAnalyzer from "@/components/LighthouseAnalyzer";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnaliseMercado from '@/components/AnaliseMercado';
import FAQ from "@/components/FAQ";
import OutrasCidades from '@/components/OutrasCidades';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Criação de Sites em Curitiba | Apareça no Google e Venda Mais",
  description: "Criação de sites profissionais em Curitiba que aparecem no Google. Seu concorrente está conquistando seus clientes agora. Sites otimizados para vendas. Orçamento grátis!",
  keywords: [
    "criação de sites em curitiba",
    "criação de sites curitiba",
    "desenvolvimento de sites curitiba",
    "web design curitiba",
    "sites profissionais curitiba",
    "agência de sites curitiba"
  ],
  openGraph: {
    title: "Criação de Sites em Curitiba | Domine o Google",
    description: "Seu concorrente aparece no Google e você não? Criamos sites que vendem. Profissionais, rápidos e otimizados para Curitiba.",
    url: "https://www.grsites.com.br",
    type: "website",
    locale: "pt_BR",
    siteName: "GR Sites",
    images: [
      {
        url: "https://www.grsites.com.br/logoshare.png",
        width: 1200,
        height: 630,
        alt: "GR Sites - Criação de Sites em Curitiba"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites em Curitiba | Domine o Google",
    description: "Criamos sites que vendem. Profissionais, rápidos e otimizados.",
    images: ["https://www.grsites.com.br/logoshare.png"]
  },
  alternates: { 
    canonical: "https://www.grsites.com.br" 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const curitiba = CIDADES.find((c) => c.slug === "curitiba");
  
  if (!curitiba) return <div>Erro ao carregar página</div>;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GR Sites - Criação de Sites em Curitiba",
    description: "Criação de sites profissionais em Curitiba e Região Metropolitana. Sites que aparecem no Google e convertem visitantes em clientes.",
    url: "https://www.grsites.com.br",
    telephone: "+55-41-99937-2194",
    email: "contato@grsites.com.br",
    priceRange: "R$ 997 - R$ 5.997",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Curitiba" },
      { "@type": "City", name: "São José dos Pinhais" },
      { "@type": "City", name: "Colombo" },
      { "@type": "City", name: "Pinhais" },
      { "@type": "City", name: "Araucária" },
    ],
    serviceType: [
      "Criação de Sites", 
      "Desenvolvimento Web", 
      "Web Design", 
      "SEO Local", 
      "Marketing Digital"
    ],
    aggregateRating: { 
      "@type": "AggregateRating", 
      ratingValue: "4.9", 
      reviewCount: "127" 
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.grsites.com.br",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schemas JSON-LD (MANTIDO) */}
      <Script 
        id="json-ld-business-home" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} 
        strategy="afterInteractive" 
      />
      <Script 
        id="json-ld-breadcrumb-home" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
        strategy="afterInteractive" 
      />

      {/* 🛑 CHATBASE REMOVIDO DAQUI! */}

      <Header cidade={curitiba} />
      <Hero cidade={curitiba} />
      <Services cidade={curitiba} />
      <TemplatesShowcase />
      <CaseBetoSection />
      <Testimonials cidade={curitiba} />
      <LighthouseAnalyzer />
      <WhyChooseUs cidade={curitiba} />
      <AnaliseMercado cidade={curitiba} />
      <FAQ cidade={curitiba} />
      <OutrasCidades />
      <Footer cidade={curitiba} />
    </main>
  );
}