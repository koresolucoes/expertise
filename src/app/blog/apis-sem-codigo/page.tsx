// Estrutura de artigo individual
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'

const nextHref = '/blog/caso-zapier'
const prevHref = '/blog/automacao-n8n'

const sugestoes = [
  { href: '/blog/apis-webhooks', title: 'APIs e Webhooks: Manual Completo para Integração entre Sistemas' },
  { href: '/blog/funis-email-marketing', title: 'Funis de E-mail Marketing Automatizado' },
]

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/apis-sem-codigo.jpg" alt="Integração de APIs sem código usando n8n" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">Integração de APIs sem código: Guia prático</h1>
        <span className="text-gray-400 text-xs mb-2 block">2024-03-02 — João Silva</span>
        <article className="text-gray-200 mb-6">
          <p className="mb-2">Com o n8n, é possível conectar APIs e sistemas sem precisar programar. Use blocos visuais, configure autenticação e automatize tarefas rapidamente.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Passo a passo para integração</h2>
          <ol className="mb-4 list-decimal pl-6">
            <li>Escolha a API e obtenha a documentação</li>
            <li>Adicione o nó HTTP Request no n8n</li>
            <li>Configure autenticação (ex: token, OAuth2)</li>
            <li>Mapeie os dados de entrada e saída</li>
            <li>Teste e monitore o workflow</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Dicas de segurança</h2>
          <ul className="mb-4 list-disc pl-6">
            <li>Armazene tokens em variáveis de ambiente</li>
            <li>Evite expor dados sensíveis em logs</li>
            <li>Utilize autenticação forte sempre que possível</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Publicando workflows eficientes</h2>
          <p className="mb-8">Documente bem cada etapa, use nomes claros e monitore execuções para garantir estabilidade.</p>
        </article>
        <nav className="flex justify-between mt-10 mb-8">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <section className="mb-8">
          <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Sugestões de leitura</h3>
          <ul className="list-disc pl-6">
            {sugestoes.map((s) => (
              <li key={s.href}><Link href={s.href} className="underline text-ciano-eletrico">{s.title}</Link></li>
            ))}
          </ul>
        </section>
        <BlogComments postSlug="apis-sem-codigo" />
      </div>
    </main>
  )
}
