// Página individual de curso (exemplo para n8n Essencial)
import React from 'react'

export default function N8nEssencialPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-azul-petroleo rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-ciano-eletrico mb-4">n8n Essencial</h1>
        <p className="text-gray-200 mb-2">Automação do zero ao avançado. Aprenda a criar, integrar e otimizar fluxos com n8n.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-4">
          <li>Público-alvo: Iniciantes, profissionais de TI, empresas</li>
          <li>Pré-requisitos: Conhecimento básico de lógica</li>
          <li>Formato: Vídeo aulas, exercícios práticos, suporte ao aluno</li>
        </ul>
        <h2 className="text-xl font-semibold text-ciano-eletrico mb-2">Conteúdo Programático</h2>
        <ol className="list-decimal pl-6 text-gray-200 mb-4">
          <li>Introdução ao n8n e automação</li>
          <li>Instalação e primeiros passos</li>
          <li>Criação de workflows</li>
          <li>Integrações e exemplos práticos</li>
          <li>Boas práticas e dicas avançadas</li>
        </ol>
        <span className="text-magenta font-bold text-lg mb-2 block">R$ 399</span>
        <a href="/contato" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Inscreva-se</a>
      </div>
    </main>
  )
}
