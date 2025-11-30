// app/criacao-de-sites/[slug]/page.tsx

import { CIDADES } from "@/lib/cidades";
import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

// Componentes
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TemplatesShowcase from "@/components/TemplatesShowcase";
import CaseBetoSection from "@/components/CaseBetoSection";
import Testimonials from "@/components/Testimonials";
import LighthouseAnalyzer from "@/components/LighthouseAnalyzer";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnaliseMercado from "@/components/AnaliseMercado";
import FAQ from "@/components/FAQ";
import OutrasCidades from "@/components/OutrasCidades";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CIDADES.map((cidade) => ({
    slug: cidade.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cidade = CIDADES.find((c) => c.slug === slug);

  if (!cidade) {
    return {
      title: "Criação de Sites Profissionais | Apareça no Google",
      description:
        "Agência especializada em sites de alta performance e SEO Local.",
    };
  }

  const titulo = `Criação de Sites em ${cidade.nome} | Agência Especializada em SEO`;
  const descricao = `Busca Criação de Sites em ${cidade.nome}? Sua empresa merece estar na 1ª página do Google. Sites rápidos, modernos e focados em resultados. Fale conosco!`;
  const urlImagem = `https://www.grsites.com.br/logoshare.png`;

  return {
    title: titulo,
    description: descricao,
    keywords: [
      `criação de sites em ${cidade.nome}`,
      `agência de sites ${cidade.nome}`,
      `web design ${cidade.nome}`,
      `fazer site em ${cidade.nome}`,
      `montar site profissional ${cidade.nome}`,
      `desenvolvimento de sites ${cidade.nome}`,
      `site para empresas ${cidade.nome}`,
      `melhor empresa de sites em ${cidade.nome}`,
      `criação de landing page ${cidade.nome}`,
      `otimização de sites seo ${cidade.nome}`,
      "GR Sites",
    ],
    openGraph: {
      title: titulo,
      description: descricao,
      url: `https://www.grsites.com.br/criacao-de-sites/${cidade.slug}`,
      type: "website",
      locale: "pt_BR",
      siteName: "GR Sites",
      images: [
        {
          url: urlImagem,
          width: 1200,
          height: 630,
          alt: `Criação de Sites Profissionais em ${cidade.nome}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descricao,
      images: [urlImagem],
    },
    alternates: {
      canonical: `https://www.grsites.com.br/criacao-de-sites/${cidade.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function CidadePage({ params }: Props) {
  const { slug } = await params;
  const cidade = CIDADES.find((c) => c.slug === slug);

  if (!cidade) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GR Sites",
    image: "https://www.grsites.com.br/logo.png",
    description: `Agência especializada em Criação de Sites e SEO atendendo ${cidade.nome} e região.`,
    url: `https://www.grsites.com.br/criacao-de-sites/${cidade.slug}`,
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
      {
        "@type": "City",
        name: cidade.nome,
        sameAs: `https://pt.wikipedia.org/wiki/${cidade.nome.replace(
          / /g,
          "_"
        )}`,
      },
    ],
    serviceType: [
      "Criação de Sites",
      "Otimização de Sites (SEO)",
      "Desenvolvimento Web",
      "Landing Pages",
    ],
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Criação de Sites",
        item: "https://www.grsites.com.br/criacao-de-sites",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `em ${cidade.nome}`,
        item: `https://www.grsites.com.br/criacao-de-sites/${cidade.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id={`json-ld-business-${cidade.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id={`json-ld-breadcrumb-${cidade.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="afterInteractive"
      />

      {/* 🛑 CHATBASE REMOVIDO DAQUI TAMBÉM! */}

      <Header cidade={cidade} />
      <Hero cidade={cidade} />
      <Services cidade={cidade} />
      <TemplatesShowcase />
      <CaseBetoSection />
      <Testimonials cidade={cidade} />
      <LighthouseAnalyzer />
      <WhyChooseUs cidade={cidade} />
      <AnaliseMercado cidade={cidade} />
      <FAQ cidade={cidade} />
      <OutrasCidades />
      <Footer cidade={cidade} />
    </main>
  );
}
