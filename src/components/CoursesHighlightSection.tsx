// CoursesHighlightSection.tsx
// Destaque para cursos populares
import React from 'react'

const courses = [
  {
    title: 'n8n Essencial',
    description: 'Aprenda do zero ao avançado sobre automação com n8n.',
    level: 'Iniciante ao Avançado',
    href: '/cursos/n8n-essencial',
    color: 'bg-ciano-eletrico text-azul-petroleo',
  },
  {
    title: 'Integrações Avançadas',
    description: 'Domine integrações complexas, APIs e automações personalizadas.',
    level: 'Intermediário/Avançado',
    href: '/cursos/integ-avancadas',
    color: 'bg-verde-lima text-azul-petroleo',
  },
]

export default function CoursesHighlightSection() {
  return (
    <section className="py-16 bg-black bg-opacity-60">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ciano-eletrico mb-10 text-center">Cursos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <a key={course.title} href={course.href} className={`rounded-xl p-8 shadow-lg flex flex-col items-start hover:scale-105 transition-transform ${course.color}`}>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-azul-petroleo text-sm mb-1 font-medium">{course.level}</p>
              <p className="mb-4 text-base">{course.description}</p>
              <span className="underline font-semibold">Saiba mais</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/cursos" className="px-6 py-3 rounded-full bg-magenta text-white font-semibold shadow-lg hover:scale-105 transition-transform">Ver todos os cursos</a>
        </div>
      </div>
    </section>
  )
}
