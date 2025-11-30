"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ArrowRight } from "lucide-react";

interface Cidade {
  slug: string;
  nome: string;
  populacao: number;
}

const CIDADES: Cidade[] = [
  {
    slug: "sao-jose-dos-pinhais",
    nome: "São José dos Pinhais",
    populacao: 345644,
  },
  { slug: "colombo", nome: "Colombo", populacao: 246468 },
  { slug: "pinhais", nome: "Pinhais", populacao: 134662 },
  { slug: "araucaria", nome: "Araucária", populacao: 144967 },
  { slug: "fazenda-rio-grande", nome: "Fazenda Rio Grande", populacao: 161506 },
  { slug: "campo-largo", nome: "Campo Largo", populacao: 132960 },
  {
    slug: "almirante-tamandaré",
    nome: "Almirante Tamandaré",
    populacao: 121601,
  },
  { slug: "piraquara", nome: "Piraquara", populacao: 112270 },
  { slug: "quatro-barras", nome: "Quatro Barras", populacao: 23380 },
  {
    slug: "campina-grande-do-sul",
    nome: "Campina Grande do Sul",
    populacao: 43050,
  },
];

const OutrasCidades: React.FC = () => {
  // Duplica as cidades para criar loop infinito
  const cidadesDuplicadas = [...CIDADES, ...CIDADES];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-5 py-2 mb-6">
            <MapPin className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-sans">
              Atendimento Regional
            </span>
          </div>

          <h2 className="font-satoshi font-semibold text-4xl sm:text-5xl text-white mb-6">
            Criação de Sites na
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Região Metropolitana
            </span>
          </h2>

          <p className="no-orphans max-w-[34rem] font-sans text-lg text-gray-400 mx-auto leading-relaxed">
            Atendemos toda a{" "}
            <span className="text-white font-medium">RMC de Curitiba</span> com
            sites profissionais que aparecem no Google
          </p>
        </motion.div>

        {/* Auto-scroll no Mobile / Grid no Desktop */}
        <div className="relative">
          {/* Mobile: Auto Scroll */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1800], // Ajuste baseado no tamanho dos cards
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {cidadesDuplicadas.map((cidade, index) => (
                <a
                  key={`${cidade.slug}-${index}`}
                  href={`/criacao-de-sites/${cidade.slug}`}
                  className="group relative flex-shrink-0 w-[160px] bg-gray-900/40 border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Borda de Energia */}
                  <div className="absolute inset-0 -z-10 p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden blur-[1px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-border-flow rounded-2xl" />
                  </div>

                  {/* Ícone com Glow Suave */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_-5px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                      <MapPin className="h-6 w-6 text-blue-400 group-hover:text-purple-300 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Nome da Cidade */}
                  <h3 className="font-satoshi font-semibold text-base text-gray-200 text-center mb-2 group-hover:text-white transition-colors duration-300 line-clamp-2 min-h-[3rem] flex items-center justify-center">
                    {cidade.nome}
                  </h3>

                  {/* População */}
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mb-3 group-hover:text-gray-400 transition-colors">
                    <Users className="h-3 w-3" />
                    <span className="font-sans">
                      {cidade.populacao.toLocaleString("pt-BR")}
                    </span>
                  </div>

                  {/* CTA Sutil */}
                  <div className="flex items-center justify-center gap-1 text-xs text-purple-400/80 font-satoshi font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span>Ver Página</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Desktop: Grid com Hover Effect */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-6">
            {CIDADES.map((cidade, index) => (
              <motion.a
                key={cidade.slug}
                href={`/criacao-de-sites/${cidade.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gray-900/40 border border-white/5 rounded-2xl p-6 transition-all duration-500 overflow-hidden"
              >
                {/* Borda de Energia */}
                <div className="absolute inset-0 -z-10 p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden blur-[1px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-border-flow rounded-2xl" />
                </div>

                {/* Ícone com Glow Suave */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_-5px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                    <MapPin className="h-6 w-6 text-blue-400 group-hover:text-purple-300 transition-colors duration-500" />
                  </div>
                </div>

                {/* Nome da Cidade */}
                <h3 className="font-satoshi font-semibold text-base text-gray-200 text-center mb-2 group-hover:text-white transition-colors duration-300 line-clamp-2 min-h-[3rem] flex items-center justify-center">
                  {cidade.nome}
                </h3>

                {/* População */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mb-3 group-hover:text-gray-400 transition-colors">
                  <Users className="h-3 w-3" />
                  <span className="font-sans">
                    {cidade.populacao.toLocaleString("pt-BR")}
                  </span>
                </div>

                {/* CTA Sutil */}
                <div className="flex items-center justify-center gap-1 text-xs text-purple-400/80 font-satoshi font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span>Ver Página</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA Adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-gray-400 mb-6">
            Não encontrou sua cidade?{" "}
            <span className="text-white font-medium">
              Atendemos toda a região!
            </span>
          </p>
          <a
            href="https://wa.me/5541999372194?text=Olá! Quero um site profissional"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-satoshi font-medium text-white bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 hover:border-purple-500/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
          >
            Falar com Especialista
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes border-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OutrasCidades;
