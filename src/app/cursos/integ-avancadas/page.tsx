// Página individual de curso (exemplo para Integrações Avançadas)
import React from 'react'

export default function IntegAvancadasPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-azul-petroleo rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-ciano-eletrico mb-4">Integrações Avançadas</h1>
        <p className="text-gray-200 mb-2">Domine integrações complexas, APIs, webhooks e automações personalizadas no n8n.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-4">
          <li>Público-alvo: Profissionais de TI, desenvolvedores, empresas</li>
          <li>Pré-requisitos: Conhecimento prévio em n8n</li>
          <li>Formato: Vídeo aulas, projetos práticos, suporte ao aluno</li>
        </ul>
        <h2 className="text-xl font-semibold text-ciano-eletrico mb-2">Conteúdo Programático</h2>
        <ol className="list-decimal pl-6 text-gray-200 mb-4">
          <li>APIs e autenticação</li>
          <li>Webhooks e triggers</li>
          <li>Integração com bancos de dados</li>
          <li>Projetos de automação avançada</li>
          <li>Monitoramento e troubleshooting</li>
        </ol>
        <span className="text-magenta font-bold text-lg mb-2 block">R$ 599</span>
        <a href="/contato" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Inscreva-se</a>
      </div>
    </main>
  )
}
