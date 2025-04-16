// Listagem de cursos
import React from 'react'

const courses = [
  {
    title: 'n8n Essencial',
    description: 'Automação do zero ao avançado.',
    level: 'Iniciante ao Avançado',
    href: '/cursos/n8n-essencial',
    price: 'R$ 399',
  },
  {
    title: 'Integrações Avançadas',
    description: 'APIs, Webhooks e automações complexas.',
    level: 'Intermediário/Avançado',
    href: '/cursos/integ-avancadas',
    price: 'R$ 599',
  },
]

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-black bg-opacity-80 py-8 px-2">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-ciano-eletrico mb-8 text-center">Cursos de Automação n8n</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {courses.map((course) => (
            <a key={course.title} href={course.href} className="bg-azul-petroleo rounded-xl p-8 shadow-lg flex flex-col hover:scale-105 transition-transform">
              <h2 className="text-xl font-semibold mb-2 text-ciano-eletrico">{course.title}</h2>
              <p className="text-gray-200 mb-1">{course.description}</p>
              <span className="text-verde-lima font-medium mb-2">{course.level}</span>
              <span className="text-magenta font-bold mb-2">{course.price}</span>
              <span className="underline font-semibold">Saiba mais</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
