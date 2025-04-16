// Estrutura de artigo individual
import React from 'react'

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-azul-petroleo rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-ciano-eletrico mb-4">Integração de APIs sem código: Guia prático</h1>
        <div className="text-gray-400 text-sm mb-4">02/03/2024 — João Silva</div>
        <article className="text-gray-200 mb-4">
          <p>Com o n8n, é possível conectar APIs e sistemas sem precisar programar. Use blocos visuais, configure autenticação e automatize tarefas rapidamente.</p>
          <p>Este guia mostra o passo a passo para criar integrações, dicas de segurança e como publicar workflows eficientes.</p>
        </article>
        <a href="/blog" className="text-ciano-eletrico underline">← Voltar para o blog</a>
      </div>
    </main>
  )
}
