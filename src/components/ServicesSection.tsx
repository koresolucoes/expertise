// ServicesSection.tsx
// Seção de serviços com ícones e links
import React from 'react'

const services = [
  {
    title: 'Consultoria',
    description: 'Diagnóstico, estratégia e planejamento para automação com n8n.',
    icon: '💡',
    href: '/servicos/consultoria',
  },
  {
    title: 'Configuração & Implementação',
    description: 'Setup, integrações e automações personalizadas para seu negócio.',
    icon: '⚙️',
    href: '/servicos/implementacao',
  },
  {
    title: 'Cursos',
    description: 'Capacitação em n8n para equipes e profissionais. Online e presencial.',
    icon: '🎓',
    href: '/servicos/cursos',
  },
  {
    title: 'Suporte Técnico',
    description: 'Planos de suporte, manutenção e otimização contínua.',
    icon: '🛠️',
    href: '/servicos/suporte',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-black bg-opacity-60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <a key={service.title} href={service.href} className="group flex flex-col items-center bg-azul-petroleo rounded-xl p-8 shadow-lg hover:scale-105 transition-transform hover:bg-opacity-80">
              <span className="text-5xl mb-4 group-hover:animate-bounce">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-center text-sm mb-2">{service.description}</p>
              <span className="text-ciano-eletrico font-medium mt-2 group-hover:underline">Saiba mais</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
