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
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// 3. Metadata (SEO)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.grsites.com.br"),
  title: {
    default: "GR Sites - Criação de Sites Profissionais e SEO",
    template: "%s | GR Sites",
  },

  icons: {
    icon: '/fav.ico',
    shortcut: '/fav.ico',
    apple: '/fav.ico',
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
  logo: "https://www.grsites.com.br/logo.png",
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

              /* ========== BOTÃO DO CHAT GLASSMORPHISM ========== */
              .chat-button-container {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 9999;
              }
              
              .chat-button {
                position: relative;
                width: 64px;
                height: 64px;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 50%;
                border: 1px solid rgba(255, 255, 255, 0.15);
                box-shadow: 
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  inset 0 1px 1px rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                animation: float 3s ease-in-out infinite;
              }
              
              .chat-button:hover {
                transform: scale(1.1);
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 
                  0 12px 40px rgba(0, 0, 0, 0.5),
                  inset 0 1px 1px rgba(255, 255, 255, 0.15),
                  0 0 0 8px rgba(255, 255, 255, 0.05);
                border-color: rgba(255, 255, 255, 0.25);
              }
              
              .chat-button:active {
                transform: scale(1.05);
              }
              
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
              
              .chat-pulse {
                position: absolute;
                inset: -8px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.05);
                animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
              }
              
              @keyframes pulse-ring {
                0% {
                  transform: scale(0.95);
                  opacity: 1;
                }
                100% {
                  transform: scale(1.3);
                  opacity: 0;
                }
              }
              
              .chat-icon {
                position: relative;
                z-index: 1;
                color: #fff;
                filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
                transition: transform 0.3s ease;
              }
              
              .chat-button:hover .chat-icon {
                transform: scale(1.1);
              }
              
              .chat-badge {
                position: absolute;
                top: -4px;
                right: -4px;
                width: 20px;
                height: 20px;
                background: #ef4444;
                border: 2px solid rgba(0, 0, 0, 0.8);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: 900;
                color: white;
                animation: bounce-badge 2s ease-in-out infinite;
                box-shadow: 0 4px 12px rgba(239, 68, 68, 0.6);
              }
              
              @keyframes bounce-badge {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.15); }
              }
              
              /* ========== MODAL DO CHAT ========== */
              .chat-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(8px);
                z-index: 99999;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 20px;
                animation: fadeIn 0.3s ease;
              }
              
              .chat-modal-overlay.active {
                display: flex;
              }
              
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              
              .chat-modal-content {
                animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              }
              
              @keyframes slideUp {
                from {
                  opacity: 0;
                  transform: translateY(40px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
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

        {/* BOTÃO DO CHAT ANIMADO */}
        <div className="chat-button-container">
          <div className="chat-button" id="chat-button">
            <div className="chat-pulse"></div>
            <div className="chat-pulse" style={{ animationDelay: '0.5s' }}></div>
            <svg 
              className="chat-icon"
              xmlns="http://www.w3.org/2000/svg" 
              width="26" 
              height="26" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="chat-badge">1</div>
          </div>
        </div>

        {/* MODAL DO CHAT */}
        <div className="chat-modal-overlay" id="chat-modal">
          <div className="chat-modal-content" style={{ width: '100%', maxWidth: '800px' }}>
            <iframe
              src="/chat"
              style={{
                width: '100%',
                height: '90vh',
                maxHeight: '700px',
                border: 'none',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              title="Chat GR Sites"
            />
          </div>
        </div>

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

        {/* Script do Chat - Controla abertura/fechamento */}
        <Script
          id="chat-controls"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                const btn = document.getElementById('chat-button');
                const modal = document.getElementById('chat-modal');
                
                if (!btn || !modal) return;
                
                // Abre o modal
                btn.addEventListener('click', function() {
                  modal.classList.add('active');
                  document.body.style.overflow = 'hidden';
                });
                
                // Fecha ao clicar fora
                modal.addEventListener('click', function(e) {
                  if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                  }
                });
                
                // Fecha com ESC
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Escape' && modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                  }
                });
              })();
            `,
          }}
        />

      </body>
    </html>
  );
}