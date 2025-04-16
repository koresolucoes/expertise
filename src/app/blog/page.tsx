// Estrutura do blog: listagem de artigos
import React from 'react'

const posts = [
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
            <a key={post.title} href={post.href} className="bg-azul-petroleo rounded-xl p-8 shadow-lg flex flex-col hover:scale-105 transition-transform">
              <h2 className="text-xl font-semibold mb-2 text-ciano-eletrico">{post.title}</h2>
              <p className="text-gray-200 mb-1">{post.summary}</p>
              <span className="text-gray-400 text-xs mb-2">{post.date} — {post.author}</span>
              <span className="underline font-semibold">Ler artigo</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
