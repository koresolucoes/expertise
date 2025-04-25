"use client";
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionLineType,
  Controls,
  Edge,
  MiniMap,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';

// Métricas
const metrics = [
  { label: "Automações criadas", value: 500 },
  { label: "Integrações disponíveis", value: 100 },
  { label: "Horas economizadas", value: 12000 },
];

// Benefícios
const benefits = [
  { title: "Agilidade", desc: "Automatize processos e reduza o tempo de execução.", icon: <span className="text-4xl text-yellow-400">⚡</span>, details: "Ao automatizar, sua empresa reduz drasticamente o tempo de execução de tarefas, acelerando entregas e respostas." },
  { title: "Eficiência", desc: "Elimine tarefas repetitivas e minimize erros.", icon: <span className="text-4xl text-blue-500">📈</span>, details: "Reduz erros humanos e retrabalho, garantindo qualidade e padronização." },
  { title: "Escalabilidade", desc: "Cresça sem aumentar custos operacionais.", icon: <span className="text-4xl text-green-500">⤢</span>, details: "Atenda mais clientes sem precisar multiplicar a equipe ou os custos." },
  { title: "Segurança", desc: "Padronize fluxos e garanta conformidade.", icon: <span className="text-4xl text-purple-500">🔒</span>, details: "Regras claras e rastreáveis garantem maior segurança de dados." },
  { title: "Inovação", desc: "Implemente IA e novas tecnologias facilmente.", icon: <span className="text-4xl text-orange-400">💡</span>, details: "A automação abre portas para a adoção de IA, chatbots e integrações modernas." }
];

// Depoimentos
const testimonials = [
  { name: "Patrícia Lima", role: "Head de Operações, Empresa X", img: "/expertise/blog-images/cliente-exemplo.jpg", quote: "A automação da Kore revolucionou nosso atendimento e reduziu custos drasticamente." },
  { name: "Carlos Souza", role: "CTO, Startup Y", img: "/expertise/blog-images/cliente-exemplo.jpg", quote: "A integração de IA e automação nos permitiu escalar operações sem perder qualidade." },
];

// FAQ
const faq = [
  { q: "O que posso automatizar?", a: "Processos de atendimento, vendas, marketing, integrações entre sistemas, notificações e muito mais." },
  { q: "Preciso saber programar?", a: "Não! Montamos fluxos visuais e intuitivos, sem código para o usuário final." },
  { q: "Posso integrar com meu ERP/CRM?", a: "Sim, conectamos com centenas de sistemas via API, webhook ou integração nativa." },
];

// Contador animado
import { animate } from 'framer-motion';

function AnimatedCounter({ value, duration = 2.5, className = "" }: { value: number; duration?: number; className?: string }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest: number) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value, duration]);
  return (
    <span className={className}>{display.toLocaleString()}</span>
  );
}


// Defina nodeTypes fora do componente para evitar recriação a cada render
const nodeTypes = { custom: CustomNode };

