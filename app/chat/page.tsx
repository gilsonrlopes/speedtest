'use client';

import { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';

const FLUXO = {
  inicio: {
    texto: 'Olá! 👋 Sou o assistente da GR Sites.\n\nVocê precisa de um site profissional?',
    opcoes: [
      { text: '✅ Sim', value: 'sim_site' },
      { text: '❌ Não', value: 'nao_site' },
    ],
  },
  sim_site: {
    texto: 'Ótimo! Você já tem um site atualmente?',
    opcoes: [
      { text: '✅ Sim, já tenho', value: 'tem_site' },
      { text: '❌ Não tenho', value: 'nao_tem_site' },
    ],
  },
  tem_site: {
    texto: 'Entendi! Você quer melhorar/refazer o site atual?',
    opcoes: [
      { text: '✅ Sim, quero melhorar', value: 'quer_melhorar' },
      { text: '❌ Não, só tirar dúvidas', value: 'so_duvidas' },
    ],
  },
  nao_tem_site: {
    texto: 'Perfeito! Está pronto para criar um site agora?',
    opcoes: [
      { text: '✅ Sim, quero orçamento', value: 'quer_orcamento' },
      { text: '❌ Só quero informações', value: 'so_info' },
    ],
  },
  quer_melhorar: {
    texto: 'Excelente! Quer receber um orçamento personalizado?',
    opcoes: [
      { text: '✅ Sim, quero!', value: 'quer_orcamento' },
      { text: '💬 Prefiro conversar antes', value: 'falar_whatsapp' },
    ],
  },
  so_duvidas: {
    texto: 'Sem problema! Posso tirar suas dúvidas agora.\n\nQuer falar direto com nossa equipe?',
    opcoes: [
      { text: '✅ Sim, quero falar', value: 'falar_whatsapp' },
      { text: '📋 Quero ver preços', value: 'ver_precos' },
    ],
  },
  quer_orcamento: {
    texto: 'Perfeito! 🎉\n\nNossos sites começam em R$ 2.500.\n\nInclui:\n✓ Design profissional\n✓ Responsivo (mobile)\n✓ SEO otimizado\n✓ Suporte 30 dias\n\nQuer falar com um especialista agora?',
    opcoes: [
      { text: '✅ Sim, chamar no WhatsApp', value: 'falar_whatsapp' },
      { text: '📞 Ligar agora', value: 'ligar' },
    ],
  },
  so_info: {
    texto: 'Claro! Vou te explicar.\n\nCriamos sites profissionais que:\n• Aparecem no Google\n• Atraem clientes\n• Aumentam vendas\n\nQuer saber mais?',
    opcoes: [
      { text: '✅ Sim, me conta mais', value: 'ver_precos' },
      { text: '💬 Quero falar no WhatsApp', value: 'falar_whatsapp' },
    ],
  },
  ver_precos: {
    texto: '💰 TABELA DE PREÇOS:\n\n📄 Site Institucional: R$ 2.500\n🛒 Loja Virtual: R$ 5.500\n🎯 Landing Page: R$ 1.800\n📈 SEO Mensal: R$ 897\n\nQuer conversar sobre seu projeto?',
    opcoes: [
      { text: '✅ Sim, vamos conversar', value: 'falar_whatsapp' },
      { text: '📧 Prefiro receber por email', value: 'enviar_email' },
    ],
  },
  nao_site: {
    texto: 'Entendi! Você precisa de:\n\n📈 SEO (aparecer no Google)?\n📱 Marketing Digital?\n🎨 Design Gráfico?',
    opcoes: [
      { text: '📈 SEO', value: 'quer_seo' },
      { text: '📱 Marketing', value: 'quer_marketing' },
      { text: '💬 Falar com especialista', value: 'falar_whatsapp' },
    ],
  },
  quer_seo: {
    texto: 'SEO é nossa especialidade! 🚀\n\nFazemos seu negócio aparecer no topo do Google.\n\nR$ 897/mês (sem fidelidade)\n\nQuer uma análise gratuita?',
    opcoes: [
      { text: '✅ Sim, quero análise', value: 'falar_whatsapp' },
      { text: '💰 Quero só orçamento', value: 'enviar_email' },
    ],
  },
  quer_marketing: {
    texto: 'Fazemos gestão completa! 📱\n\n✓ Redes sociais\n✓ Google Ads\n✓ Meta Ads\n\nQuer conversar sobre isso?',
    opcoes: [
      { text: '✅ Sim, vamos conversar', value: 'falar_whatsapp' },
      { text: '📋 Enviar info por email', value: 'enviar_email' },
    ],
  },
  falar_whatsapp: {
    texto: 'Perfeito! 🎉\n\nVou te redirecionar para o WhatsApp agora.\n\nNossa equipe vai te atender em instantes!\n\nAguarde 2 segundos...',
    opcoes: [],
    acao: 'whatsapp',
  },
  ligar: {
    texto: '📞 Ligue agora:\n\n(41) 99937-2194\n\nOu prefere WhatsApp?',
    opcoes: [
      { text: '💬 Ir para WhatsApp', value: 'falar_whatsapp' },
    ],
  },
  enviar_email: {
    texto: '📧 Envie um email para:\n\ncontato@grsites.com.br\n\nOu prefere falar no WhatsApp agora?',
    opcoes: [
      { text: '💬 Sim, WhatsApp', value: 'falar_whatsapp' },
    ],
  },
};

export default function ChatPage() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setMessages([{
      id: '1',
      type: 'bot',
      text: FLUXO.inicio.texto,
      options: FLUXO.inicio.opcoes,
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (option: any) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'user',
      text: option.text,
    }]);

    const proximoPasso = FLUXO[option.value as keyof typeof FLUXO];
    if (!proximoPasso) return;

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'bot',
        text: proximoPasso.texto,
        options: proximoPasso.opcoes,
      }]);

      if ('acao' in proximoPasso && proximoPasso.acao === 'whatsapp') {
        setTimeout(() => {
          const msg = 'Olá! Vim pelo chat do site da GR Sites. Gostaria de mais informações! 😊';
          window.open(`https://wa.me/5541999372194?text=${encodeURIComponent(msg)}`, '_blank');
        }, 2000);
      }
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      background: '#000', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '16px' 
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#09090b',
        borderRadius: '24px',
        border: '1px solid #27272a',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        
        {/* Header */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(to bottom, #18181b, #09090b)',
          borderBottom: '1px solid #27272a',
          padding: '24px'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(24, 24, 27, 0.5), rgba(39, 39, 42, 0.3), rgba(24, 24, 27, 0.5))'
          }} />
          
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(39, 39, 42, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}>
                  <MessageCircle style={{ width: '28px', height: '28px', color: '#a1a1aa' }} />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  width: '16px',
                  height: '16px',
                  background: '#22c55e',
                  borderRadius: '50%',
                  border: '2px solid #18181b',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} />
              </div>
              
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', margin: 0 }}>GR Sites</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    backdropFilter: 'blur(4px)',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(34, 197, 94, 0.2)'
                  }}>
                    <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                    <span style={{ color: '#4ade80', fontWeight: 500 }}>Online</span>
                  </div>
                  <span style={{ color: '#71717a' }}>•</span>
                  <span style={{ color: '#a1a1aa' }}>Assistente Virtual</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => window.close()}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(39, 39, 42, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(63, 63, 70, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(63, 63, 70, 0.5)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(39, 39, 42, 0.5)'}
            >
              <X style={{ width: '20px', height: '20px', color: '#a1a1aa' }} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          background: 'linear-gradient(to bottom, #18181b, #000, #09090b)'
        }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '16px'
            }}>
              {msg.type === 'bot' ? (
                <div style={{ maxWidth: '85%' }}>
                  <div style={{
                    padding: '20px',
                    borderRadius: '16px',
                    borderTopLeftRadius: '4px',
                    background: 'linear-gradient(to bottom right, rgba(39, 39, 42, 0.8), rgba(24, 24, 27, 0.8))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(63, 63, 70, 0.5)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#f4f4f5', margin: 0, whiteSpace: 'pre-line' }}>
                      {msg.text}
                    </p>
                  </div>
                  
                  {msg.options?.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                      {msg.options.map((opt: any, i: number) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            borderRadius: '12px',
                            textAlign: 'left',
                            background: 'rgba(39, 39, 42, 0.5)',
                            border: '1px solid rgba(63, 63, 70, 0.5)',
                            color: '#d4d4d8',
                            fontSize: '14px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            backdropFilter: 'blur(4px)'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(63, 63, 70, 0.5)';
                            e.currentTarget.style.borderColor = '#52525b';
                            e.currentTarget.style.color = '#fff';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(39, 39, 42, 0.5)';
                            e.currentTarget.style.borderColor = 'rgba(63, 63, 70, 0.5)';
                            e.currentTarget.style.color = '#d4d4d8';
                          }}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{
                  maxWidth: '85%',
                  padding: '12px 20px',
                  borderRadius: '16px',
                  borderTopRightRadius: '4px',
                  background: '#fff',
                  color: '#000',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                  <p style={{ fontSize: '14px', whiteSpace: 'pre-line', fontWeight: 500, margin: 0 }}>
                    {msg.text}
                  </p>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                padding: '20px',
                borderRadius: '16px',
                borderTopLeftRadius: '4px',
                background: 'linear-gradient(to bottom right, rgba(39, 39, 42, 0.8), rgba(24, 24, 27, 0.8))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(63, 63, 70, 0.5)'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', background: '#a1a1aa', borderRadius: '50%', animation: 'bounce 1s infinite' }} />
                  <span style={{ width: '10px', height: '10px', background: '#71717a', borderRadius: '50%', animation: 'bounce 1s infinite 0.15s' }} />
                  <span style={{ width: '10px', height: '10px', background: '#52525b', borderRadius: '50%', animation: 'bounce 1s infinite 0.3s' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div style={{
          padding: '24px',
          background: 'linear-gradient(to top, #000, #09090b)',
          borderTop: '1px solid #27272a'
        }}>
          <button
            onClick={() => {
              const msg = 'Olá! Vim pelo chat do site da GR Sites. Gostaria de mais informações! 😊';
              window.open(`https://wa.me/5541999372194?text=${encodeURIComponent(msg)}`, '_blank');
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '16px 24px',
              borderRadius: '12px',
              background: '#16a34a',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
            onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
          >
            <Phone style={{ width: '20px', height: '20px' }} />
            <span>Falar direto no WhatsApp</span>
          </button>
          
          <div style={{
            marginTop: '12px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#52525b'
          }}>
            Resposta em menos de 1 minuto • (41) 99937-2194
          </div>
        </div>
      </div>
    </div>
  );
}