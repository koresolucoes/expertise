// Estrutura de artigo individual
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogComments from '@/components/BlogComments'
import RelatedArticles from '@/components/RelatedArticles'
import { blogPosts } from '@/utils/blogMetadata'

const slug = 'automacao-n8n'
const post = blogPosts.find(p => p.slug === slug)
const nextHref = '/blog/apis-sem-codigo'
const prevHref = '/blog/metricas-kpis-automacao'

// Artigos relacionados automáticos (mesma categoria ou tag)
const related = blogPosts.filter(p => p.slug !== slug && p.categories.some(cat => post?.categories.includes(cat))).slice(0, 3)

export const metadata = {
  title: post?.title,
  description: post?.summary,
  openGraph: {
    title: post?.title,
    description: post?.summary,
    images: [post?.image],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-4 text-ciano-eletrico underline">← Voltar para o Blog</Link>
        <Image src={post?.image || '/blog-images/automacao-n8n.jpg'} alt={post?.title || 'Automação n8n integrando sistemas empresariais'} width={900} height={400} className="rounded-xl mb-6 w-full object-cover max-h-72" />
        <div className="flex flex-wrap gap-2 mb-2">
          {post?.categories.map(cat => (
            <span key={cat} className="bg-ciano-eletrico text-black text-xs px-2 py-1 rounded">{cat}</span>
          ))}
          {post?.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-ciano-eletrico text-xs px-2 py-1 rounded">#{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-6">{post?.title}</h1>
        <span className="text-gray-400 text-xs mb-2 block">{post?.date} — {post?.author}</span>
        <article className="text-gray-200 mb-6">
          <p className="mb-2">A automação de processos com n8n permite integrar sistemas, reduzir erros e aumentar a produtividade. Com fluxos personalizados, sua empresa pode escalar operações sem aumentar custos.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Principais vantagens do n8n</h2>
          <ul className="mb-4 list-disc pl-6">
            <li>Liberdade total para criar integrações personalizadas</li>
            <li>Sem limites de execuções</li>
            <li>Centenas de conectores prontos para uso</li>
            <li>Open source: você controla seus dados e fluxos</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Exemplo prático</h2>
          <p className="mb-4">Uma empresa de logística automatizou o envio de notificações para clientes e a atualização de status em tempo real, economizando 20 horas semanais.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Como começar</h2>
          <ol className="mb-6 list-decimal pl-6">
            <li>Mapeie processos manuais repetitivos</li>
            <li>Escolha conectores e crie seu primeiro fluxo visual</li>
            <li>Teste, monitore e otimize</li>
          </ol>
          <p>Descubra como aplicar automação no seu negócio e veja exemplos práticos em nossos cursos e consultorias!</p>
        </article>
        <nav className="flex justify-between mt-10 mb-8">
          <Link href={prevHref} className="text-ciano-eletrico underline">← Artigo anterior</Link>
          <Link href={nextHref} className="text-ciano-eletrico underline">Próximo artigo →</Link>
        </nav>
        <RelatedArticles articles={related.map(a => ({ href: `/blog/${a.slug}`, title: a.title }))} />
        <BlogComments postSlug="automacao-n8n" />
      </div>
    </main>
  )
}
