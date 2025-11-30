'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, TrendingUp, Zap, Eye, Shield, AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';

interface ScoreData {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
}

const LighthouseAnalyzer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState<ScoreData | null>(null);
  const [error, setError] = useState('');

  const analyzeWebsite = async () => {
    if (!url) {
      setError('Digite uma URL válida');
      return;
    }

    setLoading(true);
    setError('');
    setScores(null);

    try {
      const apiUrl = `/api/pagespeed?url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        setError('Erro ao analisar o site. Verifique a URL.');
        setLoading(false);
        return;
      }

      const lighthouseResult = data.lighthouseResult;
      setScores({
        performance: Math.round(lighthouseResult.categories.performance.score * 100),
        seo: Math.round(lighthouseResult.categories.seo.score * 100),
        accessibility: Math.round(lighthouseResult.categories.accessibility.score * 100),
        bestPractices: Math.round(lighthouseResult.categories['best-practices'].score * 100)
      });

    } catch (err) {
      setError('Erro ao conectar com a API. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-white';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreBorder = (score: number) => {
    if (score >= 90) return 'border-blue-400/30';
    if (score >= 50) return 'border-orange-400/30';
    return 'border-red-400/30';
  };

  const scoreItems = scores ? [
    { label: 'Performance', value: scores.performance, icon: Zap },
    { label: 'SEO', value: scores.seo, icon: TrendingUp },
    { label: 'Acessibilidade', value: scores.accessibility, icon: Eye },
    { label: 'Boas Práticas', value: scores.bestPractices, icon: Shield }
  ] : [];

  const averageScore = scores 
    ? Math.round((scores.performance + scores.seo + scores.accessibility + scores.bestPractices) / 4)
    : 0;

  return (
    <section className="py-20 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-5 py-2 mb-6">
            <Search className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-400 font-sans">Análise Gratuita</span>
          </div>

          <h2 className="font-satoshi font-bold text-4xl sm:text-5xl text-white mb-6">
            Seu Negócio Aparece no Google?
          </h2>
          
          <p className="no-orphans max-w-[32rem] font-sans text-lg text-gray-400 mx-auto leading-relaxed mb-12">
            A maioria dos negócios perde clientes sem saber. Teste seu site agora e descubra se você está entre eles.
          </p>

          

          {/* Benefícios Premium */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, text: "SEO e ranking" },
              { icon: Zap, text: "Velocidade de carregamento" },
              { icon: Shield, text: "Qualidade técnica" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-400 font-sans">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://seusite.com.br"
                className="flex-1 bg-black/50 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder-gray-600 font-sans focus:outline-none focus:border-blue-400/50 transition-colors"
                onKeyPress={(e) => e.key === 'Enter' && analyzeWebsite()}
              />
              <button
                onClick={analyzeWebsite}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-satoshi font-semibold px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Analisar
                  </>
                )}
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="h-4 w-4" />
                {error}
              </motion.div>
            )}
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-600 font-sans">
              Análise 100% gratuita • Sem cadastro • Resultado em segundos
            </p>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {scores && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              {/* Scores Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {scoreItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-slate-900/50 border ${getScoreBorder(item.value)} rounded-2xl p-6 text-center backdrop-blur-sm`}
                  >
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className={`font-satoshi font-bold text-5xl ${getScoreColor(item.value)} mb-2`}>
                      {item.value}
                    </div>
                    <div className="font-sans text-sm text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Diagnóstico */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8 backdrop-blur-sm"
              >
                <div className="text-center mb-8">
                  <h3 className="font-satoshi font-bold text-2xl text-white mb-3">
                    {averageScore < 70 
                      ? "Seu site precisa de atenção urgente"
                      : averageScore < 85
                      ? "Há espaço para melhoria significativa"
                      : "Bom desempenho, mas sempre há como otimizar"}
                  </h3>
                  <p className="text-gray-400 font-sans">
                    {averageScore < 70 
                      ? "Você provavelmente está perdendo clientes para concorrentes"
                      : averageScore < 85
                      ? "Seu site está funcional, mas pode performar melhor"
                      : "Continue melhorando para manter sua vantagem competitiva"}
                  </p>
                </div>

                {/* Comparação */}
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
                  <div className={`bg-slate-800/50 border ${averageScore < 70 ? 'border-red-400/30' : 'border-slate-700'} rounded-xl p-6 text-center`}>
                    <div className="text-gray-500 font-sans text-xs uppercase tracking-wider mb-2">Seu Site</div>
                    <div className={`font-satoshi font-bold text-4xl mb-2 ${averageScore < 70 ? 'text-red-400' : averageScore < 85 ? 'text-orange-400' : 'text-white'}`}>
                      {averageScore}
                    </div>
                    <div className="text-xs text-gray-600 font-sans">Pontuação média</div>
                  </div>
                  <div className="bg-slate-800/50 border border-blue-400/30 rounded-xl p-6 text-center">
                    <div className="text-gray-500 font-sans text-xs uppercase tracking-wider mb-2">Padrão GR Sites</div>
                    <div className="text-white font-satoshi font-bold text-4xl mb-2">99</div>
                    <div className="text-xs text-gray-600 font-sans">Performance premium</div>
                  </div>
                </div>

                {/* CTA Consultoria */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-2xl p-8 text-center">
                  <h4 className="font-satoshi font-bold text-xl text-white mb-3">
                    Consultoria Gratuita de 30 Minutos
                  </h4>
                  
                  <p className="text-gray-400 font-sans text-sm mb-6 max-w-2xl mx-auto">
                    Vamos analisar seu site, Google Meu Negócio e identificar oportunidades de melhoria
                  </p>

                  <div className="grid md:grid-cols-3 gap-3 mb-6 text-left max-w-2xl mx-auto">
                    {[
                      "Auditoria completa de SEO",
                      "Análise Google Meu Negócio",
                      "Plano de ação personalizado"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-sans">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/5541999372194?text=Olá! Analisei meu site (nota ${averageScore}) e quero a consultoria gratuita`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-satoshi font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Agendar Consultoria Gratuita
                    <ArrowRight className="h-5 w-5" />
                  </a>

                  <p className="text-xs text-gray-600 font-sans mt-4">
                    Vagas limitadas • Sem compromisso
                  </p>
                </div>
              </motion.div>

              {/* O que vamos descobrir */}
              {averageScore < 85 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <h4 className="font-satoshi font-semibold text-lg text-white mb-6 text-center">
                    Na consultoria, vamos descobrir:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Por que seu site não aparece nas buscas",
                      "Como concorrentes estão na sua frente",
                      "Erros técnicos que afastam clientes",
                      "Oportunidades de palavras-chave",
                      "Melhorias no Google Meu Negócio",
                      "Estratégia para dominar buscas locais"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence> 
      </div>
    </section>
  );
};

export default LighthouseAnalyzer;