import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const nextHref = '/blog/automacao-marketing'
const prevHref = '/blog/recursos-n8n'

export default function MetricasKPIsAutomacaoPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/metricas-kpis-automacao.jpg" alt="Painel de métricas e KPIs em automação" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">Métricas e KPIs em Automação: Como Monitorar Resultados e Otimizar Fluxos</h1>
        <span className="text-gray-400 text-xs mb-2 block">2024-12-01 — explodingtopics.com</span>
        <p className="text-lg mb-6">Descubra os principais indicadores para medir o sucesso das suas automações e como usar dashboards para otimizar resultados.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Indicadores essenciais</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Tempo economizado (horas/mês)</li>
          <li>ROI das automações</li>
          <li>Taxa de erro ou falhas</li>
          <li>Número de processos automatizados</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Ferramentas de monitoramento</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Google Data Studio</li>
          <li>Power BI</li>
          <li>Dashboards nativos das plataformas de automação</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Exemplo de dashboard</h2>
        <p className="mb-8">Um dashboard simples pode mostrar: número de execuções, tempo economizado, falhas e impacto financeiro das automações.</p>
        <nav className="flex justify-between mt-10">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
      </div>
    </main>
  )
}
