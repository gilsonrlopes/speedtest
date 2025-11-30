"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin, TrendingUp, ExternalLink } from 'lucide-react';

export default function CaseBetoSection() {
  return (
    <section id="case-beto" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-slate-800/20 to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Case Real
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            De invisível no Google para<br/>
            <span className="text-white">
              +100 bairros dominados
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Como Beto saiu de aparecer só em Pinhais para dominar toda Curitiba e região
          </p>
        </div>

        <div className="mb-16">
          
          {/* Container da Imagem */}
          <div className="relative group">
            <Image 
              src="/coverbeto.webp" 
              alt="Site Beto Montador de Móveis"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy" 
            />
            
            {/* Botão Desktop (Hover) */}
            <div 
              className="hidden md:flex absolute left-0 right-0 justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              style={{ bottom: '220px' }} 
            >
              <a
                href="https://www.betomontadordemoveis.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-2xl hover:bg-gray-100 transition-all"
              >
                Ver Site Completo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Botão Mobile */}
          <div 
            className="md:hidden flex justify-center"
            style={{ marginTop: '40px' }} 
          >
            <a
              href="https://www.betomontadordemoveis.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm rounded-full font-semibold shadow-xl active:scale-95 transition-transform"
            >
              Ver Site Completo
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Montador de Móveis que virou referência em toda região
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed text-center">
              Beto estava <span className="text-white font-medium">invisível no Google</span>. 
              Aparecia apenas quando alguém buscava especificamente em Pinhais. 
              Depois do SEO estratégico da GR Sites, ele passou a aparecer em <span className="text-white font-medium">+100 bairros</span> de Curitiba e região.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">+100</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Bairros</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">1ª</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Página Google</div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/case-beto-montador"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Ver Case Completo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Domínio Geográfico</h3>
            <p className="text-gray-400 leading-relaxed">
              Criamos +100 páginas otimizadas para cada bairro (Batel, Água Verde, Centro, etc.), garantindo que ele seja a 1ª opção onde o cliente estiver.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Performance Máxima</h3>
            <p className="text-gray-400 leading-relaxed">
              Site ultrarrápido que carrega em menos de 1 segundo no celular, garantindo nota máxima no Google e convertendo mais visitas em orçamentos.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}