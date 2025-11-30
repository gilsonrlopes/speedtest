import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Playfair_Display, Raleway } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 1. SATOSHI (Local) - com ajustes de performance
const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// 2. Outras Fontes (Google) - otimizadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Não é crítica
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Não é crítica
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Não é crítica
});

// 3. Metadata (SEO)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.grsites.com.br"),
  title: {
    default: "GR Sites - Criação de Sites Profissionais e SEO",
    template: "%s | GR Sites",
  },
  description:
    "Criação de sites modernos, rápidos e otimizados para SEO. Transforme visitantes em clientes em Curitiba e Região.",
  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "sites profissionais",
    "SEO",
    "marketing digital",
    "Curitiba",
  ],
  authors: [{ name: "GR Sites", url: "https://www.grsites.com.br" }],
  creator: "Gilson Lopes",
  publisher: "GR Sites",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.grsites.com.br",
    siteName: "GR Sites",
    title: "GR Sites - Criação de Sites Profissionais",
    description: "Sites que aparecem no Google e geram resultados reais.",
    images: [
      {
        url: "/logoshare.png",
        width: 1200,
        height: 630,
        alt: "GR Sites - Agência Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GR Sites - Criação de Sites Profissionais",
    description: "Sites que aparecem no Google e geram resultados reais.",
    images: ["/logoshare.png"],
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
  verification: {
    google: "PpUXY4s2uqlvGrwI6kzuK0Ti5zvx_XcfheSlqhI8S-g",
  },
};

// Google Tag Manager ID
const GTM_ID = "GTM-KLJWTMN6";

// Schema JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GR Sites",
  url: "https://www.grsites.com.br/",
  logo: "https://www.grsites.com.br/Logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-41-99937-2194",
    contactType: "Sales",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://www.instagram.com/gr.sites"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch e Preconnect */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* CSS Crítico Inline - evita render blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS - carrega antes do CSS externo */
              body { 
                margin: 0; 
                padding: 0; 
                background: #000;
                color: #fff;
              }
              
              /* Otimização LCP - reserva espaço para imagem */
              img[fetchpriority="high"] { 
                content-visibility: auto;
                contain-intrinsic-size: 375px 600px;
              }
              
              /* Previne CLS */
              .hero-container {
                min-height: 100vh;
                position: relative;
              }
            `,
          }}
        />

        {/* Preload imagem LCP mobile com fetchpriority */}
        <link
          rel="preload"
          as="image"
          href="/hero01mob.avif"
          type="image/avif"
          media="(max-width: 767px)"
          fetchPriority="high"
        />

        {/* Preload imagem LCP desktop */}
        <link
          rel="preload"
          as="image"
          href="/herolp01.webp"
          type="image/webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      </head>

      <body
        suppressHydrationWarning
        className={`
          ${satoshi.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          ${playfair.variable}
          ${raleway.variable}
          antialiased font-sans bg-black
        `}
      >
        {/* NOSCRIPT GTM */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}

        {/* Vercel Insights (somente produção) */}
        {process.env.NODE_ENV === "production" && <SpeedInsights />}

        {/* GTM com strategy lazyOnload - não bloqueia renderização */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Schema JSON-LD */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}