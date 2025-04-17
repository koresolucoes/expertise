import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'

const nextHref = '/blog/metricas-kpis-automacao'
const prevHref = '/blog/apis-webhooks'

export default function RecursosN8nPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/recursos-n8n.jpg" alt="Recursos gratuitos para aprender n8n" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">Recursos Gratuitos para Aprender n8n: Tutoriais, Vídeos e Cursos</h1>
        <span className="text-gray-400 text-xs mb-2 block">2024-12-20 — n8n Docs</span>
        <p className="text-lg mb-6">Quer aprender n8n do zero? Veja uma seleção dos melhores recursos gratuitos para dominar automação com n8n.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Documentação oficial</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li><a href="https://docs.n8n.io/" className="underline text-ciano-eletrico" target="_blank">docs.n8n.io</a></li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Vídeos e cursos</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li><a href="https://www.youtube.com/c/n8n" className="underline text-ciano-eletrico" target="_blank">YouTube n8n</a></li>
          <li><a href="https://www.udemy.com/course/n8n-automacoes/" className="underline text-ciano-eletrico" target="_blank">Curso Udemy (PT)</a></li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Tutoriais práticos</h2>
        <ul className="mb-8 list-disc pl-6 text-gray-200">
          <li><a href="https://community.n8n.io/c/tutorials/10" className="underline text-ciano-eletrico" target="_blank">Tutoriais na comunidade n8n</a></li>
        </ul>
        <nav className="flex justify-between mt-10">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <section className="mb-8">
          <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Sugestões de leitura</h3>
          <ul className="list-disc pl-6">
            <li><Link href="/blog/metricas-kpis-automacao" className="underline text-ciano-eletrico">Métricas e KPIs em Automação</Link></li>
            <li><Link href="/blog/automacao-n8n" className="underline text-ciano-eletrico">Como a automação com n8n pode transformar seu negócio</Link></li>
          </ul>
        </section>
        <BlogComments postSlug="recursos-n8n" />
      </div>
    </main>
  )
}
