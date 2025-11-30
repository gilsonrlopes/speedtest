"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin, Search, TrendingUp, CheckCircle, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

export default function CaseBetoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Screenshots do Google mostrando posicionamento
  const googleScreenshots = [
    {
      title: "Alphaville Graciosa",
      image: "/betoalphaville.png",
      search: "montador de móveis alphaville graciosa"
    },
    {
      title: "Batel",
      image: "/betobatel.png",
      search: "montador de móveis batel"
    },
    {
      title: "Quatro Barras",
      image: "/betoquatrobarras.png",
      search: "montador de móveis quatro barras"
    },
    {
      title: "Piraquara",
      image: "/betopiraquara.png",
      search: "montador de móveis piraquara"
    },
    {
      title: "Bacacheri",
      image: "/betobacacheri.png",
      search: "montador de móveis bacacheri"
    },
    {
      title: "Centro de Curitiba",
      image: "/betocentro.png",
      search: "montador de móveis centro curitiba"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % googleScreenshots.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + googleScreenshots.length) % googleScreenshots.length);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Case de Sucesso
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-[46rem] mx-auto [text-wrap:balance]">
            Como um montador de móveis de Pinhais passou a dominar +100 bairros no Google
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[42rem] mx-auto [text-wrap:balance]">
            Beto Montagens estava limitado geograficamente. Hoje, ele aparece em mais de 100 bairros de Curitiba e região quando clientes buscam por &quot;montador de móveis&quot;.
          </p>
        </div>
      </section>

      {/* O Desafio */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl mb-6">
              <MapPin className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Desafio</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[36rem] mx-auto [text-wrap:balance]">
              Beto é um montador de móveis profissional com anos de experiência, localizado em Pinhais. 
              Seu maior problema? <span className="text-white font-medium">Invisibilidade no Google.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
              <p className="text-red-400 text-sm font-medium mb-2">Situação inicial</p>
              <p className="text-white [text-wrap:balance]">Aparecia apenas quando buscavam especificamente em Pinhais</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
              <p className="text-red-400 text-sm font-medium mb-2">Problema</p>
              <p className="text-white [text-wrap:balance]">Perdia clientes para concorrentes em outros bairros</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
              <p className="text-red-400 text-sm font-medium mb-2">Dependência</p>
              <p className="text-white [text-wrap:balance]">Só conseguia clientes por indicação ou redes sociais</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Solução: SEO Estratégico</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[36rem] mx-auto [text-wrap:balance]">
              A GR Sites implementou uma estratégia de SEO local focada em criar <span className="text-white font-medium">páginas específicas para cada região</span>, 
              otimizadas para as buscas que seus clientes realmente fazem.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">1 Região = 1 Página Otimizada</h3>
                <p className="text-gray-400 text-sm [text-wrap:balance]">Cada bairro recebeu uma página dedicada com conteúdo específico e URL otimizada</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">SEO On-Page Profissional</h3>
                <p className="text-gray-400 text-sm [text-wrap:balance]">Títulos, meta descriptions, headings e conteúdo otimizados para cada localidade</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">Schema Markup Local</h3>
                <p className="text-gray-400 text-sm [text-wrap:balance]">Google entende exatamente onde Beto atende e o que ele oferece</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">Performance 100/100</h3>
                <p className="text-gray-400 text-sm [text-wrap:balance]">Site ultrarrápido que o Google prioriza nos resultados de busca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados - Grid Desktop / Carousel Mobile */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O Resultado: 1ª Página do Google
            </h2>
            <p className="text-lg text-gray-400 max-w-[36rem] mx-auto [text-wrap:balance]">
              Quando alguém busca por &quot;montador de móveis&quot; + qualquer bairro ou cidade, <span className="text-white font-medium">Beto aparece</span>
            </p>
          </div>

          {/* Desktop: Grid 3 colunas - CARDS MENORES */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {googleScreenshots.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-[280px] bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image 
                    src={item.image} 
                    alt={`Busca Google - ${item.title}`}
                    fill
                    className="object-cover object-top"
                  />
                  
                  <div className="absolute top-3 left-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 px-2.5 py-1 rounded-full text-xs font-medium">
                    1ª Página
                  </div>
                </div>

                <div className="p-3 border-t border-white/10">
                  <h3 className="text-white font-medium text-xs mb-1">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1 truncate">
                    <Search className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{item.search}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden mb-12">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative h-[400px] bg-gradient-to-br from-slate-800 to-slate-900">
                <Image 
                  src={googleScreenshots[currentSlide].image} 
                  alt={`Busca Google - ${googleScreenshots[currentSlide].title}`}
                  fill
                  className="object-cover object-top"
                />
                
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                  1ª Página
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-medium mb-1">{googleScreenshots[currentSlide].title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  {googleScreenshots[currentSlide].search}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="text-xs text-gray-500">
                    {currentSlide + 1} / {googleScreenshots.length}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">+100</div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Bairros</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1ª</div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Página</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">+420%</div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Visibilidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social - Print WhatsApp */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
              <MessageSquare className="w-4 h-4" />
              Cliente Real
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clientes chegando pelo Google
            </h2>
            <p className="text-lg text-gray-400 max-w-[36rem] mx-auto [text-wrap:balance]">
              Resultado direto: pedidos de orçamento todo dia
            </p>
          </div>

          {/* Print do WhatsApp */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden max-w-md mx-auto hover:border-green-500/30 transition-all">
            <Image 
              src="/customerzap.jpeg" 
              alt="Cliente pedindo orçamento pelo WhatsApp"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Print real de cliente que encontrou Beto pelo Google
          </p>
        </div>
      </section>

      {/* CTA Final Persuasivo */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight max-w-[36rem] mx-auto [text-wrap:balance]">
              Seu cliente está buscando pelo seu serviço <span className="text-red-400">agora</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-[36rem] mx-auto [text-wrap:balance]">
              Se você não aparece na <span className="text-white font-medium">primeira página do Google</span>, 
              ele vai contratar seu concorrente. Simples assim.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-[36rem] mx-auto">
              <p className="text-gray-400 leading-relaxed [text-wrap:balance]">
                Enquanto você lê isso, alguém está pesquisando pelo seu serviço no Google. 
                A pergunta é: <span className="text-white font-medium">quem ele vai encontrar?</span> Você ou seu concorrente?
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5541999372194?text=Olá! Quero aparecer na primeira página do Google como o Beto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-white/20"
              >
                Quero Aparecer no Google
                <ArrowRight className="w-6 h-6" />
              </a>

              <p className="text-sm text-gray-500 [text-wrap:balance]">
                Atendemos Curitiba e Região Metropolitana • Sem mensalidades • Resultados em 90 dias
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}