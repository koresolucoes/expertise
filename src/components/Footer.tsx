// Footer.tsx
// Rodapé com navegação, contato e direitos
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 py-8 text-gray-400 text-sm mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 mb-2 md:mb-0">
          <a href="/" className="hover:text-ciano-eletrico">Início</a>
          <a href="/servicos" className="hover:text-ciano-eletrico">Serviços</a>
          <a href="/cursos" className="hover:text-ciano-eletrico">Cursos</a>
          <a href="/sobre" className="hover:text-ciano-eletrico">Sobre Nós</a>
          <a href="/blog" className="hover:text-ciano-eletrico">Blog</a>
          <a href="/contato" className="hover:text-ciano-eletrico">Contato</a>
        </div>
        <div>
          <span>© {new Date().getFullYear()} Automação n8n. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
