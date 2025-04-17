import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Automação com n8n | Consultoria e Cursos',
  description: 'Especialistas em automação de processos com n8n. Consultoria, implementação, cursos e suporte para empresas.',
  keywords: ['n8n', 'automação', 'consultoria', 'integração', 'cursos', 'suporte'],
  openGraph: {
    title: 'Automação com n8n | Consultoria e Cursos',
    description: 'Especialistas em automação de processos com n8n. Consultoria, implementação, cursos e suporte para empresas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    siteName: 'Automação n8n',
  },
  robots: 'index, follow',
}

import MainNav from '@/components/MainNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-azul-petroleo text-white min-h-screen`}>
        <MainNav />
        {children}
      </body>
    </html>
  )
}
