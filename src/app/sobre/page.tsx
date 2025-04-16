// Página Sobre Nós
import React from 'react'

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-4xl mx-auto bg-azul-petroleo rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-ciano-eletrico mb-4">Sobre Nós</h1>
        <h2 className="text-xl font-semibold text-verde-lima mb-2">Missão</h2>
        <p className="mb-4 text-gray-200">Impulsionar empresas com automação inteligente e acessível, promovendo inovação e eficiência.</p>
        <h2 className="text-xl font-semibold text-verde-lima mb-2">Visão</h2>
        <p className="mb-4 text-gray-200">Ser referência nacional em automação de processos com n8n e integração de sistemas.</p>
        <h2 className="text-xl font-semibold text-verde-lima mb-2">Valores</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-4">
          <li>Transparência</li>
          <li>Inovação</li>
          <li>Foco no cliente</li>
          <li>Ética e responsabilidade</li>
        </ul>
        <h2 className="text-xl font-semibold text-ciano-eletrico mb-2">Equipe</h2>
        <div className="flex flex-wrap gap-6">
          <div className="bg-black bg-opacity-40 rounded-xl p-4 flex-1 min-w-[180px]">
            <span className="font-bold text-ciano-eletrico">João Silva</span><br/>
            <span className="text-gray-300">Especialista em n8n</span>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-4 flex-1 min-w-[180px]">
            <span className="font-bold text-ciano-eletrico">Maria Souza</span><br/>
            <span className="text-gray-300">Instrutora & Suporte</span>
          </div>
        </div>
      </div>
    </main>
  )
}
