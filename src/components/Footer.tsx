// Footer.tsx
// Rodapé com navegação, contato e direitos
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-95 w-full py-6 px-2 text-gray-400 text-sm mt-8">
      <div className="w-full flex flex-col sm:flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-4 px-2 md:px-4 text-center">
        <div className="flex flex-col sm:flex-col md:flex-row gap-2 md:gap-6 mb-2 md:mb-0 items-center">
          <Link href="/" className="hover:text-ciano-eletrico">Início</Link>
          <Link href="/servicos" className="hover:text-ciano-eletrico">Serviços</Link>
          <Link href="/cursos" className="hover:text-ciano-eletrico">Cursos</Link>
          <Link href="/sobre" className="hover:text-ciano-eletrico">Sobre Nós</Link>
          <Link href="/blog" className="hover:text-ciano-eletrico">Blog</Link>
          <Link href="/contato" className="hover:text-ciano-eletrico">Contato</Link>
          <Link href="/politica-de-privacidade" className="hover:text-ciano-eletrico">Política de Privacidade</Link>
          <Link href="/termos-de-uso" className="hover:text-ciano-eletrico">Termos de Uso</Link>
        </div>
        <div>
          <span>© {new Date().getFullYear()} Kore. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
