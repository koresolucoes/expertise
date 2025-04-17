import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'

const nextHref = '/blog/startup-n8n'
const prevHref = '/blog/automacao-marketing'

export default function CasoZapierPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src="/blog-images/caso-zapier.jpg" alt="Equipe de pequenas empresas usando Zapier no computador" width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">Estudo de Caso: Aumento de Produtividade com Zapier em Pequenas Empresas</h1>
        <span className="text-gray-400 text-xs mb-2 block">2025-04-10 — BenchmarkONE</span>
        <p className="text-lg mb-6">Neste estudo de caso, mostramos como pequenas empresas conseguiram automatizar processos e economizar tempo usando o Zapier. Veja métricas reais, aprendizados e dicas práticas para aplicar na sua empresa.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Desafio</h2>
        <p className="mb-4">Pequenas empresas frequentemente enfrentam falta de tempo e equipe reduzida. Muitas tarefas, como envio de propostas, atualização de planilhas e notificações, eram feitas manualmente.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Solução implementada</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Integração do CRM com Google Sheets para atualizar leads automaticamente</li>
          <li>Envio de e-mails automáticos ao receber novos contatos</li>
          <li>Alertas no Slack para novos pedidos</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Resultados</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Redução de 12 horas semanais em tarefas repetitivas</li>
          <li>Menos erros de digitação e atualização</li>
          <li>Equipe mais focada em atividades estratégicas</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Dicas práticas</h2>
        <ul className="mb-8 list-disc pl-6 text-gray-200">
          <li>Mapeie tarefas repetitivas e busque integrações nativas</li>
          <li>Comece com fluxos simples e evolua</li>
          <li>Use filtros e condições para personalizar automações</li>
        </ul>
        <nav className="flex justify-between mt-10">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <section className="mb-8">
          <h3 className="text-xl text-ciano-eletrico font-semibold mb-2">Sugestões de leitura</h3>
          <ul className="list-disc pl-6">
            <li><Link href="/blog/lowcode-nocode" className="underline text-ciano-eletrico">Top 10 Ferramentas Low‑Code/No‑Code</Link></li>
            <li><Link href="/blog/recursos-n8n" className="underline text-ciano-eletrico">Recursos Gratuitos para Aprender n8n</Link></li>
          </ul>
        </section>
        <BlogComments postSlug="caso-zapier" />
      </div>
    </main>
  )
}
