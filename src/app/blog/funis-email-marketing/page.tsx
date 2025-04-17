import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'

const nextHref = '/blog/tendencias-automacao-2025'
const prevHref = '/blog/comparativo-automacao'

export default function FunisEmailMarketingPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/funis-email-marketing.jpg" alt="Fluxo de automação de e-mail marketing desenhado em quadro branco" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">Funis de E-mail Marketing Automatizado: Como Criar Fluxos de Nutrição que Convertem</h1>
        <span className="text-gray-400 text-xs mb-2 block">2025-03-01 — Email Marketing Agency</span>
        <p className="text-lg mb-6">Descubra como criar funis de e-mail marketing automatizados que realmente convertem, com exemplos práticos de fluxos e mensagens eficazes.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Tipos de funis</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li><b>Boas-vindas:</b> Recepção de novos leads, apresentação da empresa e primeiros passos.</li>
          <li><b>Carrinho abandonado:</b> Recuperação de vendas perdidas com lembretes automáticos.</li>
          <li><b>Reengajamento:</b> Ativação de contatos inativos com ofertas ou conteúdos relevantes.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Gatilhos de automação</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Cadastro em formulário</li>
          <li>Download de material</li>
          <li>Inatividade por X dias</li>
          <li>Abandono de carrinho</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Exemplo de fluxo eficaz</h2>
        <ol className="mb-8 list-decimal pl-6 text-gray-200">
          <li>E-mail de boas-vindas imediato</li>
          <li>Conteúdo educativo após 2 dias</li>
          <li>Oferta especial após 5 dias</li>
          <li>Reengajamento após 14 dias sem interação</li>
        </ol>
        <nav className="flex justify-between mt-10">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <section className="mb-8">
          <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Sugestões de leitura</h3>
          <ul className="list-disc pl-6">
            <li><Link href="/blog/automacao-marketing" className="underline text-ciano-eletrico">Guia Definitivo de Automação de Marketing</Link></li>
            <li><Link href="/blog/metricas-kpis-automacao" className="underline text-ciano-eletrico">Métricas e KPIs em Automação</Link></li>
          </ul>
        </section>
        <BlogComments postSlug="funis-email-marketing" />
      </div>
    </main>
  )
}
