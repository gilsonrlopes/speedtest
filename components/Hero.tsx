'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

// --- MOCK DO NEXT/IMAGE PARA O PREVIEW FUNCIONAR ---
// ⚠️ NO SEU PROJETO REAL: Delete este bloco e use: import Image from 'next/image';
const Image = ({ src, alt, fill, priority, sizes, quality, className, loading, fetchPriority, unoptimized, ...props }: any) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      // Simulando o comportamento do 'fill' do Next.js
      style={fill ? { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        inset: 0, 
        objectFit: 'cover' 
      } : {}}
      {...props}
    />
  );
};
// ---------------------------------------------------

interface Cidade {
  nome: string;
}

interface HeroProps {
  cidade?: Cidade; // Opcional para o preview não quebrar
}

// Dados simulados para o preview
const defaultCidade: Cidade = { nome: "Curitiba" };

const slides = [
  {
    image: "/herolp01.webp",
    imageMobile: "/hero01mob.avif",
    title: "Criação de Sites em",
    subtitle: "Seu concorrente aparece no Google. Você não.",
    description: "Colocamos seu Site na primeira página do Google."
  },
  {
    image: "/hs06.webp",
    imageMobile: "/hero02mob.avif",
    title: "Sua Presença Digital em",
    subtitle: "Clientes buscam serviços no Google. Não no Instagram",
    description: "Com um site otimizado, você aparece para quem realmente procura."
  },
  {
    image: "/chart01.webp",
    imageMobile: "/hero03mob.avif",
    title: "Domine o Google em",
    subtitle: "Primeira página em 90 dias. Com estratégia, não mágica.",
    description: "SEO estratégico que coloca você acima da concorrência no Google."
  }
];

const Hero: React.FC<HeroProps> = ({ cidade = defaultCidade }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Removemos o estado isMobile para usar CSS puro (Art Direction)
  // Isso resolve o problema de LCP no Google Speed Test

  const isLongName = cidade.nome.length > 12;
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const whatsappLink = `https://wa.me/5541999372194?text=Olá! Quero um site profissional em ${encodeURIComponent(cidade.nome)}`;

  const handleCTA = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
    >
      <ul className="hero-slider block m-0 p-0 list-none h-full w-full">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          const isFirst = index === 0;

          // Renderizamos se for ativo ou se for o primeiro (para garantir LCP rápido)
          const shouldRender = isActive || isFirst;

          if (!shouldRender) return null;

          return (
            <li
              key={index}
              className={`slider-item absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 visible z-10" : "opacity-0 invisible z-0"}`}
            >
              <div className="absolute inset-0 z-0">
                <div 
                  className="relative w-full h-full"
                  style={{
                    animation: isActive ? 'smoothScale 8s ease-out forwards' : 'none'
                  }}
                >
                  {/* --- OTIMIZAÇÃO CORE WEB VITALS --- */}
                  {/* Ao invés de usar JS para decidir qual imagem mostrar, usamos CSS (hidden/block).
                     O navegador baixa a imagem correta com base no display.
                     Isso elimina o atraso de hidratação do React.
                  */}

                  {/* VERSÃO MOBILE (Visível apenas em telas < 768px) */}
                  {/* Adicionado bg-gray-900 para evitar flash branco se a imagem demorar */}
                  <div className="block md:hidden w-full h-full relative bg-gray-900">
                    <Image
                      src={slide.imageMobile}
                      alt={slide.title}
                      fill
                      priority={isFirst}
                      sizes="100vw"
                      quality={75}
                      className="object-cover"
                      unoptimized // ✅ IMPORTANTE: Garante que o AVIF carregue direto, sem reprocessamento do Next.js
                    />
                  </div>

                  {/* VERSÃO DESKTOP (Visível apenas em telas >= 768px) */}
                  <div className="hidden md:block w-full h-full relative bg-gray-900">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={isFirst}
                      sizes="100vw"
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
              </div>

              {/* Conteúdo de Texto */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
                  
                  <h1 
                    className="slider-reveal font-sans font-bold text-white tracking-tight leading-[1.15] drop-shadow-2xl"
                    style={{ animationDelay: isActive ? '0.2s' : '0s' }}
                  >
                    <span className={`
                      md:block md:mb-2
                      ${isLongName ? 'text-3xl sm:text-5xl' : 'text-4xl sm:text-5xl'} 
                      md:text-7xl
                    `}>
                      {slide.title}{" "}
                      <span className="md:hidden"> </span>
                    </span>
                    
                    <span className={`
                      md:block 
                      text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300
                      ${isLongName ? 'text-3xl sm:text-5xl' : 'text-4xl sm:text-5xl'} 
                      md:text-7xl
                    `}>
                      {cidade.nome}
                    </span>
                  </h1>

                  <p 
                    className="slider-reveal text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl mx-auto"
                    style={{ animationDelay: isActive ? '0.4s' : '0s' }}
                  >
                    {slide.subtitle}
                  </p>

                  <p 
                    className="slider-reveal text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed hidden sm:block"
                    style={{ animationDelay: isActive ? '0.5s' : '0s' }}
                  >
                    {slide.description}
                  </p>

                  <div 
                    className="slider-reveal pt-4"
                    style={{ animationDelay: isActive ? '0.6s' : '0s' }}
                  >
                    <button
                      onClick={handleCTA}
                      className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-bold text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                      aria-label="Solicitar orçamento via WhatsApp"
                    >
                      Quero Meu Site Agora
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="mt-4 text-xs sm:text-sm text-gray-500 font-medium">
                      ✓ Sem compromisso • ✓ Resposta rápida
                    </p>
                  </div>

                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Dots de Navegação */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? "w-12 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes smoothScale {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        .slider-reveal {
          animation: sliderReveal 0.8s ease forwards;
          opacity: 0;
        }

        @keyframes sliderReveal {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;