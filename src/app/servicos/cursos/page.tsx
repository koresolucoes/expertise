// Página detalhada de Cursos
import React from 'react'

export default function CursosPage() {
  return (
    <section className="bg-azul-petroleo bg-opacity-90 rounded-xl p-8 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-ciano-eletrico mb-4">Cursos</h2>
      <p className="mb-2 text-gray-200">Capacite sua equipe ou aprenda do zero ao avançado sobre automação com n8n. Cursos online, presenciais e sob demanda, com abordagem prática e instrutores certificados.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-2">
        <li>Do básico ao avançado</li>
        <li>Conteúdo atualizado e focado no mercado</li>
        <li>Certificação e suporte ao aluno</li>
      </ul>
      <a href="/cursos" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Ver todos os cursos</a>
    </section>
  )
}
