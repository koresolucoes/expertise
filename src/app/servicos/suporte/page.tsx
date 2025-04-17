// Página detalhada de Suporte Técnico
import React from 'react'
import Link from 'next/link'

export default function SuportePage() {
  return (
    <section className="bg-azul-petroleo bg-opacity-90 rounded-xl p-8 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-ciano-eletrico mb-4">Suporte Técnico</h2>
      <p className="mb-2 text-gray-200">Planos de suporte para ambientes de automação, com SLA, monitoramento e atendimento personalizado.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-2">
        <li>Atendimento via chat, e-mail e telefone</li>
        <li>Planos mensais e sob demanda</li>
        <li>Monitoramento proativo</li>
        <li>Resolução rápida de incidentes</li>
      </ul>
      <Link href="/contato" className="inline-block mt-4 px-6 py-2 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold hover:scale-105 transition-transform">Fale com nosso suporte</Link>
    </section>
  )
}
