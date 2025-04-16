// Página detalhada de Consultoria
import React from 'react'

export default function ConsultoriaPage() {
  return (
    <section className="bg-azul-petroleo bg-opacity-90 rounded-xl p-8 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-ciano-eletrico mb-4">Consultoria</h2>
      <p className="mb-2 text-gray-200">Diagnóstico completo, estratégia personalizada e planejamento de automação para empresas de todos os portes. Ideal para quem busca eficiência, integração e inovação.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-2">
        <li>Mapeamento de processos</li>
        <li>Identificação de oportunidades de automação</li>
        <li>Prototipação de fluxos no n8n</li>
        <li>Recomendações técnicas e roadmap</li>
      </ul>
      <a href="/contato" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Solicite uma proposta</a>
    </section>
  )
}
