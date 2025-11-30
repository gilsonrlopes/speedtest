'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Sparkles, User } from 'lucide-react';

interface Cidade {
  nome: string;
  slug: string;
}

interface TestimonialsProps {
  cidade: Cidade;
}

const baseTestimonials = [
  {
    name: "Dra. Kelly Ivanics",
    business: "Advogada - Especialista em Direito Europeu",
    location: "Curitiba",
    image: "/kelly.webp",
    rating: 5,
    text: "Depois que a GR Sites criou meu site, meu escritório cresceu! Os clientes me encontram, agendam online e eu ganho tempo para focar no que importa. Foi o melhor investimento que fiz para o meu negócio!",
    result: "+100% Novas Consultas"
  },
  {
    name: "Dra. Fernanda Lima",
    business: "Clínica Odontológica",
    location: "São José dos Pinhais",
    image: "/drafernanda.webp",
    rating: 5,
    text: "Minha clínica agora aparece no Google quando procuram 'dentista perto de mim'. A agenda ficou cheia e tenho muito mais pacientes novos. A GR Sites foi essencial!",
    result: "+150% Novos Pacientes"
  },
  {
    name: "Geiza",
    business: "Beto Montagens",
    location: "Colombo",
    image: "/geiza.webp",
    rating: 5,
    text: "Nosso site ficou lindo e profissional! O melhor é que agora os clientes nos encontram no Google. A GR Sites fez nosso negócio ganhar novos clientes.",
    result: "+80% Agendamentos"
  },
  {
    name: "Carlos Oliveira",
    business: "Pizzaria Delivery",
    location: "Pinhais",
    image: "/carlos.webp",
    rating: 5,
    text: "Com o site da GR Sites, minha pizzaria virou referência na região. As pessoas encontram facilmente no Google e fazem pedidos online. Vendas dispararam!",
    result: "+180% Delivery"
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ cidade }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = useMemo(() => {
    return baseTestimonials.map((t, index) => {
      if (index === 0) {
        return {
          ...t,
          business: `${t.business} em ${cidade.nome}`, 
          location: cidade.nome,
          text: t.text.replace('meu escritório cresceu!', `meu negócio em ${cidade.nome} cresceu!`),
          name: t.name.replace('Ivanics', cidade.slug.includes('pinhais') ? 'Silva' : 'Ivanics')
        };
      }
      return t;
    });
  }, [cidade.nome, cidade.slug]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };
  
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-400/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300 font-sans">Histórias de Sucesso</span>
          </div>

          <h2 className="font-satoshi font-semibold text-4xl sm:text-5xl text-white mb-6">
            Transformando Negócios em {cidade.nome}
          </h2>
          
          <p className="font-sans text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Veja como nossos clientes em <span className="text-white font-medium">Curitiba e Região</span> multiplicaram suas vendas.
          </p>
        </motion.div>

        {/* Carousel Container com padding compensado */}
        <div className="-mx-6 md:mx-0">
          <div 
            className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scroll-smooth no-scrollbar px-6 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full md:w-auto flex-shrink-0 snap-center group relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-300 p-8"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-24 w-24 text-blue-400" />
                </div>

                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 bg-white text-black text-xs font-satoshi font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {testimonial.result}
                  </div>
                </div>

                <div className="relative mt-12">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="font-sans text-gray-300 leading-relaxed mb-6 text-base">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/20 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                      {testimonial.image ? (
                          <Image
                            alt={testimonial.name}
                            src={testimonial.image}
                            width={56}
                            height={56}
                            className="object-cover w-full h-full"
                          />
                      ) : (
                          <User className="h-8 w-8 text-white" />
                      )}
                    </div>

                    <div className="flex-1">
                      <p className="font-satoshi font-semibold text-white text-base">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-sm text-gray-400">
                        {testimonial.business}
                      </p>
                      <p className="font-sans text-xs text-blue-400 mt-0.5">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;