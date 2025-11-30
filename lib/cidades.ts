// lib/cidades.ts
// Dados atualizados IBGE 2024 + características únicas de cada cidade

export interface Cidade {
  nome: string;
  slug: string;
  tipo: 'capital' | 'rmc';
  populacao: number;
  empresas: number;
  crescimentoPopulacional?: string;
  caracteristicas: string[];
  economia: string;
  destaque: string;
  bairrosPrincipais?: string[];
}

export const CIDADES: Cidade[] = [
  {
    nome: "Curitiba",
    slug: "curitiba",
    tipo: "capital",
    populacao: 1829225,
    empresas: 89000,
    crescimentoPopulacional: "55.507 habitantes em 2 anos",
    caracteristicas: [
      "8ª maior cidade do Brasil",
      "Capital paranaense e polo tecnológico",
      "Maior crescimento populacional do Paraná",
      "49% da população da RMC",
      "Referência em planejamento urbano",
    ],
    economia: "Serviços, Tecnologia, Comércio e Indústria diversificada",
    destaque: "Capital da inovação no Sul do Brasil com mais de 89 mil empresas ativas",
    bairrosPrincipais: [
      "Batel", "Centro", "Água Verde", "Ecoville", "CIC", "Portão",
      "Boqueirão", "Santa Felicidade", "Cabral", "Bigorrilho",
      "Ahú", "Juvevê", "Cristo Rei", "Tingui", "Pinheirinho"
    ]
  },
  {
    nome: "São José dos Pinhais",
    slug: "sao-jose-dos-pinhais",
    tipo: "rmc",
    populacao: 345644,
    empresas: 15000,
    crescimentoPopulacional: "16.016 habitantes em 2 anos",
    caracteristicas: [
      "2ª maior cidade da RMC",
      "Polo industrial e logístico regional",
      "Proximidade com Aeroporto Afonso Pena",
      "Centro automotivo Renault",
      "Entre as 100 cidades mais inteligentes do Brasil",
    ],
    economia: "Indústria automotiva, logística, serviços e tecnologia",
    destaque: "Principal polo industrial da RMC com forte presença automotiva e logística"
  },
  {
    nome: "Colombo",
    slug: "colombo",
    tipo: "rmc",
    populacao: 246468,
    empresas: 9500,
    crescimentoPopulacional: "crescimento acelerado",
    caracteristicas: [
      "3ª maior cidade da RMC",
      "Crescimento comercial acelerado",
      "Integração com IFPR e Embrapa Florestas",
      "Ecossistema de inovação Grape Tech",
      "Região estratégica para novos negócios",
    ],
    economia: "Comércio, indústria e agricultura familiar",
    destaque: "Cidade em rápida expansão comercial com forte integração de inovação"
  },
  {
    nome: "Pinhais",
    slug: "pinhais",
    tipo: "rmc",
    populacao: 134662,
    empresas: 24732,
    crescimentoPopulacional: "desenvolvimento contínuo",
    caracteristicas: [
      "Cidade planejada com alto desenvolvimento urbano",
      "Mais de 24 mil empresas ativas",
      "Polo industrial e de serviços consolidado",
      "Conecta Pinhais - ecossistema de inovação",
      "Entre as 100 cidades mais inteligentes do Brasil",
    ],
    economia: "Indústria, comércio, serviços e tecnologia",
    destaque: "Polo empresarial com 24.732 empresas ativas e forte ambiente de inovação"
  },
  {
    nome: "Araucária",
    slug: "araucaria",
    tipo: "rmc",
    populacao: 144967,
    empresas: 8500,
    crescimentoPopulacional: "crescimento industrial",
    caracteristicas: [
      "Polo petroquímico nacional",
      "Centro automotivo da região",
      "Forte presença industrial",
      "Complexo da Refinaria Presidente Getúlio Vargas",
      "Importante centro logístico",
    ],
    economia: "Petroquímica, indústria automotiva e logística",
    destaque: "Principal polo petroquímico e automotivo da RMC"
  },
  {
    nome: "Fazenda Rio Grande",
    slug: "fazenda-rio-grande",
    tipo: "rmc",
    populacao: 161506,
    empresas: 4200,
    crescimentoPopulacional: "12.633 habitantes em 2 anos - maior crescimento proporcional",
    caracteristicas: [
      "Cidade em rápido crescimento",
      "4ª mais populosa da RMC",
      "Ultrapassou Araucária em população",
      "Expansão comercial constante",
      "Novo mercado empreendedor emergente",
    ],
    economia: "Comércio, serviços e construção civil",
    destaque: "Cidade que mais cresce na RMC com novo mercado empreendedor em expansão"
  },
  {
    nome: "Campo Largo",
    slug: "campo-largo",
    tipo: "rmc",
    populacao: 132960,
    empresas: 5500,
    crescimentoPopulacional: "crescimento estável",
    caracteristicas: [
      "Tradição em cerâmica e louças",
      "Polo cerâmico nacional",
      "Indústria diversificada",
      "Conexão estratégica com Curitiba",
      "Forte tradição industrial",
    ],
    economia: "Cerâmica, louças, indústria e comércio",
    destaque: "Polo nacional de cerâmica e louças com tradição industrial consolidada"
  },
  {
    nome: "Almirante Tamandaré",
    slug: "almirante-tamandare",
    tipo: "rmc",
    populacao: 121601,
    empresas: 4500,
    crescimentoPopulacional: "crescimento residencial e comercial",
    caracteristicas: [
      "Crescimento residencial acelerado",
      "Proximidade estratégica com Curitiba",
      "Expansão do comércio local",
      "Mercado emergente",
      "Desenvolvimento urbano constante",
    ],
    economia: "Comércio, serviços e indústria",
    destaque: "Cidade em expansão com forte crescimento residencial e comercial"
  },
  {
    nome: "Piraquara",
    slug: "piraquara",
    tipo: "rmc",
    populacao: 112270,
    empresas: 3200,
    crescimentoPopulacional: "crescimento sustentável",
    caracteristicas: [
      "Responsável pelo abastecimento de água da RMC",
      "Turismo ecológico desenvolvido",
      "Áreas de preservação ambiental",
      "Crescimento sustentável",
      "Qualidade de vida elevada",
    ],
    economia: "Turismo ecológico, agricultura e serviços",
    destaque: "Cidade que abastece a RMC com foco em sustentabilidade e turismo ecológico"
  },
  {
    nome: "Quatro Barras",
    slug: "quatro-barras",
    tipo: "rmc",
    populacao: 23380,
    empresas: 1500,
    crescimentoPopulacional: "crescimento constante",
    caracteristicas: [
      "Cidade turística consolidada",
      "Comércio local em expansão",
      "Qualidade de vida elevada",
      "Proximidade com a serra",
      "Polo de eventos e lazer",
    ],
    economia: "Turismo, comércio e serviços",
    destaque: "Cidade turística com excelente qualidade de vida e comércio em crescimento"
  },
  {
    nome: "Campina Grande do Sul",
    slug: "campina-grande-do-sul",
    tipo: "rmc",
    populacao: 43050,
    empresas: 1800,
    crescimentoPopulacional: "desenvolvimento regional",
    caracteristicas: [
      "Região rural e urbana integradas",
      "Proximidade com serra do mar",
      "Mercado em desenvolvimento",
      "Turismo rural emergente",
      "Comércio local crescente",
    ],
    economia: "Agricultura, turismo rural e comércio",
    destaque: "Cidade com equilíbrio entre rural e urbano, mercado em desenvolvimento"
  },
  {
    nome: "Balsa Nova",
    slug: "balsa-nova",
    tipo: "rmc",
    populacao: 14000,
    empresas: 800,
    crescimentoPopulacional: "estável",
    caracteristicas: [
      "Vocação turística e rural",
      "Turismo de aventura",
      "Agricultura familiar forte",
      "Paisagens naturais preservadas",
      "Comércio local consolidado",
    ],
    economia: "Turismo, agricultura e pecuária",
    destaque: "Destino turístico com agricultura familiar e paisagens preservadas"
  },
  {
    nome: "Mandirituba",
    slug: "mandirituba",
    tipo: "rmc",
    populacao: 28000,
    empresas: 1200,
    crescimentoPopulacional: "crescimento moderado",
    caracteristicas: [
      "Agricultura e pecuária desenvolvidas",
      "Comércio local em expansão",
      "Proximidade com rodovias importantes",
      "Desenvolvimento industrial incipiente",
      "Qualidade de vida rural",
    ],
    economia: "Agricultura, pecuária e comércio",
    destaque: "Cidade com forte vocação agropecuária e comércio em crescimento"
  },
  {
    nome: "Campo Magro",
    slug: "campo-magro",
    tipo: "rmc",
    populacao: 31500,
    empresas: 1400,
    crescimentoPopulacional: "crescimento constante",
    caracteristicas: [
      "Integração com Curitiba e Almirante Tamandaré",
      "Crescimento residencial",
      "Comércio local ativo",
      "Pequenas indústrias",
      "Desenvolvimento urbano planejado",
    ],
    economia: "Comércio, serviços e pequenas indústrias",
    destaque: "Cidade em crescimento com forte integração à região metropolitana"
  },
  {
    nome: "Lapa",
    slug: "lapa",
    tipo: "rmc",
    populacao: 48500,
    empresas: 2200,
    crescimentoPopulacional: "estável",
    caracteristicas: [
      "Cidade histórica com patrimônio preservado",
      "Turismo histórico e cultural",
      "Comércio tradicional",
      "Agricultura e pecuária",
      "Centro regional importante",
    ],
    economia: "Turismo, comércio, agricultura e pecuária",
    destaque: "Cidade histórica com turismo cultural consolidado e comércio tradicional"
  }
];

// Lista de todos os bairros de Curitiba (para usar APENAS na página de Curitiba)
export const BAIRROS_CURITIBA = [
  "Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória",
  "Atuba", "Bacacheri", "Bairro Alto", "Batel", "Bigorrilho", "Boa Vista",
  "Bom Retiro", "Boqueirão", "Cabral", "Cajuru", "Campo Comprido",
  "Capão da Imbuia", "Capão Raso", "Centro", "Centro Cívico", "CIC",
  "Cristo Rei", "Ecoville", "Fanny", "Fazendinha", "Guabirotuba",
  "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas",
  "Juvevê", "Lindóia", "Mercês", "Novo Mundo", "Parolin", "Pilarzinho",
  "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Santa Cândida",
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz",
  "São Francisco", "São Lourenço", "Seminário", "Sítio Cercado",
  "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Vila Izabel",
  "Vista Alegre", "Xaxim"
];