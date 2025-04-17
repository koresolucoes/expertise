// Página detalhada de Configuração & Implementação
import React from 'react'
import Link from 'next/link'

export default function ImplementacaoPage() {
  return (
    <section className="bg-azul-petroleo bg-opacity-90 rounded-xl p-8 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-ciano-eletrico mb-4">Configuração & Implementação</h2>
      <p className="mb-2 text-gray-200">Implementação completa do n8n, integrações com sistemas, APIs e automação de fluxos sob medida.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-2">
        <li>Instalação e setup do n8n</li>
        <li>Integração com ERPs, CRMs, bancos de dados, APIs</li>
        <li>Exemplos de automações: notificações, ETL, sincronização de dados</li>
        <li>Documentação e treinamento</li>
      </ul>
      <Link href="/contato" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Solicite orçamento</Link>
    </section>
  )
}
