'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, ExternalLink } from "lucide-react";
import { Cidade } from '@/lib/cidades';

interface FAQProps {
  cidade: Cidade;
}

export default function FAQ({ cidade }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const empresasCount = cidade.empresas ? (cidade.empresas / 1000).toFixed(1) : 'milhares de';
  const destaqueText = cidade.caracteristicas?.[0] || 'O mercado local está aquecido';

  const gerarFAQs = () => {
    const faqsBase = [
      {
        pergunta: `Quanto custa para criar um site em ${cidade.nome}?`,
        resposta: `O investimento varia de R$ 1.500 a R$ 10.000, dependendo da complexidade do projeto. Nossos planos são personalizados para atender micro e pequenas empresas em ${cidade.nome}, garantindo o melhor custo-benefício para você ter um site profissional.`
      },
      {
        pergunta: `O site vai aparecer no Google para buscas em ${cidade.nome}?`,
        resposta: `Sim! Nossos sites são otimizados para SEO local desde o código. Fazemos a configuração de palavras-chave locais e o Schema Markup para que, quando seus clientes em ${cidade.nome} buscarem por seus serviços, seu site tenha grandes chances de aparecer na primeira página.`
      },
      {
        pergunta: `Qual o prazo para a entrega do site?`,
        resposta: `Sites simples (Landing Pages) podem ser entregues em até 7 dias úteis. Projetos maiores, como Lojas Virtuais, podem levar de 15 a 30 dias. O prazo exato depende da sua aprovação de conteúdo.`
      }
    ];

    if (cidade.slug === 'curitiba') {
      faqsBase.push({
        pergunta: `Como um site pode ajudar minha empresa em Curitiba a vender mais?`,
        resposta: `Com mais de ${empresasCount} mil empresas ativas em Curitiba, a competição é intensa. Um site profissional: (1) Funciona 24 horas por dia captando leads, (2) Aparece no Google quando clientes buscam seu serviço na região, e (3) Transmite credibilidade e profissionalismo instantaneamente.`
      });
    } else {
      faqsBase.push({
        pergunta: `Por que investir em um site profissional em ${cidade.nome}?`,
        resposta: `${destaqueText}. Em uma cidade com o crescimento de ${cidade.nome}, ter um site profissional é essencial para se destacar da concorrência local. Seu site atrai clientes automaticamente e garante que sua empresa esteja à frente no digital.`
      });
    }

    faqsBase.push(
      {
        pergunta: `O que é domínio e hospedagem?`,
        resposta: `O domínio é o nome do seu site (www.suaempresa.com.br). A hospedagem é o 'lugar' onde seu site fica guardado na internet. Nós cuidamos de todo o registro e configuração para você.`
      },
      {
        pergunta: `O site será rápido e seguro?`,
        resposta: `Sim. Seguimos as melhores práticas de desenvolvimento Next.js para que o site carregue rápido e tenha certificado de segurança (cadeado no navegador), garantindo a confiança dos seus clientes.`
      }
    );

    return faqsBase;
  };

  const faqs = gerarFAQs();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.resposta,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effect */}
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-5 py-2 mb-6">
              <HelpCircle className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300 font-sans">Dúvidas Frequentes</span>
            </div>

            <h2 className="font-satoshi font-semibold text-4xl sm:text-5xl text-white mb-6">
              Perguntas sobre {cidade.nome}
            </h2>
            
            <p className="font-sans text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre <span className="text-white font-medium">criação de sites</span> na sua região.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/30 transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <HelpCircle className={`w-5 h-5 transition-colors ${
                        openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-purple-400'
                      }`} />
                    </div>
                    <span className="font-satoshi font-semibold text-white text-base sm:text-lg">
                      {faq.pergunta}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 ml-4 transition-all ${
                      openIndex === index 
                        ? "rotate-180 text-purple-400" 
                        : "text-gray-500 group-hover:text-purple-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <p className="font-sans text-gray-400 leading-relaxed">
                          {faq.resposta}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <MessageCircle className="h-12 w-12 text-purple-400" />
              <p className="font-sans text-lg text-gray-300">
                Ainda tem dúvidas sobre <span className="text-white font-medium">{cidade.nome}</span>?
              </p>
              <p className="font-sans text-sm text-gray-400 mb-2">
                Fale com nossa equipe e receba uma consultoria gratuita!
              </p>
              <a
                href={`https://wa.me/5541999372194?text=Olá! Tenho dúvidas sobre criação de sites em ${cidade.nome}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-satoshi font-semibold px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
              >
                Falar com Especialista
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}