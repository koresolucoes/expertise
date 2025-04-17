import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'

const nextHref = '/blog/recursos-n8n'
const prevHref = '/blog/lowcode-nocode'

export default function APIsWebhooksPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/apis-webhooks.jpg" alt="Integração entre sistemas via APIs e webhooks" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">APIs e Webhooks: Manual Completo para Integração entre Sistemas</h1>
        <span className="text-gray-400 text-xs mb-2 block">2025-01-08 — Bloomreach</span>
        <p className="text-lg mb-6">Aprenda como conectar sistemas diferentes usando APIs e webhooks, com exemplos práticos para CRM, ERP e marketing.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">O que são APIs?</h2>
        <p className="mb-4">APIs (Application Programming Interfaces) permitem que sistemas diferentes &quot;conversem&quot; entre si, trocando dados de forma padronizada.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">O que são webhooks?</h2>
        <p className="mb-4">Webhooks são notificações automáticas enviadas de um sistema para outro quando um evento ocorre (ex: novo lead cadastrado).</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Exemplo prático de integração</h2>
        <ol className="mb-8 list-decimal pl-6 text-gray-200">
          <li>Configurar webhook no CRM para disparar ao criar novo contato</li>
          <li>Receber dados via endpoint em ferramenta de automação (ex: n8n)</li>
          <li>Integrar com ERP e enviar e-mail automático</li>
        </ol>
        <nav className="flex justify-between mt-10">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <section className="mb-8">
          <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Sugestões de leitura</h3>
          <ul className="list-disc pl-6">
            <li><Link href="/blog/recursos-n8n" className="underline text-ciano-eletrico">Recursos Gratuitos para Aprender n8n</Link></li>
            <li><Link href="/blog/lowcode-nocode" className="underline text-ciano-eletrico">Top 10 Ferramentas Low‑Code/No‑Code</Link></li>
          </ul>
        </section>
        <BlogComments postSlug="apis-webhooks" />
      </div>
    </main>
  )
}
