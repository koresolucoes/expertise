'use client'
// Página de contato detalhada
import React, { useState } from 'react'

export default function ContatoPage() {
  const [status, setStatus] = useState<'idle'|'sucesso'|'erro'>('idle')
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-xl mx-auto bg-azul-petroleo rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-ciano-eletrico mb-4">Fale Conosco</h1>
        <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setStatus('sucesso') }}>
          <input required name="nome" placeholder="Nome" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <input required name="email" type="email" placeholder="E-mail" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <input name="telefone" placeholder="Telefone" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <input required name="assunto" placeholder="Assunto" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" />
          <textarea required name="mensagem" placeholder="Mensagem" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ciano-eletrico" rows={5} />
          <button type="submit" className="px-6 py-3 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold shadow-lg hover:scale-105 transition-transform">Enviar</button>
          {status === 'sucesso' && <span className="text-verde-lima font-semibold mt-2">Mensagem enviada com sucesso!</span>}
          {status === 'erro' && <span className="text-magenta font-semibold mt-2">Erro ao enviar. Tente novamente.</span>}
        </form>
        <div className="mt-8 text-gray-200">
          <p><b>Email:</b> contato@seudominio.com</p>
          <p><b>Telefone:</b> (11) 99999-9999</p>
          {/* Mapa interativo pode ser adicionado aqui com iframe do Google Maps */}
        </div>
      </div>
    </main>
  )
}
