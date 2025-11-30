'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Importamos a interface Cidade para tipagem
import { Cidade } from '@/lib/cidades'; 

// Definindo as props do componente
interface WelcomeMessageProps {
  cidade: Cidade;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ cidade }) => {
  
  // Mensagem de boas-vindas adaptada para cada cidade
  const messageVariants: Record<string, string> = {
    curitiba: `Sua presença online em Curitiba começa aqui!`,
    'sao-jose-dos-pinhais': `Pronto para impulsionar seu negócio em São José dos Pinhais?`,
    colombo: `O futuro digital da sua empresa em Colombo está garantido!`,
    pinhais: `Sites de alta performance feitos para Pinhais.`,
    araucaria: `A GRSites é a sua parceira de desenvolvimento web em Araucária.`,
    // Usa uma mensagem genérica para cidades menores que você não especificou
    default: `Sua presença online na Região Metropolitana de Curitiba começa aqui!`
  };
  
  const welcomeText = messageVariants[cidade.slug] || messageVariants.default;

  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* ✅ INJEÇÃO LOCAL NA PRIMEIRA FRASE */}
      <span className='font-semibold text-purple-300'>
        {welcomeText} 
      </span>{' '}
      {/* A GRSites cria sites sob medida para impulsionar o seu negócio, 
        especialmente em {cidade.nome}. 
      */}
      A{' '}
      <span className='font-semibold text-purple-300'>GRSites</span> cria sites sob medida para impulsionar o seu negócio.
    </motion.p>
  );
};

export default WelcomeMessage;