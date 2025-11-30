'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Zap, Rocket, Star, Users } from 'lucide-react';

interface Cidade {
  nome: string;
}

interface HeaderProps {
  cidade: Cidade;
}

const Header: React.FC<HeaderProps> = ({ cidade }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const whatsappLink = `https://wa.me/5541999372194?text=Olá! Gostaria de um orçamento para criação de sites em ${cidade.nome}.`;

  const handleContact = () => {
    window.open(whatsappLink, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const dropdownItems = [
    {
      icon: Zap,
      title: 'Sites Rápidos',
      description: 'Performance de alto nível',
      action: () => scrollToSection('beneficios')
    },
    {
      icon: Rocket,
      title: 'SEO Otimizado',
      description: 'Destaque no Google',
      action: () => scrollToSection('case-beto')
    },
    {
      icon: Star,
      title: 'Design Premium',
      description: 'Visual moderno e profissional',
      action: () => scrollToSection('templates')
    },
    {
      icon: Users,
      title: 'Depoimentos',
      description: 'Clientes satisfeitos',
      action: () => scrollToSection('depoimentos')
    }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-white/5"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo - ARIA LABEL ADICIONADO */}
          <div 
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-2 cursor-pointer group"
            role="button"
            tabIndex={0}
            aria-label="Ir para o topo da página"
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('inicio')}
          >
            <Image
              src="/logosuperwhite.webp"
              alt={`GR Sites - Agência Web em ${cidade.nome}`}
              width={140}
              height={35}
              className="h-[30px] sm:h-[35px] w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('inicio')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
            >
              Início
            </button>

            {/* Dropdown Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 flex items-center gap-1"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Soluções
                <ChevronDown className={`h-3 w-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-[#0a0a0a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                  >
                    <div className="p-2">
                      {dropdownItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={item.action}
                          className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group text-left"
                        >
                          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                            <item.icon className="h-4 w-4 text-gray-400 group-hover:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="font-satoshi font-medium text-white text-sm group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="font-sans text-xs text-gray-500 mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('servicos')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
            >
              Depoimentos
            </button>
          </nav>

          {/* Botão Receber Analise Grátis Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleContact}
              className="bg-white text-black hover:bg-gray-200 rounded-full font-satoshi font-bold px-6 py-2.5 text-sm shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center gap-2"
              aria-label="Falar no WhatsApp"
            >
              <Phone className="h-4 w-4" />
              Receber Análise Grátis
            </button>
          </div>

          {/* Botão Mobile (Hambúrguer) - CORREÇÃO CRÍTICA AQUI */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10 mt-3 rounded-2xl"
            >
              <div className="flex flex-col p-4 space-y-2">
                {/* Padding aumentado (py-4) para área de toque */}
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="font-sans font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-4 rounded-xl text-left transition-all w-full"
                >
                  Início
                </button>
                
                <div className="pl-4 border-l border-white/10 ml-4 space-y-2">
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wider px-4 py-2">Soluções</p>
                  {dropdownItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-all"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollToSection('servicos')}
                  className="font-sans font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-4 rounded-xl text-left transition-all w-full"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="font-sans font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-4 rounded-xl text-left transition-all w-full"
                >
                  Depoimentos
                </button>
                
                <div className="pt-4 mt-2 border-t border-white/10">
                  <button
                    onClick={handleContact}
                    className="bg-white text-black w-full rounded-xl font-satoshi font-bold py-4 shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    aria-label="Iniciar conversa no WhatsApp"
                  >
                    <Phone className="h-4 w-4" />
                    Falar no WhatsApp
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;