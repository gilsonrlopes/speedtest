'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, ExternalLink } from 'lucide-react'; 
import { CIDADES, Cidade } from '@/lib/cidades';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  cidade: Cidade;
}

const Footer: React.FC<FooterProps> = ({ cidade }) => {
  const socialLinks = {
    facebook: 'https://www.facebook.com/grsitess',
    instagram: 'https://www.instagram.com/grcriacaodesites/',
  };

  const whatsappLink = `https://wa.me/5541999372194?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20criação%20de%20sites%20em%20${cidade.nome}.`;

  const isCuritiba = cidade.slug === 'curitiba';
  const displayLocation = isCuritiba ? 'Curitiba' : cidade.nome;

  const services = [
    'Sites Institucionais',
    'Landing Pages',
    'Lojas Virtuais',
    'SEO Local Avançado',
    'Manutenção',
    'Consultoria Digital'
  ];

  const topCities = CIDADES.filter(c => c.slug !== cidade.slug).slice(0, 6);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Link href="#inicio" className="inline-block mb-6">
              <Image 
                src="/Logo.png" 
                alt={`GR Sites - ${cidade.nome}`}
                width={140} 
                height={56} 
                className="h-14 w-auto"
              />
            </Link>
            
            {/* ✅ CORREÇÃO: text-gray-400 → text-gray-300 (contraste 4.5:1) */}
            <p className="font-sans text-gray-300 leading-relaxed mb-6">
              Transformamos negócios em <span className="text-white font-medium">{displayLocation}</span> com sites profissionais que atraem clientes e aumentam vendas.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-400/50 transition-all"
                aria-label="Instagram da GR Sites"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-400/50 transition-all"
                aria-label="Facebook da GR Sites"
              >
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="font-satoshi font-semibold text-white text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/criacao-de-sites/${cidade.slug}#servicos`}
                    className="font-sans text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="font-satoshi font-semibold text-white text-lg mb-6">Regiões</h4>
            <ul className="space-y-3">
              {topCities.map((local) => (
                <li key={local.slug}>
                  <Link 
                    href={`/criacao-de-sites/${local.slug}`}
                    className="font-sans text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all"></span>
                    {local.nome}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/criacao-de-sites"
                  className="font-sans text-sm text-white font-medium hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"
                >
                  Ver todas
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="font-satoshi font-semibold text-white text-lg mb-6">Contato</h4>
            
            <div className="space-y-4 mb-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                aria-label="Entrar em contato via WhatsApp"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-green-400/50 transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-sans text-xs text-gray-400">WhatsApp</div>
                  <div className="font-sans text-sm">(41) 99937-2194</div>
                </div>
              </a>

              <a
                href="mailto:contato@grsites.com.br"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                aria-label="Enviar e-mail para GR Sites"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-sans text-xs text-gray-400">E-mail</div>
                  <div className="font-sans text-sm">contato@grsites.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-sans text-xs text-gray-400">Localização</div>
                  <div className="font-sans text-sm">{displayLocation}, PR</div>
                </div>
              </div>
            </div>

            {/* Hours Badge */}
            <div className="relative bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-xl p-4">
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <div className="font-sans text-xs text-gray-400 mb-2">Horário de Atendimento</div>
              <div className="font-sans text-sm text-white">
                Seg-Qui: 8h às 18h<br />
                Sex: 8h às 17h
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="font-sans">
              © 2025 <span className="text-white font-medium">GR Sites</span>. Todos os direitos reservados.
            </p>
            <p className="font-sans">
              Transformando negócios em <span className="text-white">{displayLocation}</span> e região.
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;