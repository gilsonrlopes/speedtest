'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Rocket, Code, Globe, BarChart3, Settings } from 'lucide-react';

interface Cidade {
  nome: string;
}

interface WhyChooseUsProps {
  cidade: Cidade;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ cidade }) => {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [activeDiffIndex, setActiveDiffIndex] = useState(0);
  const [activeCompIndex, setActiveCompIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>, setIndex: (i: number) => void) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setIndex(index);
  };

  const stats = [
    {
      icon: Code,
      number: '50+',
      label: 'Clientes Satisfeitos',
      description: `Empresários em ${cidade.nome} e RMC`,
    },
    {
      icon: Zap,
      number: '3x',
      label: 'Mais Rápido',
      description: 'Que sites WordPress',
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Taxa de Satisfação',
      description: 'Clientes recomendam',
    },
    {
      icon: Rocket,
      number: '7',
      label: 'Dias Úteis',
      description: 'Entrega profissional',
    },
  ];

  const differentials = [
    {
      icon: Zap,
      title: 'Tecnologia Enterprise',
      description: 'Usamos Next.js e React, as mesmas tecnologias da Netflix, Uber e Nike. Seu site rápido, seguro e profissional.',
      tag: 'Performance'
    },
    {
      icon: Globe,
      title: 'Infraestrutura Global',
      description: 'Hospedagem com CDN mundial. Seu site carrega instantaneamente em qualquer lugar do Brasil.',
      tag: 'Velocidade'
    },
    {
      icon: BarChart3,
      title: 'Ecossistema Google Completo',
      description: 'Google Business Profile, Analytics, Tag Manager, Search Console. Rastreamento total de resultados.',
      tag: 'Resultados'
    },
    {
      icon: Settings,
      title: 'SEO Técnico Avançado',
      description: 'Core Web Vitals otimizados, Schema Markup, sitemap automático. Seu site pronto para rankear.',
      tag: 'Posicionamento'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-5 py-2 mb-6">
            <Rocket className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-sans">Tecnologia de Ponta</span>
          </div>

          <h2 className="font-satoshi font-semibold text-4xl sm:text-5xl text-white mb-6">
            O Que Nos Torna Diferentes
          </h2>
          
          <p className="no-orphans max-w-[34rem] font-sans text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Não somos apenas criadores de site. Somos especialistas em{' '}
            <span className="text-white font-medium">tecnologia enterprise</span> para negócios locais em {cidade.nome}.
          </p>
        </motion.div>

        {/* 1. STATS SECTION */}
        <div className="mb-20">
          <div className="-mx-6 md:mx-0">
            <div 
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 scroll-smooth px-6 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={(e) => handleScroll(e, setActiveStatIndex)}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full md:w-auto snap-center flex-shrink-0 group relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="mb-4 w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="font-satoshi font-bold text-4xl text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="font-satoshi font-semibold text-base text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <p className="font-sans text-sm text-gray-500">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Dots Stats */}
          <div className="flex md:hidden justify-center gap-2 mt-2">
            {stats.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeStatIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-700'}`} />
            ))}
          </div>
        </div>

        {/* 2. DIFFERENTIALS SECTION */}
        <div className="mb-20">
          <div className="-mx-6 md:mx-0">
            <div 
              className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 scroll-smooth px-6 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={(e) => handleScroll(e, setActiveDiffIndex)}
            >
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full md:w-auto snap-center flex-shrink-0 group relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="absolute top-6 right-6">
                    <span className="text-xs font-sans text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                      {differential.tag}
                    </span>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <differential.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-satoshi font-semibold text-xl text-white mb-3">
                        {differential.title}
                      </h3>
                      <p className="font-sans text-gray-400 leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Dots Differentials */}
          <div className="flex md:hidden justify-center gap-2 mt-2">
            {differentials.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeDiffIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-700'}`} />
            ))}
          </div>
        </div>

        {/* 3. COMPARISON SECTION */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-satoshi font-semibold text-2xl sm:text-3xl text-white mb-3">
              WordPress vs Next.js
            </h3>
            <p className="font-sans text-gray-400">
              Entenda por que tecnologia faz toda a diferença
            </p>
          </div>

          <div>
            <div className="-mx-6 md:mx-0">
              <div 
                className="flex md:grid md:grid-cols-2 gap-6 md:max-w-5xl md:mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 scroll-smooth px-6 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onScroll={(e) => handleScroll(e, setActiveCompIndex)}
              >
                {/* WordPress Card (VERMELHO) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-8 w-full md:w-auto flex-shrink-0 snap-center"
                >
                  <div className="flex items-center gap-3 mb-8">
                    {/* BOLINHA VERMELHA (Sinal de Alerta) */}
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-red-500 animate-ping opacity-75"></div>
                    </div>
                    
                    <h4 className="font-satoshi font-semibold text-xl text-white">WordPress Comum</h4>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">Lento e pesado</p>
                        <p className="font-sans text-gray-500 text-xs">Carrega em 3-5 segundos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">Vulnerável</p>
                        <p className="font-sans text-gray-500 text-xs">Requer atualizações constantes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">SEO básico</p>
                        <p className="font-sans text-gray-500 text-xs">Depende de plugins genéricos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">Hospedagem instável</p>
                        <p className="font-sans text-gray-500 text-xs">Site pode sair do ar</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Next.js Card (VERDE) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-b from-gray-900 to-black border border-blue-400/30 rounded-2xl p-8 w-full md:w-auto flex-shrink-0 snap-center"
                >
                  <div className="flex items-center gap-3 mb-8">
                    {/* BOLINHA VERDE (Sinal de Aprovado) */}
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                    <h4 className="font-satoshi font-semibold text-xl text-white">Next.js GR Sites</h4>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">Ultra rápido</p>
                        <p className="font-sans text-gray-500 text-xs">Carrega em menos de 1 segundo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">Máxima segurança</p>
                        <p className="font-sans text-gray-500 text-xs">Mesmo nível de Netflix e Uber</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">SEO técnico avançado</p>
                        <p className="font-sans text-gray-500 text-xs">Otimizado para ranquear</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-sans text-gray-300 text-sm font-medium mb-1">Infraestrutura global</p>
                        <p className="font-sans text-gray-500 text-xs">99.9% uptime garantido</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Dots Comparison */}
            <div className="flex md:hidden justify-center gap-2 mt-2">
              {[0, 1].map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeCompIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-700'}`} />
              ))}
            </div>
          </div>

          {/* Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-400/20 rounded-2xl px-8 py-6 md:max-w-4xl md:mx-auto"
          >
            <p className="font-sans text-gray-300 text-sm">
              <span className="font-medium text-white">Usamos a mesma tecnologia usada por:</span> Netflix • Uber • Nike • TikTok • Twitch
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;