function WorkflowSection() {




  // Exemplo realista de automação: Chat do usuário → Agente IA → E-mail automático → Banco de Dados
  const steps = [
    "RH (Início)",
    "IA (Checklist)",
    "E-mail ao Colaborador",
    "Banco de Dados (Onboarding)"
  ];

  // Nodes do fluxo
  const initialNodes: Node[] = [
    {
      id: "1",
      type: "custom",
      position: { x: 80, y: 120 },
      data: {
        label: "RH (Início)",
        userMessage: "",
        value: "",
        status: "active",
        log: [],
        placeholder: "Mensagem do RH..."
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 350, y: 120 },
      data: {
        label: "IA (Checklist)",
        iaResponse: "",
        value: "",
        status: "disabled",
        log: [],
        placeholder: "Checklist gerado pela IA..."
      },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 620, y: 120 },
      data: {
        label: "E-mail ao Colaborador",
        emailContent: "",
        value: "",
        status: "disabled",
        log: [],
        placeholder: "Conteúdo do e-mail..."
      },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 890, y: 120 },
      data: {
        label: "Banco de Dados (Onboarding)",
        registro: "",
        value: "",
        status: "disabled",
        log: [],
        placeholder: "Log/registro..."
      },
    },
    {
      id: "5",
      type: "custom",
      position: { x: 1160, y: 120 },
      data: {
        label: "Log Geral",
        value: "",
        status: "disabled",
        log: [],
        placeholder: "Histórico do onboarding..."
      },
    },
  ];
  const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", type: "default" },
    { id: "e2-3", source: "2", target: "3", type: "default" },
    { id: "e3-4", source: "3", target: "4", type: "default" },
    { id: "e4-5", source: "4", target: "5", type: "default" },
  ];

  // React Flow - estado local conforme documentação oficial
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Função assíncrona para atualizar dados, simular delays e passar valores entre nodes
  // Handler automático: executa toda a cadeia após o clique inicial
  const onNodeDataChange = useCallback(async (id: string, changes: Record<string, unknown>) => {
    console.log('[DEBUG] Handler chamado', id, changes);
    // Passo 1: RH (Início)
    setNodes(nds => nds.map((node) =>
      node.id === '1'
        ? { ...node, data: { ...node.data, status: 'done', value: 'Iniciando onboarding do novo colaborador: João Silva.', log: ['RH: Iniciando onboarding do novo colaborador: João Silva.'], onChange: onNodeDataChange } }
        : node
    ));
    await new Promise(res => setTimeout(res, 900));
    // Passo 2: IA (Checklist)
    setNodes(nds => nds.map((node) =>
      node.id === '2'
        ? { ...node, data: { ...node.data, status: 'done', value: 'Checklist de integração: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe', log: ['IA: Checklist de integração: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe'], onChange: onNodeDataChange } }
        : node
    ));
    await new Promise(res => setTimeout(res, 900));
    // Passo 3: E-mail ao Colaborador
    setNodes(nds => nds.map((node) =>
      node.id === '3'
        ? { ...node, data: { ...node.data, status: 'done', value: 'Olá João, seja bem-vindo! Segue seu checklist de onboarding: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe', log: ['E-mail: Olá João, seja bem-vindo! Segue seu checklist de onboarding: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe'], onChange: onNodeDataChange } }
        : node
    ));
    await new Promise(res => setTimeout(res, 900));
    // Passo 4: Banco de Dados (Onboarding)
    setNodes(nds => nds.map((node) =>
      node.id === '4'
        ? { ...node, data: { ...node.data, status: 'done', value: 'Onboarding do colaborador João Silva registrado no banco de dados.', log: ['Registro: Onboarding do colaborador João Silva registrado no banco de dados.'], onChange: onNodeDataChange } }
        : node
    ));
    await new Promise(res => setTimeout(res, 700));
    // Passo 5: Log Geral
    setNodes(nds => nds.map((node) =>
      node.id === '5'
        ? { ...node, data: { ...node.data, status: 'done', value: [
            'RH: Iniciando onboarding do novo colaborador: João Silva.',
            'IA: Checklist de integração: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe',
            'E-mail: Olá João, seja bem-vindo! Segue seu checklist de onboarding: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe',
            'Registro: Onboarding do colaborador João Silva registrado no banco de dados.'
          ].join('\n'), log: [
            'RH: Iniciando onboarding do novo colaborador: João Silva.',
            'IA: Checklist de integração: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe',
            'E-mail: Olá João, seja bem-vindo! Segue seu checklist de onboarding: - Criar e-mail corporativo - Liberar acesso ao sistema - Agendar apresentação com a equipe',
            'Registro: Onboarding do colaborador João Silva registrado no banco de dados.'
          ], onChange: onNodeDataChange } }
        : node
    ));
  }, [setNodes]);

  // Após o primeiro render e sempre que o handler mudar, injete o handler nos nodes
  useEffect(() => {
    setNodes(nds =>
      nds.map(node => (
        node.data.onChange
          ? node
          : { ...node, data: { ...node.data, onChange: onNodeDataChange } }
      ))
    );
  }, [onNodeDataChange, setNodes]);

  // Handler oficial para conexão
  const onConnect = React.useCallback((params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, label: "new" }, eds)), [setEdges]);

  // Seleção de node/edge
  const [selectedNode, setSelectedNode] = React.useState<any>(null);
  // Stepper dinâmico: destaca node selecionado
  const currentStep = React.useMemo(() => {
    if (!selectedNode) return null;
    const idx = nodes.findIndex((n: Node) => n.id === selectedNode.id);
    return idx >= 0 ? idx : null;
  }, [selectedNode, nodes]);

  const onNodeClick = React.useCallback((e: React.MouseEvent, node: Node) => setSelectedNode(node), []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-kore-destaque mb-6 text-center">
          Como funciona na prática?
        </h2>
        {/* Stepper simples */}
        <div className="flex justify-center gap-2 mb-4">
          {steps.map((s, i) => (
            <div
              key={s}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                i === currentStep ? "bg-kore-ciano text-black" : "bg-gray-800 text-gray-200"
              }`}
            >
              {s}
              {i < steps.length - 1 && <span className="mx-1">→</span>}
            </div>
          ))}
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
          <div className="mb-6">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              connectionLineType={ConnectionLineType.SmoothStep}
              fitView
              style={{ minHeight: 340 }}
            >
              <MiniMap />
              <Controls />
              <Background gap={16} size={1} />
            </ReactFlow>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AutomacaoIaPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [openBenefit, setOpenBenefit] = React.useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);

  const nextTestimonial = () => setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((idx) => (idx - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="min-h-screen bg-gradient-to-br from-kore-azul via-kore-cinza to-black text-white">
      <>
        <WorkflowSection />
      </>

      {/* MÉTRICAS ANIMADAS */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-kore-ciano/90 text-black rounded-2xl p-8 flex flex-col items-center"
          >
            <AnimatedCounter value={m.value} duration={2.5} className="text-4xl md:text-5xl font-black mb-2" />
            <span className="text-lg font-bold">{m.label}</span>
          </div>
        ))}


      </section>

      {/* BENEFÍCIOS INTERATIVOS */}
      <section className="py-16 relative" style={{ background: 'linear-gradient(120deg, #0a1a2f 60%, #0e223a 100%)' }}>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-kore-destaque mb-4">Por que automatizar com a Kore?</h2>
          <h3 className="text-lg md:text-xl font-medium text-white mb-2">Automação inteligente, escalável e segura para transformar seu negócio</h3>
          <p className="text-gray-200 md:text-lg">A Kore combina expertise em automação, IA e integração para entregar soluções sob medida, seguras e com alto impacto na produtividade. Descubra como nossos diferenciais podem acelerar resultados e liberar o potencial da sua equipe.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-2 md:px-0">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="relative bg-gradient-to-br from-[#0a1a2f] to-[#00cfd1]/80 text-white rounded-2xl p-7 shadow-xl cursor-pointer flex flex-col items-center group transition-all duration-300 border border-transparent hover:border-kore-ciano"
              style={{ boxShadow: '0 2px 16px 0 #00cfd120' }}
              onClick={() => setOpenBenefit(i)}
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-kore-ciano to-kore-azul shadow-lg mb-3 group-hover:shadow-kore-destaque transition-all duration-300">
                {b.icon}
              </span>
              <h3 className="font-bold text-lg md:text-xl text-kore-destaque mb-1 group-hover:text-kore-azul transition-all">{b.title}</h3>
              <div className="text-gray-100 text-sm md:text-base mb-2 text-center">{b.desc}</div>
              {/* Micro-destaques ou exemplos práticos */}
              {i === 0 && <div className="text-xs text-kore-ciano font-semibold mt-1">Ex: Processos que levavam horas agora são instantâneos.</div>}
              {i === 1 && <div className="text-xs text-kore-ciano font-semibold mt-1">Ex: Redução de 80% em tarefas manuais repetitivas.</div>}
              {i === 2 && <div className="text-xs text-kore-ciano font-semibold mt-1">Ex: Sua operação cresce sem aumentar equipe.</div>}
              {i === 3 && <div className="text-xs text-kore-ciano font-semibold mt-1">Ex: Fluxos auditáveis e conformidade total.</div>}
              {i === 4 && <div className="text-xs text-kore-ciano font-semibold mt-1">Ex: IA, chatbots e integrações de última geração.</div>}
            </div>
          ))}
        </div>
        {openBenefit !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setOpenBenefit(null)}>
            <div className="bg-white text-black rounded-2xl p-8 max-w-lg w-full relative" style={{ transform: 'scale(1)', opacity: 1 }} onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-2xl" onClick={() => setOpenBenefit(null)} aria-label="Fechar">×</button>
              <div className="flex flex-col items-center">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-kore-ciano to-kore-azul shadow-lg mb-3">{benefits[openBenefit].icon}</span>
                <h3 className="text-2xl font-bold mt-2 text-kore-destaque">{benefits[openBenefit].title}</h3>
                <p className="text-gray-800 mt-4 text-center text-base">{benefits[openBenefit].details}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* DEPOIMENTOS CAROUSEL */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-kore-ciano text-center mb-6">O que dizem nossos clientes</h2>
        <div className="relative max-w-xl mx-auto">
          <div className="bg-kore-cinza/90 rounded-2xl p-6 shadow-lg text-center">
            <img src={testimonials[testimonialIdx].img} alt={testimonials[testimonialIdx].name} width={64} height={64} className="rounded-full mx-auto mb-4" />
            <blockquote className="italic text-gray-200 mb-2">“{testimonials[testimonialIdx].quote}”</blockquote>
            <div className="font-bold text-kore-destaque">{testimonials[testimonialIdx].name}</div>
            <div className="text-sm text-gray-400 mb-2">{testimonials[testimonialIdx].role}</div>
            <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-kore-ciano p-2 rounded-full">←</button>
            <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-kore-ciano p-2 rounded-full">→</button>
          </div>
        </div>
      </section>

      {/* FAQ INTERATIVO */}
      <section className="py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-kore-destaque text-center mb-6">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faq.map((f, idx) => (
            <div key={f.q} className={`rounded-xl shadow-lg p-4 cursor-pointer transition-all duration-300 ${openFaq === idx ? 'bg-kore-ciano text-kore-azul' : 'bg-gray-900 text-white'}`}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold">{f.q}</span>
                <span>{openFaq === idx ? '-' : '+'}</span>
              </div>
              {openFaq === idx && (
                <div className="mt-2 overflow-hidden text-sm">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-8 bg-gradient-to-t from-black via-kore-cinza to-transparent text-center">
        <div className="bg-kore-ciano/90 inline-block rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Pronto para automatizar?</h3>
          <p className="mb-4">Fale com um especialista e descubra como a Kore pode transformar seu negócio.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="mailto:koresoluciones@outlook.com" className="underline">koresoluciones@outlook.com</a>
            <a href="tel:+5531991282843" className="underline">+55 31 99128-2843</a>
          </div>
          <a href="/contato" className="inline-block bg-kore-azul text-white px-6 py-3 rounded-full font-semibold hover:bg-kore-destaque transition">Entrar em Contato</a>
        </div>
      </section>
    </main>
  );
}
