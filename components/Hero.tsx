'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Cidade {
  nome: string;
}

interface HeroProps {
  cidade: Cidade;
}

const slides = [
  {
    image: "/herolp01.webp",
    title: "Criação de Sites em",
    subtitle: "Seu concorrente aparece no Google. Você não.",
    description: "Colocamos seu Site na primeira página do Google."
  },
  {
    image: "/hs06.webp",
    title: "Sua Presença Digital em",
    subtitle: "Clientes buscam serviços no Google. Não no Instagram",
    description: "Com um site otimizado, você aparece para quem realmente procura."
  },
  {
    image: "/chart01.webp",
    title: "Domine o Google em",
    subtitle: "Primeira página em 90 dias. Com estratégia, não mágica.",
    description: "SEO estratégico que coloca você acima da concorrência no Google."
  }
];

const Hero: React.FC<HeroProps> = ({ cidade }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const isLongName = cidade.nome.length > 12;
  const totalSlides = slides.length;

  // ✅ CORREÇÃO 1: Hidratação sem bloquear renderização
  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // ✅ CORREÇÃO 2: REMOVIDO "return null" - Hero sempre renderiza
  // ✅ SSR renderiza versão desktop por padrão
  
  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
    >
      <ul className="hero-slider">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          const isFirst = index === 0;

          // ✅ CORREÇÃO 3: Renderização condicional inteligente
          // Mobile: só slide ativo | Desktop: primeiro + ativo
          const shouldRender = isMobile 
            ? isActive 
            : (isActive || isFirst);

          return (
            <li
              key={index} // ✅ Key estável (não usa currentSlide)
              className={`slider-item ${isActive ? "active" : ""}`}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 1s ease-in-out',
                zIndex: isActive ? 10 : 1
              }}
            >
              {/* ✅ CORREÇÃO 4: Só renderiza imagem necessária */}
              {shouldRender && (
                <div className="absolute inset-0 z-0">
                  <div 
                    className="relative w-full h-full"
                    style={{
                      animation: isActive ? 'smoothScale 8s ease-out forwards' : 'none'
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={isFirst} // ✅ Só primeira com priority
                      fetchPriority={isFirst ? "high" : "auto"} // ✅ ADICIONADO
                      sizes="100vw"
                      quality={isMobile ? 75 : 85} // ✅ Qualidade adaptativa
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
                </div>
              )}

              {/* ✅ CORREÇÃO 5: Conteúdo sem Framer Motion (CSS puro) */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
                  
                  <h1 
                    className={`
                      slider-reveal
                      font-satoshi font-bold text-white tracking-tight leading-[1.15] drop-shadow-2xl text-balance
                    `}
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
                      bg-clip-text 
                      ${isLongName ? 'text-3xl sm:text-5xl' : 'text-4xl sm:text-5xl'} 
                      md:text-7xl text-white
                    `}>
                      {cidade.nome}
                    </span>
                  </h1>

                  <p 
                    className="slider-reveal text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl mx-auto text-balance"
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
                      className="group relative inline-flex items-center justify-center gap-3 bg-white text-black font-bold text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95"
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

      {/* Scroll Indicator */}
      {isClient && (
        <div
          className="absolute bottom-24 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden md:block opacity-0 animate-fade-in"
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div 
              className="w-1 h-2 bg-white/60 rounded-full"
              style={{
                animation: 'scroll-bounce 1.5s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      )}

      {/* ✅ CSS Animations (substituindo Framer Motion) */}
      <style jsx>{`
        @keyframes smoothScale {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
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

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }

        /* ✅ Previne Layout Shift */
        .hero-slider {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slider-item {
          will-change: opacity;
        }
      `}</style>
    </section>
  );
};

export default Hero;