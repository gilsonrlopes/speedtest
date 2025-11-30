'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Users, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
// Importe a interface correta
import { Cidade } from '@/lib/cidades'; 

interface AnaliseMercadoProps {
  cidade: Cidade;
}

const AnaliseMercado: React.FC<AnaliseMercadoProps> = ({ cidade }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Formatação de números
  const formatNumber = (num: number) => num.toLocaleString('pt-BR');
  
  // Variáveis inteligentes baseadas no SEU novo lib/cidades.ts
  const destaque = cidade.destaque;
  const economia = cidade.economia;
  const bairrosList = cidade.bairrosPrincipais 
    ? cidade.bairrosPrincipais.slice(0, 4).join(', ') // Pega só os 4 primeiros para não ficar gigante
    : 'toda a região central e bairros vizinhos';
    
  // Gentílico (Se não tiver no JSON, usa "moradores")
  // Dica: Adicione o campo 'gentilico' no seu JSON se quiser ainda mais precisão, 
  // senão usamos "habitantes" que funciona bem.
  const gentilico = 'habitantes'; 

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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-5 py-2 mb-6">
            <BarChart3 className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-gray-300 font-sans">Análise de Mercado</span>
          </div>

          <h2 className="font-satoshi font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Criação de Sites em {cidade.nome} e RMC
          </h2>
        </motion.div>

        {/* Conteúdo Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >

          <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
  Para os {gentilico} de {cidade.nome}, investir em presença digital...
</p>
          {/* TEXTO HIPER-PERSONALIZADO COM SEUS DADOS NOVOS */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 sm:p-8 mb-12 relative overflow-hidden">
            
            <motion.div 
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 160 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-6">
                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                  Se você busca <span className="text-white font-semibold">Criação de Sites em {cidade.nome}</span> com foco em resultados, encontrou o parceiro certo. A GR Sites compreende a dinâmica única deste município. Com uma população de <span className="text-white font-semibold">{formatNumber(cidade.populacao)}</span> habitantes, {cidade.nome} se consolida como <span className="text-white font-semibold">{destaque}</span>.
                </p>

                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                  A economia local é forte em <span className="text-white font-semibold">{economia}</span>. As empresas que atuam em {cidade.nome} não podem mais depender apenas do boca a boca; a maior parte dos novos clientes busca serviços no Google. É por isso que cada projeto de <span className="text-white font-semibold">Criação de sites em {cidade.nome}</span> é construído com a abordagem de SEO local.
                </p>

                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                  Segundo dados recentes, existem cerca de <span className="text-white font-semibold">{formatNumber(cidade.empresas)}+</span> empresas ativas na região, competindo pela atenção dos consumidores. Utilizamos tecnologias de ponta como o Next.js para garantir que seu site carregue instantaneamente, seja em conexões rápidas no centro ou em áreas mais afastadas.
                </p>

                <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
                  Nosso foco em <span className="text-white font-semibold">SEO Programático</span> garante que sua empresa rankeie não apenas para o termo genérico, mas que atinja clientes em áreas estratégicas como {bairrosList}. Ao escolher a GR Sites, você posiciona sua marca como líder no mercado de {cidade.nome}.
                </p>
              </div>
            </motion.div>

            {/* Fade Overlay */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Botão Toggle */}
            <div className={`relative z-10 mt-4 flex justify-center ${isExpanded ? 'pt-4' : ''}`}>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all text-sm font-medium"
              >
                {isExpanded ? (
                  <>Ler Menos <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Ler Análise de {cidade.nome} <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /></>
                )}
              </button>
            </div>
          </div>

          {/* Cards (Iguais ao anterior - Sem alteração) */}
           <div 
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Card 1 - População */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group min-w-[85vw] md:min-w-0 snap-center bg-gradient-to-b from-purple-900/20 to-purple-900/5 border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Users className="h-8 w-8 text-purple-400 transition-transform group-hover:scale-110" />
              </div>
              <div className="font-satoshi font-bold text-3xl text-white mb-2">
                {formatNumber(cidade.populacao)}
              </div>
              <div className="font-sans text-sm text-gray-400">
                Habitantes em {cidade.nome}
              </div>
            </motion.div>

            {/* Card 2 - Empresas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group min-w-[85vw] md:min-w-0 snap-center bg-gradient-to-b from-purple-900/20 to-purple-900/5 border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <BarChart3 className="h-8 w-8 text-purple-400 transition-transform group-hover:scale-110" />
              </div>
              <div className="font-satoshi font-bold text-3xl text-white mb-2">
                {formatNumber(cidade.empresas)}+
              </div>
              <div className="font-sans text-sm text-gray-400">
                Empresas Ativas
              </div>
            </motion.div>

            {/* Card 3 - Crescimento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group min-w-[85vw] md:min-w-0 snap-center bg-gradient-to-b from-purple-900/20 to-purple-900/5 border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <TrendingUp className="h-8 w-8 text-purple-400 transition-transform group-hover:scale-110" />
              </div>
              <div className="font-satoshi font-bold text-3xl text-white mb-2">
                Alto
              </div>
              <div className="font-sans text-sm text-gray-400">
                Crescimento Focado
              </div>
            </motion.div>
          </div>
          
           {/* Dots do Carrossel (Apenas Mobile) */}
          <div className="flex md:hidden justify-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AnaliseMercado;