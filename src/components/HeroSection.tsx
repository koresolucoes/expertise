// HeroSection.tsx
// Seção hero com título, subtítulo, animação temática e CTA
import React from 'react'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 md:py-28 bg-gradient-to-b from-azul-petroleo to-black relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-ciano-eletrico animate-fade-in">
        Automatize seu Negócio com a Expertise em n8n
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in delay-100">
        Soluções inteligentes para empresas que buscam eficiência, integração e inovação através da automação de processos.
      </p>
      <a href="#contato" className="px-8 py-4 rounded-full bg-ciano-eletrico text-azul-petroleo font-semibold text-lg shadow-lg hover:scale-105 transition-transform animate-fade-in delay-200">
        AGENDE SUA CONSULTORIA GRATUITA
      </a>
      {/* Elemento visual animado para remeter a fluxos de dados/nós conectados */}
      <div className="absolute inset-0 pointer-events-none select-none animate-pulse-slow">
        <svg width="100%" height="100%" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="150" r="12" fill="#00fff7" opacity="0.3">
            <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="60" r="8" fill="#a8ff04" opacity="0.2">
            <animate attributeName="r" values="8;16;8" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="200" r="10" fill="#ff00c8" opacity="0.2">
            <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <polyline points="100,150 400,60 700,200" stroke="#00fff7" strokeWidth="3" strokeDasharray="12" opacity="0.12"/>
        </svg>
      </div>
    </section>
  )
}
