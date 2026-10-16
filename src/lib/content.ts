// src/lib/content.ts
// Fonte única de verdade para TODO o conteúdo textual e dados do site.
// Os componentes apenas renderizam — editar conteúdo aqui sem tocar em layout.
//
// Convenção de destaque nos títulos:
//   **texto** → <em> com cor brand (laranja). O componente SectionTitle processa isso.

const currentYear = new Date().getFullYear();
const experienceYears = currentYear - 2003;

export const siteContent = {
  // ─────────────────────────────────────────────────────
  // Meta / SEO
  // ─────────────────────────────────────────────────────
  meta: {
    siteUrl: "https://www.gpx7.com.br", // [PENDENTE] domínio final
  },

  // ─────────────────────────────────────────────────────
  // Contatos diretos (usados no rodapé, seção contato e JSON-LD)
  // ─────────────────────────────────────────────────────
  contact: {
    phone: "(62) 3200-0000", // Altere aqui o telefone fixo
    whatsapp: "https://wa.me/5562999999999", // Altere aqui o link do WhatsApp
    whatsappDisplay: "(62) 99999-9999", // Altere aqui o número visível do WhatsApp
    email: "contato@gpx7.com.br", // Altere aqui o e-mail de contato
    instagram: "https://instagram.com/gpx7audiovisual", // Altere aqui o link do Instagram
    instagramDisplay: "@gpx7audiovisual", // Altere aqui o @ do Instagram
    address: "Goiânia - GO · Atendimento em todo o Brasil", // Altere aqui o endereço/cidade
    hours: "Segunda a Sexta: 08h às 18h · Plantão técnico em eventos", // Horário de funcionamento
    city: "Goiânia / GO",
    foundedYear: 2003,
  },

  // ─────────────────────────────────────────────────────
  // Navegação do Header
  // ─────────────────────────────────────────────────────
  navigation: [
    { label: "Home", href: "/#hero" },
    { label: "GPX7", href: "/#quem-somos" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Contato", href: "/#contato" },
  ],

  // ─────────────────────────────────────────────────────
  // Faixa de segmentos
  // ─────────────────────────────────────────────────────
  segments: [
    "CONGRESSOS",
    "FEIRAS",
    "CONVENÇÕES",
    "AUDITÓRIOS",
    "TRANSMISSÕES",
  ],

  // ─────────────────────────────────────────────────────
  // Hero
  // ─────────────────────────────────────────────────────
  hero: {
    eyebrow: "Eventos corporativos · Desde 2003",
    // Marcação: **texto** → <em> laranja
    title: "Tecnologia, estrutura e **excelência** em cada detalhe.",
    text: "Audiovisual, informática e iluminação para congressos, feiras e convenções, com estrutura própria e equipe técnica especializada.",
    cta: {
      label: "Fale com a GPX7",
      href: "/#contato",
    },
  },

  // ─────────────────────────────────────────────────────
  // Quem somos
  // ─────────────────────────────────────────────────────
  about: {
    eyebrow: "Quem somos",
    // {anos} será substituído dinamicamente
    title: `Há **${experienceYears} anos** fazendo eventos **acontecerem**.`,
    lead: "Fundada em Goiânia em 2003, a GPX7 transforma ideias em eventos bem executados, de projetos de diferentes portes a grandes encontros científicos e setoriais.",
    stats: [
      { value: "2003", label: "fundada em Goiânia" },
      { value: String(experienceYears), label: "anos de experiência" },
      { value: "Própria", label: "estrutura e equipe técnica" },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Soluções completas
  // ─────────────────────────────────────────────────────
  solutions: {
    eyebrow: "Soluções completas",
    title: "Tudo o que o seu evento precisa, **em um só parceiro**.",
    cta: {
      label: "Conhecer todos os serviços em detalhes",
      href: "/servicos",
    },
    items: [
      {
        id: "video",
        icon: "Monitor",
        title: "Vídeo e projeção",
        text: "Painéis de LED, projetores e telas para apresentações simultâneas.",
      },
      {
        id: "audio",
        icon: "Mic",
        title: "Áudio",
        text: "Sonorização, microfones e sistemas para tradução simultânea.",
      },
      {
        id: "lighting",
        icon: "Lightbulb",
        title: "Iluminação",
        text: "PAR LED decorativo, canhões de luz e moving heads.",
      },
      {
        id: "it",
        icon: "Laptop",
        title: "Informática",
        text: "Computadores e soluções técnicas para apresentações.",
      },
      {
        id: "streaming",
        icon: "Radio",
        title: "Transmissão",
        text: "Recursos técnicos para transmissão e apresentações híbridas.",
      },
      {
        id: "operation",
        icon: "Wrench",
        title: "Operação técnica",
        text: "Montagem, suporte e operação durante todo o evento.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Formatos de evento
  // ─────────────────────────────────────────────────────
  formats: {
    eyebrow: "Formatos",
    title: "Estrutura para **cada tipo** de evento.",
    items: [
      {
        id: "congressos",
        label: "Congressos e auditórios",
        image: "/images/formatos/congressos.jpeg",
        alt: "Auditório com painel de LED durante congresso",
      },
      {
        id: "salas-simultaneas",
        label: "Salas simultâneas",
        image: "/images/formatos/salas-simultaneas.jpeg",
        alt: "Salas equipadas para sessões simultâneas em congresso",
      },
      {
        id: "feiras",
        label: "Feiras e estandes",
        image: "/images/formatos/feiras.jpeg",
        alt: "Estrutura audiovisual em feira e estandes corporativos",
      },
      {
        id: "convencoes",
        label: "Convenções corporativas",
        image: "/images/formatos/convencoes.jpeg",
        alt: "Palco e iluminação em convenção corporativa",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Processo
  // ─────────────────────────────────────────────────────
  process: {
    eyebrow: "Cada evento é único",
    title: "Nossa solução **também**.",
    lead: "Nenhum evento é receita de bolo. Entendemos seus objetivos, avaliamos o espaço e adaptamos a estrutura técnica para entregar uma experiência bem executada.",
    steps: [
      {
        number: "01",
        title: "Projeto",
        description: "Planejamento da estrutura",
      },
      {
        number: "02",
        title: "Montagem",
        description: "Instalação dos equipamentos",
      },
      {
        number: "03",
        title: "Operação",
        description: "Equipe técnica especializada",
      },
      {
        number: "04",
        title: "Suporte",
        description: "Durante todo o evento",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Eventos atendidos
  // ─────────────────────────────────────────────────────
  events: {
    eyebrow: "Eventos que já atendemos",
    title: "Experiência que **gera confiança**.",
    items: [
      {
        id: "cirurgia",
        label: "Cirurgia Cardiovascular",
        image: "/images/eventos/cirurgia-cardiovascular.jpg",
        alt: "Congresso de Cirurgia Cardiovascular com estrutura GPX7",
      },
      {
        id: "ficomex",
        label: "FICOMEX",
        image: "/images/eventos/ficomex.jpeg",
        alt: "Feira FICOMEX com suporte audiovisual GPX7",
      },
      {
        id: "expopecas",
        label: "ExpoPeças",
        image: "/images/eventos/expopecas.jpeg",
        alt: "ExpoPeças com estrutura de som e vídeo GPX7",
      },
      {
        id: "fast-summit",
        label: "Fast Summit",
        image: "/images/eventos/fast-summit.jpg",
        alt: "Fast Summit com suporte técnico audiovisual GPX7",
      },
      {
        id: "hackathon",
        label: "Hackathon Saúde Digital",
        image: "/images/eventos/hackathon-saude-digital.jpg",
        alt: "Hackathon Saúde Digital com estrutura GPX7",
      },
      {
        id: "ficomex-arena",
        label: "FICOMEX Arena",
        image: "/images/eventos/ficomex-arena.jpeg",
        alt: "FICOMEX Arena com palco e iluminação GPX7",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Por que a GPX7
  // ─────────────────────────────────────────────────────
  whyGpx7: {
    eyebrow: "Por que a GPX7",
    title: "Por que **escolher** a GPX7?",
    items: [
      {
        number: "01",
        title: "Atendimento premium",
        description:
          "Entendemos a necessidade de cada cliente e transformamos ideias em realidade.",
      },
      {
        number: "02",
        title: "Tecnologia e equipe próprias",
        description:
          "Estrutura técnica e profissionais especializados em soluções integradas.",
      },
      {
        number: "03",
        title: "Experiência de mercado",
        description:
          "Mais de duas décadas em eventos de diferentes portes e segmentos.",
      },
      {
        number: "04",
        title: "Soluções personalizadas",
        description:
          "Adaptamos tudo aos objetivos do projeto e às possibilidades do local.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Página /servicos — detalhamento por grupo
  // ─────────────────────────────────────────────────────
  servicesPage: {
    eyebrow: "Estrutura completa · Em detalhes",
    title: "Soluções completas para **transformar** seu evento.",
    lead: "Quatro frentes técnicas com equipamentos próprios para congressos, feiras, convenções e transmissões.",
    groups: [
      {
        id: "video",
        icon: "Monitor",
        title: "Vídeo",
        groups: [
          {
            items: [
              "Projetor 3000 ANSI lumens Full HD para salas",
              "Projetor 6000 ANSI lumens para auditório",
              "Telas para projeção de diversos tamanhos",
              "Painel de LED indoor e processadoras de vídeo",
              "Monitor ou TV de cronômetro (house clock)",
              "TVs com suporte para stand ou ao longo dos eventos",
            ],
          },
        ],
      },
      {
        id: "som-luz-estrutura",
        icon: "Lightbulb",
        title: "Som, luz e estrutura",
        groups: [
          {
            label: "Luz",
            items: [
              "PAR LED decorativos",
              "Refletores de LED e canhão",
              "Ribalta de LED",
              "Moving beams",
              "Mesa controladora de luz",
            ],
          },
          {
            label: "Som e estrutura",
            items: [
              "Microfones bastão e headset",
              "Sistemas de som e caixas amplificadas",
              "Mesas de som",
              "Estruturas de treliça Q15 e palco",
            ],
          },
        ],
      },
      {
        id: "informatica-transmissao",
        icon: "Laptop",
        title: "Informática e transmissão",
        groups: [
          {
            items: [
              "Notebooks e computadores",
              "Impressoras térmicas de adesivo",
              "Impressoras monocromáticas e coloridas",
              "Câmeras profissionais e tripé",
              "Placas de captura e switchers de vídeo",
            ],
          },
        ],
      },
      {
        id: "comunicacao-visual",
        icon: "Palette",
        title: "Comunicação visual",
        groups: [
          {
            items: [
              "Fabricação de lonas personalizadas",
              "Adesivos personalizados para stand",
              "Banners X1 e roll-up",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // Contato / CTA
  // ─────────────────────────────────────────────────────
  contactSection: {
    eyebrow: "Próximo passo",
    title: "Vamos realizar seu **próximo evento**?",
    lead: "Conte com a GPX7 para transformar seu projeto em uma experiência bem planejada e executada.",
    submitLabel: "Solicitar contato",
    successMessage:
      "Mensagem enviada! Retornaremos em breve.",
    errorMessage:
      "Não foi possível enviar. Tente novamente ou fale pelo e-mail/telefone abaixo.",
    lgpdConsent:
      "Concordo em ser contatado e com o uso dos meus dados para retorno deste pedido.",
  },

  // ─────────────────────────────────────────────────────
  // Footer
  // ─────────────────────────────────────────────────────
  footer: {
    tagline: "Soluções audiovisuais para eventos corporativos",
    privacyLink: null as string | null, // [PENDENTE] link para política de privacidade
  },
};

export type SiteContent = typeof siteContent;
