// Estrutura de artigo individual
import React from 'react'
import BlogLayout from '@/components/BlogLayout'
import Image from 'next/image'
import Link from 'next/link'


const nextHref = '/blog/caso-zapier'
const prevHref = '/blog/automacao-n8n'
const suggestions = [
  { href: '/blog/apis-webhooks', title: 'APIs e Webhooks: Manual Completo para Integração entre Sistemas' },
  { href: '/blog/funis-email-marketing', title: 'Funis de E-mail Marketing Automatizado' },
  { href: '/blog/comparativo-automacao', title: 'Comparativo das Principais Plataformas de Automação' },
]

export default function BlogPostPage() {
  return (
    <BlogLayout
      title="Integração de APIs sem código: Guia prático"
      image="/blog-images/apis-sem-codigo.jpg"
      date="2024-03-02"
      author="João Silva"
      prevHref={prevHref}
      nextHref={nextHref}
      prevLabel="Artigo anterior"
      nextLabel="Próximo artigo"
      suggestions={suggestions}
      postSlug="apis-sem-codigo"
    >
      {/* CONTEÚDO DO ARTIGO */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-lg mb-6 text-gray-200">Com o n8n, é possível conectar APIs e sistemas sem precisar programar. Use blocos visuais, configure autenticação e automatize tarefas rapidamente. Este guia mostra o passo a passo para integrações sem código.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-kore-destaque">Passo a passo para integração</h2>
        <ol className="mb-4 list-decimal pl-6 text-gray-200">
          <li>Escolha a API e obtenha a documentação</li>
          <li>Adicione o nó HTTP Request no n8n</li>
          <li>Configure autenticação (ex: token, OAuth2)</li>
          <li>Mapeie os dados de entrada e saída</li>
          <li>Teste e monitore o workflow</li>
        </ol>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-kore-destaque">Dicas de segurança</h2>
        <ul className="mb-4 list-disc pl-6 text-gray-200">
          <li>Armazene tokens em variáveis de ambiente</li>
          <li>Evite expor dados sensíveis em logs</li>
          <li>Utilize autenticação forte sempre que possível</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-kore-destaque">Publicando workflows eficientes</h2>
        <p className="mb-8 text-gray-200">Documente bem cada etapa, use nomes claros e monitore execuções para garantir estabilidade.</p>
      </section>



      

      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Quer receber novidades e dicas?</h3>
            <p className="text-kore-azul mb-2">Fale com a equipe Kore e entre para nossa lista VIP.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-center md:justify-start">
              <a href="mailto:koresoluciones@outlook.com" className="underline hover:text-kore-destaque">koresoluciones@outlook.com</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a>
            </div>
          </div>
          <Link href="/contato" className="cta-btn px-8 py-4 text-lg text-center">Entrar em Contato</Link>
        </div>
      </section>

      {/* COMENTÁRIOS */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        
      </section>
      {/* CTA FINAL */}
      <section className="w-full flex justify-center py-10 bg-gradient-to-t from-black via-kore-cinza to-transparent">
        <div className="bg-kore-ciano/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl max-w-2xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-kore-azul mb-2">Quer receber novidades e dicas?</h3>
            <p className="text-kore-azul mb-2">Fale com a equipe Kore e entre para nossa lista VIP.</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-center md:justify-start">
              <a href="mailto:koresoluciones@outlook.com" className="underline hover:text-kore-destaque">koresoluciones@outlook.com</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+5531991282843" className="underline hover:text-kore-destaque">+55 31 99128-2843</a>
            </div>
          </div>
          <Link href="/contato" className="cta-btn px-8 py-4 text-lg text-center">Entrar em Contato</Link>
        </div>
      </section>

      {/* COMENTÁRIOS */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        
      </section>
      {/* DEPOIMENTO DE LEITOR */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-kore-ciano mb-6 text-center">O que dizem nossos leitores</h2>
        <div className="bg-kore-cinza/90 rounded-xl p-8 flex flex-col items-center shadow-xl">
          <Image src="/leitor-exemplo.jpg" alt="Leitor satisfeito" width={64} height={64} className="rounded-full mb-4 shadow-lg border-2 border-kore-ciano" />
          <blockquote className="italic text-gray-200 text-center mb-2">“As dicas do blog Kore facilitaram meu aprendizado em automação!”</blockquote>
          <span className="font-bold text-kore-destaque">Lucas Oliveira</span>
          <span className="text-gray-400 text-sm">Desenvolvedor Júnior</span>
        </div>
      </section>
      
    </BlogLayout>
  )
}
