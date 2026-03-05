export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "pwa-diario-de-bordo",
    title: "Barbearia",
    shortDescription: "Site desenvolvido utilizando conceitos do bootstrap.",
    longDescription:
      "Projeto de site responsivo em Bootstrap, com layout baseado em grid, navegação (navbar), seções em cards, formulário de contato e componentes prontos (botões, modais/alerts), garantindo rapidez no desenvolvimento, consistência visual e boa adaptação ao mobile.",
    technologies: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    repoUrl: "https://github.com/omeloluca-collab/barbearia-bootstrap.git",
    demoUrl: "https://github.com/omeloluca-collab/barbearia-bootstrap.git",
    images: [
      { src: "/projects/pwa/1.png", alt: "Tela inicial da Barbearia" },
      { src: "/projects/pwa/2.png", alt: "Continuação" },
    ],
  },
  {
    slug: "catalogo-react-ts",
    title: "Portal de Viagens",
    shortDescription: "Next.js com rotas baseadas em arquivos, CSS molules e etc.",
    longDescription:
      "Projeto em Next.js com App Router, páginas e componentes otimizados (Server/Client), rotas dinâmicas, consumo de API, formulários com validação e deploy em Vercel, priorizando performance, SEO e boa experiência em dispositivos móveis.",
    technologies: ["React", "TypeScript", "Next.js", "App Router"],
    repoUrl: "https://github.com/omeloluca-collab/portal-viagens.git",
    demoUrl: "https://github.com/omeloluca-collab/portal-viagens.git",
    images: [
      { src: "/projects/catalogo/1.png", alt: "Tela Inicial do Portal de Viagens" },
      { src: "/projects/catalogo/2.png", alt: "Tela de destinos" },
    ],
  },
  {
    slug: "micro-frontends",
    title: "Pet&Style",
    shortDescription: "Arquitetura utilizando conceitos do tailwind CSS",
    longDescription:
      "Projeto de site responsivo em Tailwind CSS, com layout mobile-first, seções em cards, navegação simples, componentes reutilizáveis e suporte a dark mode, focado em performance e consistência visual.",
    technologies: ["React", "Tailwind", "Flexbox e Grid"],
    repoUrl: "https://github.com/omeloluca-collab/Pet-Style.git",
    demoUrl: "https://github.com/omeloluca-collab/Pet-Style.git",
    images: [
      { src: "/projects/mfe/1.png", alt: "Tela inicial do Petshop" },
      { src: "/projects/mfe/2.png", alt: "Tela dos produtos" },
    ],
  },
];