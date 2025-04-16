// DifferentialsSection.tsx
// Seção de diferenciais da empresa
import React from 'react'

const differentials = [
  {
    title: 'Especialistas em n8n',
    description: 'Equipe certificada, experiência real em projetos complexos.'
  },
  {
    title: 'Soluções Sob Medida',
    description: 'Automação personalizada para cada cliente, sem pacotes engessados.'
  },
  {
    title: 'Atendimento Humanizado',
    description: 'Suporte próximo, rápido e focado no sucesso do cliente.'
  },
  {
    title: 'Resultados Comprovados',
    description: 'Cases de sucesso e depoimentos de empresas atendidas.'
  },
]

export default function DifferentialsSection() {
  return (
    <section className="py-16 bg-black bg-opacity-80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">Por que escolher nossa consultoria?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {differentials.map((diff) => (
            <div key={diff.title} className="bg-azul-petroleo rounded-xl p-8 shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{diff.title}</h3>
              <p className="text-gray-300 text-center text-sm">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
