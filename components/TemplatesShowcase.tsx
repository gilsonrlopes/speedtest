'use client';

// ✅ COPIE TODO ESTE ARQUIVO E SUBSTITUA src/components/TemplatesShowcase.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Zap, Smartphone, Search } from 'lucide-react';

interface Template {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  imagem: string;
  demo: string;
  destaque?: string;
}

const templates: Template[] = [
  {
    id: 1,
    nome: 'DentSmile',
    categoria: 'Saúde & Odontologia',
    descricao: 'Site premium e Elegante. Ideal para clínicas que querem estar acima do comum.',
    imagem: '/dentalclinic.webp',
    demo: 'https://clinic.grsites.com.br/',
  },
  {
    id: 2,
    nome: 'Valtier & Associados',
    categoria: 'Advocacia',
    descricao: 'Website sofisticado para escritórios que desejam transmitir autoridade.',
    imagem: '/valtiercover.webp',
    demo: 'https://valtierieassociados.grsites.com.br/',
    destaque: 'Mais acessado'
  },
  {
    id: 3,
    nome: 'GR Grill Restaurant',
    categoria: 'Gastronomia',
    descricao: 'Website premium com visual elegante e performance máxima.',
    imagem: '/grgrillcover.webp',
    demo: 'https://grgrill.vercel.app/',
  },
  {
    id: 4,
    nome: 'Acqua Zen',
    categoria: 'Piscinas & Lazer',
    descricao: 'Site moderno para empresas que constroem piscinas premium.',
    imagem: '/acquazencover.webp',
    demo: 'https://acquazen.grsites.com.br/',
  },
  {
    id: 5,
    nome: 'Gr Building',
    categoria: 'Engenharia',
    descricao: 'Website profissional com design moderno e robusto.',
    imagem: '/grbuild.webp',
    demo: 'https://construction-five-iota.vercel.app/',
  },
  {
    id: 6,
    nome: 'Gr Wheels',
    categoria: 'Automotivo',
    descricao: 'Visual profissional que valoriza seus serviços.',
    imagem: '/wheelscover.webp',
    demo: 'https://grwheels.vercel.app/',
    destaque: 'Novo'
  }
];

const TemplatesShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="templates" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            animation: `fadeInUp 0.8s ease-out backwards`
          }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-5 py-2 mb-6">
             <Zap className="h-4 w-4 text-cyan-400" />
             <span className="text-sm text-gray-200 font-sans">Demonstrações Interativas</span>
           </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Coleção Premium GR Sites
          </h2>
          
          {/* ✅ CORREÇÃO: text-gray-400 → text-gray-300 */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Design que impõe respeito. Performance que converte.
          </p>
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group flex flex-col"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* 1. IMAGEM (Retangular no topo) */}
              <div className="relative z-0 aspect-[1430/762] w-full overflow-hidden rounded-t-2xl border border-white/10 border-b-0 group-hover:border-white/30 transition-colors bg-[#0a0a0f]">
                
                {template.destaque && (
                  <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-sm shadow-lg">
                    {template.destaque}
                  </div>
                )}

                <Image
                  src={template.imagem}
                  alt={`Template ${template.nome} - ${template.categoria}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <a
                    href={template.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl"
                    aria-label={`Ver demonstração do site ${template.nome}`}
                  >
                    Ver Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 2. INFO */}
              <div className="relative z-10 -mt-0 flex-1 bg-white/5 backdrop-blur-xl border border-white/10 border-t-0 p-6 rounded-b-[32px] hover:bg-white/[0.07] transition-colors shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                   <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                     {template.categoria}
                   </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors">
                  {template.nome}
                </h3>

                {/* ✅ CORREÇÃO: text-gray-400 → text-gray-300 */}
                <p className="text-sm text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                  {template.descricao}
                </p>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {/* ✅ CORREÇÃO: text-gray-500 → text-gray-400 */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Zap className="w-3.5 h-3.5 text-green-400" /> Rápido
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Smartphone className="w-3.5 h-3.5 text-blue-400" /> Responsivo
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Search className="w-3.5 h-3.5 text-purple-400" /> SEO
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE: Carousel */}
        <div className="md:hidden mb-16">
          <div className="relative">
            <div 
              className="overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 px-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="flex-shrink-0 w-[85vw] snap-center flex flex-col"
                  >
                    {/* Imagem Mobile */}
                    <div className="relative z-0 aspect-[1430/762] w-full overflow-hidden rounded-t-2xl border border-white/10 border-b-0 bg-[#0a0a0f]">
                      {template.destaque && (
                        <div className="absolute top-3 right-3 z-20 bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm shadow-md">
                          {template.destaque}
                        </div>
                      )}
                      <Image
                        src={template.imagem}
                        alt={`Template ${template.nome} - ${template.categoria}`}
                        fill
                        className="object-cover"
                        sizes="85vw"
                      />
                    </div>

                    {/* Info Mobile */}
                    <div className="relative z-10 -mt-0 bg-white/5 backdrop-blur-xl border border-white/10 border-t-0 p-5 rounded-b-[32px] shadow-2xl">
                      <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider block mb-2">
                        {template.categoria}
                      </span>
                      
                      <h3 className="text-white font-bold text-lg mb-2">
                        {template.nome}
                      </h3>

                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                        {template.descricao}
                      </p>

                      <a
                        href={template.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white text-black px-4 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                        aria-label={`Ver demonstração do site ${template.nome}`}
                      >
                        Ver Demo ao Vivo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2">
              {templates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-6 bg-cyan-500' : 'w-1.5 bg-gray-700'
                  }`}
                  aria-label={`Ver template ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div
          className="text-center border-t border-white/10 pt-16"
          style={{
            animation: `fadeInUp 0.8s ease-out backwards`
          }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Não encontrou o que procura? Criamos um design <span className="text-white font-bold border-b border-cyan-500">100% exclusivo</span> para você.
          </p>
          
          <a
            href="https://wa.me/5541999372194?text=Olá! Quero um site personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
            aria-label="Solicitar orçamento de site personalizado via WhatsApp"
          >
            Solicitar Site Personalizado
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TemplatesShowcase;