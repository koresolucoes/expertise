// Página principal de Serviços
import Link from 'next/link'

export default function ServicosPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-ciano-eletrico">Nossos Serviços</h1>
      <p className="mb-8 text-lg text-white/90 max-w-2xl">
        Oferecemos soluções completas de automação de processos utilizando n8n, com foco em resultados reais para sua empresa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#14213d] rounded-xl p-6 shadow-lg border border-[#223]">
          <h2 className="text-xl font-semibold text-verde-lima mb-2">Consultoria Especializada</h2>
          <p className="mb-4 text-white/80">Diagnóstico, planejamento e estratégia para automação eficiente.</p>
          <Link href="/servicos/consultoria" className="text-ciano-eletrico hover:underline">Saiba mais</Link>
        </div>
        <div className="bg-[#14213d] rounded-xl p-6 shadow-lg border border-[#223]">
          <h2 className="text-xl font-semibold text-magenta mb-2">Implementação</h2>
          <p className="mb-4 text-white/80">Desenvolvimento, integração e entrega de fluxos automatizados.</p>
          <Link href="/servicos/implementacao" className="text-ciano-eletrico hover:underline">Saiba mais</Link>
        </div>
        <div className="bg-[#14213d] rounded-xl p-6 shadow-lg border border-[#223]">
          <h2 className="text-xl font-semibold text-ciano-eletrico mb-2">Cursos e Treinamentos</h2>
          <p className="mb-4 text-white/80">Capacite sua equipe para dominar o n8n e automações avançadas.</p>
          <Link href="/servicos/cursos" className="text-ciano-eletrico hover:underline">Saiba mais</Link>
        </div>
        <div className="bg-[#14213d] rounded-xl p-6 shadow-lg border border-[#223]">
          <h2 className="text-xl font-semibold text-verde-lima mb-2">Suporte Técnico</h2>
          <p className="mb-4 text-white/80">Acompanhamento, manutenção e suporte contínuo para seu ambiente automatizado.</p>
          <Link href="/servicos/suporte" className="text-ciano-eletrico hover:underline">Saiba mais</Link>
        </div>
      </div>
      <p className="text-white/60 text-sm">Entre em contato para receber uma proposta personalizada.</p>
    </div>
  )
}
