// app/api/pagespeed/route.ts
// Este arquivo roda APENAS no servidor (ambiente Next.js/Vercel)

import { NextRequest, NextResponse } from 'next/server';

// O nome da variável de ambiente é GOOGLE_PAGESPEED_API_KEY
// Certifique-se de que esta variável está definida nos seus arquivos .env.local E na Vercel!
const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;

export async function GET(request: NextRequest) {
  // 1. Pega a URL que o usuário digitou no frontend
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'Parâmetro "url" obrigatório.' },
      { status: 400 }
    );
  }
  
  // 2. Verifica a chave de segurança
  if (!API_KEY) {
      console.error("GOOGLE_PAGESPEED_API_KEY não definida no ambiente.");
      return NextResponse.json(
        { error: 'Erro de configuração do servidor: API Key ausente.' },
        { status: 500 }
      );
  }

  try {
    // 3. Constrói a URL de requisição AO GOOGLE
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=seo&category=accessibility&category=best-practices&strategy=mobile&key=${API_KEY}`;
    
    // 4. Faz a requisição DO SERVIDOR para o Google
    const response = await fetch(apiUrl);
    const data = await response.json();

    // 5. Trata erros que vêm do Google (ex: URL inválida, chave bloqueada)
    if (data.error) {
      // Retorna o erro do Google para o frontend, mantendo o status code correto
      return NextResponse.json(
        { error: data.error.message || 'Erro de comunicação com a API do Google.' }, 
        { status: response.status }
      );
    }

    // 6. Retorna o resultado para o frontend
    return NextResponse.json(data);

  } catch (error) {
    console.error('Erro ao processar a requisição PageSpeed:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao conectar com a API.' },
      { status: 500 }
    );
  }
}