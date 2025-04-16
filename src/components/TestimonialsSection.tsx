// TestimonialsSection.tsx
// Depoimentos de clientes
import React from 'react'

const testimonials = [
  {
    name: 'Empresa Alpha',
    text: 'A automação com n8n transformou nossa operação. Equipe extremamente competente e atenciosa!',
    logo: '',
  },
  {
    name: 'Beta Solutions',
    text: 'Consultoria personalizada e resultados rápidos. Recomendo para qualquer empresa que queira escalar.',
    logo: '',
  },
  {
    name: 'Gamma Tech',
    text: 'Os cursos elevaram o conhecimento do nosso time. Didática excelente!',
    logo: '',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-azul-petroleo to-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-black bg-opacity-60 rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-ciano-eletrico bg-opacity-20 flex items-center justify-center text-2xl">
                {t.logo || t.name[0]}
              </div>
              <p className="text-gray-200 italic mb-4">“{t.text}”</p>
              <span className="text-ciano-eletrico font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
