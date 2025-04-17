import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'

const nextHref = '/blog/ia-generativa-automacao'
const prevHref = '/blog/funis-email-marketing'

export default function TendenciasAutomacao2025Page() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/tendencias-automacao-2025.jpg" alt="Tecnologias de automação e tendências para 2025" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">13 Tendências de Automação para 2025 e Como se Preparar</h1>
        <span className="text-gray-400 text-xs mb-2 block">2025-02-18 — WebFX</span>
        <p className="text-lg mb-6">Confira as principais tendências em automação para 2025 e saiba como preparar sua empresa para o futuro digital.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Principais tendências</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Inteligência Artificial e Machine Learning</li>
          <li>Personalização em escala</li>
          <li>Voice bots e assistentes virtuais</li>
          <li>Automação omnichannel</li>
          <li>Integração de sistemas via APIs</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Como se preparar</h2>
        <ul className="mb-8 list-disc pl-6 text-gray-200">
          <li>Invista em capacitação da equipe</li>
          <li>Adote ferramentas flexíveis e escaláveis</li>
          <li>Monitore tendências e adapte processos rapidamente</li>
          <li>Teste novas tecnologias em projetos-piloto</li>
        </ul>
        <nav className="flex justify-between mt-10">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <section className="mb-8">
          <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Sugestões de leitura</h3>
          <ul className="list-disc pl-6">
            <li><Link href="/blog/ia-generativa-automacao" className="underline text-ciano-eletrico">IA Generativa em Automação de Conteúdo</Link></li>
            <li><Link href="/blog/lowcode-nocode" className="underline text-ciano-eletrico">Top 10 Ferramentas Low‑Code/No‑Code</Link></li>
          </ul>
        </section>
        <BlogComments postSlug="tendencias-automacao-2025" />
      </div>
    </main>
  )
}
