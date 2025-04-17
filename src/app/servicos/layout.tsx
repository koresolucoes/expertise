// Estrutura de página de serviços com subpáginas
import React from 'react'
import Link from 'next/link'

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-ciano-eletrico mb-8 text-center">Nossos Serviços</h1>
        <nav className="flex flex-wrap justify-center gap-6 mb-10">
          <Link href="/servicos/consultoria" className="hover:text-ciano-eletrico font-semibold">Consultoria</Link>
          <Link href="/servicos/implementacao" className="hover:text-ciano-eletrico font-semibold">Configuração & Implementação</Link>
          <Link href="/servicos/cursos" className="hover:text-ciano-eletrico font-semibold">Cursos</Link>
          <Link href="/servicos/suporte" className="hover:text-ciano-eletrico font-semibold">Suporte Técnico</Link>
        </nav>
        {children}
      </div>
    </main>
  )
}
