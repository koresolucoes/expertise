// Estrutura de página de serviços com subpáginas
import React from 'react'

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-ciano-eletrico mb-8 text-center">Nossos Serviços</h1>
        <nav className="flex flex-wrap justify-center gap-6 mb-10">
          <a href="/servicos/consultoria" className="hover:text-ciano-eletrico font-semibold">Consultoria</a>
          <a href="/servicos/implementacao" className="hover:text-ciano-eletrico font-semibold">Configuração & Implementação</a>
          <a href="/servicos/cursos" className="hover:text-ciano-eletrico font-semibold">Cursos</a>
          <a href="/servicos/suporte" className="hover:text-ciano-eletrico font-semibold">Suporte Técnico</a>
        </nav>
        {children}
      </div>
    </main>
  )
}
