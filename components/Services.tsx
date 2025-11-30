'use client';

import React, { useState } from 'react';
import { Zap, TrendingUp, Rocket, Layout, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface Cidade {
  nome: string;
}

interface ServicesProps {
  cidade: Cidade;
}

const Services: React.FC<ServicesProps> = ({ cidade }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      icon: Zap,
      title: "Site Presença Digital",
      tagline: "Pare de Perder Clientes",
      description: "Seu concorrente aparece no Google e você não? Esse site coloca seu negócio no mapa digital.",
      pain: "Clientes não te encontram online",
      solution: "Apareça quando procurarem por você",
      features: [
        "Seu negócio visível 24/7",
        "Clientes te acham no Google",
        "Formulário que gera contatos",
        "Site rápido em qualquer celular"
      ],
      gradient: "from-cyan-500 to-blue-500",
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Site Gerador de Clientes",
      tagline: "Transforme Visitas em Vendas",
      description: "Mais que bonito: um site que convence visitantes a virarem seus clientes automaticamente.",
      pain: "Site não gera vendas",
      solution: "Máquina automática de captação",
      features: [
        "Aparece em TODAS as buscas locais",
        "Textos que convencem e vendem",
        "Rastreamento de cada visitante",
        "Descubra de onde vêm seus clientes"
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      icon: Rocket,
      title: "Loja Virtual Completa",
      tagline: "Venda Enquanto Dorme",
      description: "Seu e-commerce funcionando 24h: receba pedidos, pagamentos e venda sem limites.",
      pain: "Vendas limitadas ao horário físico",
      solution: "Fature sem parar, automaticamente",
      features: [
        "Venda 24h sem funcionários",
        "Receba por cartão e PIX",
        "Controle estoque automaticamente",
        "Clientes compram em 3 cliques"
      ],
      gradient: "from-orange-500 to-red-500",
      popular: false
    },
    {
      icon: Layout,
      title: "Landing Page Conversora",
      tagline: "Campanhas que Convertem",
      description: "Página focada em uma única ação: capturar leads ou vender. Perfeita para anúncios e campanhas.",
      pain: "Anúncios gastam e não convertem",
      solution: "Cada visitante vira oportunidade de venda",
      features: [
        "100% focada em conversão",
        "Integra com suas campanhas",
        "Formulários otimizados",
        "Acompanhe cada resultado"
      ],
      gradient: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const whatsappUrlBase = `https://wa.me/5541999372194?text=Olá, quero saber mais sobre`;

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // ✅ Touch events para mobile (substituindo drag do Framer)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-5 py-2 mb-6">
            <Rocket className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-sans">Soluções Sob Medida</span>
          </div>

          <h2 className="font-satoshi font-semibold text-4xl sm:text-5xl text-white mb-6">
            Escolha Seu Nível de Impacto
          </h2>

          <p className="text-pretty font-sans text-lg text-gray-400 mx-auto leading-relaxed">
            De presença básica a <span className="text-white font-medium">máquina de vendas</span>: escolha o site ideal para{' '}
            <span className="text-white font-medium">{cidade.nome}</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Desktop Carousel */}
          <div className="hidden md:block relative h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {services.map((service, index) => {
                const diff = ((index - activeIndex + services.length) % services.length);
                const adjustedDiff = diff > services.length / 2 ? diff - services.length : diff;
                
                const isActive = index === activeIndex;
                const isAdjacent = Math.abs(adjustedDiff) === 1;
                const isVisible = isActive || isAdjacent;

                // ✅ Posicionamento com CSS puro (sem Framer Motion)
                const getPosition = () => {
                  if (adjustedDiff === 0) return { x: 0, scale: 1, opacity: 1, zIndex: 30 };
                  if (adjustedDiff === 1) return { x: 320, scale: 0.85, opacity: 0.6, zIndex: 20 };
                  if (adjustedDiff === -1) return { x: -320, scale: 0.85, opacity: 0.6, zIndex: 20 };
                  return { x: adjustedDiff > 0 ? 500 : -500, scale: 0.7, opacity: 0, zIndex: 10 };
                };

                const position = getPosition();

                return (
                  <div
                    key={index}
                    className="absolute w-[350px] transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${position.x}px) scale(${position.scale})`,
                      opacity: isVisible ? position.opacity : 0,
                      zIndex: position.zIndex,
                      pointerEvents: isActive ? 'auto' : 'none',
                      visibility: isVisible ? 'visible' : 'hidden'
                    }}
                  >
                    <ServiceCard
                      service={service}
                      isActive={isActive}
                      cidade={cidade}
                      whatsappUrlBase={whatsappUrlBase}
                    />
                  </div>
                );
              })}
            </div>

            {/* Nav Buttons Desktop */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-4 z-50">
              <button
                onClick={handlePrev}
                disabled={isTransitioning}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                aria-label="Serviço anterior"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                disabled={isTransitioning}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                aria-label="Próximo serviço"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <ServiceCard
                service={services[activeIndex]}
                isActive={true}
                cidade={cidade}
                whatsappUrlBase={whatsappUrlBase}
                mobile={true}
              />
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <ChevronLeft className="h-5 w-5 text-gray-600 animate-pulse" />
              <span className="text-xs text-gray-500 font-sans">Arraste para ver mais</span>
              <ChevronRight className="h-5 w-5 text-gray-600 animate-pulse" />
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveIndex(idx);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/20 hover:bg-white/40 w-2'
                }`}
                aria-label={`Ir para serviço ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ CARD COMPONENT (SEM FRAMER MOTION)
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  pain: string;
  solution: string;
  features: string[];
  gradient: string;
  popular: boolean;
}

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  cidade: Cidade;
  whatsappUrlBase: string;
  mobile?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive, cidade, whatsappUrlBase, mobile = false }) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-gray-900 to-black border rounded-2xl p-8 transition-all duration-500 
        ${
          isActive
            ? 'border-blue-400/60 shadow-[0_0_25px_rgba(56,189,248,0.35)] scale-100 opacity-100'
            : 'border-white/10 scale-95 opacity-60'
        }
        ${mobile ? 'max-w-sm mx-auto' : ''}
      `}
    >
      {/* Badge */}
      {service.popular && isActive && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-satoshi font-semibold px-4 py-1.5 rounded-full shadow-md shadow-blue-500/30">
            MAIS ESCOLHIDO
          </div>
        </div>
      )}

      <div className={`w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition-transform ${isActive ? 'scale-110' : 'scale-100'}`}>
        <service.icon className="h-8 w-8 text-white" />
      </div>

      <div className="mb-6">
        <div className="text-xs font-sans text-gray-500 mb-2">{service.tagline}</div>
        <h3 className="font-satoshi font-bold text-2xl text-white mb-3">{service.title}</h3>
        <p className="font-sans text-sm text-gray-400 leading-relaxed">{service.description}</p>
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-red-400/60 text-lg leading-none">×</span>
          <p className="text-sm font-sans text-gray-500 line-through">{service.pain}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-green-400 text-lg leading-none">✓</span>
          <p className="text-sm font-sans text-white font-medium">{service.solution}</p>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm font-sans text-gray-400">
            <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`${whatsappUrlBase} ${service.title} em ${cidade.nome}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-3 rounded-full font-satoshi font-semibold transition-all ${
          isActive
            ? `bg-gradient-to-r ${service.gradient} text-white hover:scale-105 shadow-lg shadow-blue-500/30`
            : 'bg-white/5 text-gray-400 border border-white/10'
        }`}
      >
        {isActive ? 'Quero Este Agora' : 'Ver Detalhes'}
      </a>
    </div>
  );
};

export default Services;