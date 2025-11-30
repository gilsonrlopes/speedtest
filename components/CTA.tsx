'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Cidade } from '@/lib/cidades';

interface SimpleCTAProps {
  cidade?: Cidade;
}

const SimpleCTA: React.FC<SimpleCTAProps> = ({ cidade }) => {
  // Se não tiver cidade (página principal), usa valores padrão
  const displayLocation = cidade ? (cidade.slug === 'curitiba' ? 'Curitiba' : cidade.nome) : 'Curitiba';
  
  const whatsappMsg = cidade 
    ? `Olá! Quero transformar meu negócio em ${cidade.nome} com um site profissional que atrai clientes e vende 24h!`
    : `Olá! Quero transformar meu negócio com um site profissional que atrai clientes e vende 24h!`;
    
  const whatsappLink = `https://wa.me/5541999372194?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="font-satoshi font-bold text-3xl sm:text-4xl text-white mb-4">
            Pronto para Transformar Seu Negócio?
          </h3>
          <p className="font-sans text-lg text-gray-400 mb-8">
            Junte-se a centenas de empresas em <span className="text-white font-medium">{displayLocation}</span> que já dominam o digital
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-satoshi font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Iniciar Projeto Agora
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleCTA;