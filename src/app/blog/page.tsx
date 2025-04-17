// Estrutura do blog: listagem de artigos
import React from 'react'
import Link from 'next/link'
// A navegação principal já está presente via MainNav

const posts = [
  {
    title: 'Guia Definitivo de Automação de Marketing: Estratégias, Ferramentas e Implementação',
    summary: 'Um artigo completo explicando o que é automação de marketing, seus benefícios e passo a passo de implementação com melhores práticas do mercado.',
    date: '2025-04-17',
    author: 'Bloomreach',
    href: '/blog/automacao-marketing',
    image: '',
  },
  {
    title: 'Estudo de Caso: Aumento de Produtividade com Zapier em Pequenas Empresas',
    summary: 'Mostre como empresas reais economizaram tempo e recursos usando workflows no Zapier, incluindo métricas de eficiência e aprendizados práticos.',
    date: '2025-04-10',
    author: 'BenchmarkONE',
    href: '/blog/caso-zapier',
    image: '',
  },
  {
    title: 'Transformação Digital com n8n: Caso de Sucesso em Startup Brasileira',
    summary: 'Detalhe um projeto fictício ou real que demonstre como uma startup brasileira adotou n8n para automatizar processos internos, com resultados e desafios superados.',
    date: '2025-03-28',
    author: 'Medium',
    href: '/blog/startup-n8n',
    image: '',
  },
  {
    title: 'Comparativo das Principais Plataformas de Automação: Zapier, Make, n8n e Power Automate',
    summary: 'Faça uma análise objetiva das funcionalidades, preços e integrações de cada ferramenta, ajudando o leitor a escolher a solução ideal.',
    date: '2025-03-15',
    author: 'BenchmarkONE, n8n Docs',
    href: '/blog/comparativo-automacao',
    image: '',
  },
  {
    title: 'Funis de E-mail Marketing Automatizado: Como Criar Fluxos de Nutrição que Convertem',
    summary: 'Explique tipos de funil (boas-vindas, carrinho abandonado, reengajamento), gatilhos e exemplos de mensagens eficazes.',
    date: '2025-03-01',
    author: 'Email Marketing Agency',
    href: '/blog/funis-email-marketing',
    image: '',
  },
  {
    title: '13 Tendências de Automação para 2025 e Como se Preparar',
    summary: 'Apresente as principais tendências em automação (IA, personalização, voice bots, etc.) e orientações para implementar essas inovações.',
    date: '2025-02-18',
    author: 'WebFX',
    href: '/blog/tendencias-automacao-2025',
    image: '',
  },
  {
    title: 'IA Generativa em Automação de Conteúdo: O Futuro da Criação de Textos',
    summary: 'Discuta como modelos de linguagem (LLMs) podem ser incorporados em fluxos de automação para gerar descrições de produtos, posts e e-mails de forma escalável.',
    date: '2025-02-03',
    author: 'arXiv',
    href: '/blog/ia-generativa-automacao',
    image: '',
  },
  {
    title: 'Top 10 Ferramentas Low‑Code/No‑Code para Automação de Processos',
    summary: 'Liste e descreva plataformas como Zapier, Make, n8n, Integromat, Power Automate, Airtable Automations, etc., com prós e contras.',
    date: '2025-01-22',
    author: 'factbites.com',
    href: '/blog/lowcode-nocode',
    image: '',
  },
  {
    title: 'APIs e Webhooks: Manual Completo para Integração entre Sistemas',
    summary: 'Um tutorial técnico mostrando como configurar webhooks, autenticação de APIs REST e exemplos práticos de integração entre CRM, ERP e ferramentas de marketing.',
    date: '2025-01-08',
    author: 'Bloomreach',
    href: '/blog/apis-webhooks',
    image: '',
  },
  {
    title: 'Recursos Gratuitos para Aprender n8n: Tutoriais, Vídeos e Cursos',
    summary: 'Compile links para cursos oficiais, vídeos no YouTube e guias passo a passo da documentação de n8n, facilitando o aprendizado autodirigido.',
    date: '2024-12-20',
    author: 'n8n Docs',
    href: '/blog/recursos-n8n',
    image: '',
  },
  {
    title: 'Métricas e KPIs em Automação: Como Monitorar Resultados e Otimizar Fluxos',
    summary: 'Explique indicadores essenciais (tempo economizado, ROI, taxa de erro), ferramentas de monitoramento e dashboards recomendados.',
    date: '2024-12-01',
    author: 'explodingtopics.com',
    href: '/blog/metricas-kpis-automacao',
    image: '',
  },
  // Entradas antigas
  {
    title: 'Como a automação com n8n pode transformar seu negócio',
    summary: 'Descubra os principais benefícios da automação inteligente usando n8n.',
    date: '2024-03-10',
    author: 'Equipe n8n',
    href: '/blog/automacao-n8n',
    image: '',
  },
  {
    title: 'Integração de APIs sem código: Guia prático',
    summary: 'Veja como conectar sistemas rapidamente usando n8n, sem programar.',
    date: '2024-03-02',
    author: 'João Silva',
    href: '/blog/apis-sem-codigo',
    image: '',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-ciano-eletrico mb-8 text-center">Blog & Recursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="bg-azul-petroleo rounded-xl p-8 shadow-lg flex flex-col hover:scale-105 transition-transform">

              <h2 className="text-xl font-semibold mb-2 text-ciano-eletrico">{post.title}</h2>
              <p className="text-gray-200 mb-1">{post.summary}</p>
              <span className="text-gray-400 text-xs mb-2">{post.date} — {post.author}</span>
              <span className="underline font-semibold">Ler artigo</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
