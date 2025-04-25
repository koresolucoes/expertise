import { Handle, NodeProps, Position } from 'reactflow';
import { motion } from 'framer-motion';

import { useState } from 'react';

export default function CustomNode({ id, data, selected }: NodeProps) {
  const [loading, setLoading] = useState(false);
  const isActive = data.status === 'active';

  // Helper para renderizar log/histórico
  const renderLog = (logArr?: string[]) =>
    logArr && logArr.length > 0 ? (
      <div className="mt-2 text-xs text-cyan-200 bg-black/20 rounded p-1 max-h-24 overflow-auto">
        <div className="font-bold text-cyan-400 mb-1">Histórico:</div>
        {logArr.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
    ) : null;

  let content = null;

  if (data.label === 'RH (Início)') {
    content = (
      <>
        <div className="bg-white/10 text-white px-2 py-1 rounded flex-1">
          Iniciar onboarding do novo colaborador: João Silva.
        </div>
        {isActive && !loading && (
          <div className="flex justify-center w-full my-2">
            <span className="animate-spin text-xl text-kore-ciano">⏳</span>
          </div>
        )}
        <button
          className="ml-2 px-2 py-1 rounded bg-kore-ciano text-black font-bold text-xs hover:bg-kore-azul transition-all disabled:opacity-60 flex items-center gap-1"
          onClick={async () => {
            console.log('[DEBUG] Botão clicado', id, data.status);
            setLoading(true);
            await data.onChange?.(id, { status: 'done', value: 'Iniciando onboarding do novo colaborador: João Silva.' });
            setLoading(false);
          }}
          disabled={!isActive || loading}
        >
          {loading && <span className="animate-spin mr-1">⏳</span>} Iniciar onboarding
        </button>
      </>
    );
  } else if (data.label === 'IA (Checklist)') {
    content = (
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="bg-white/10 text-white px-2 py-1 rounded flex-1 w-full">
          {data.value || data.iaResponse || 'Aguardando início do onboarding...'}
        </div>
        {data.status === 'active' && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span className="animate-spin text-xl text-kore-ciano">🤖</span>
          </div>
        )}
      </div>
    );
  } else if (data.label === 'E-mail ao Colaborador') {
    content = (
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="bg-white/10 text-white px-2 py-1 rounded flex-1 w-full">
          {data.value || data.emailContent || 'Aguardando checklist da IA...'}
        </div>
        {data.status === 'active' && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span className="animate-spin text-xl text-kore-ciano">📧</span>
          </div>
        )}
      </div>
    );
  } else if (data.label === 'Banco de Dados (Onboarding)') {
    content = (
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="bg-white/10 text-white px-2 py-1 rounded flex-1 w-full">
          {data.value || data.registro || 'Aguardando envio do e-mail...'}
        </div>
        {data.status === 'active' && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span className="animate-spin text-xl text-kore-ciano">💾</span>
          </div>
        )}
      </div>
    );
  } else if (data.label === 'Resumo do Onboarding') {
    content = data.status === 'done' ? (
      <div className="flex flex-col items-center justify-center w-full h-full p-2">
        <span className="text-4xl text-green-400 mb-2 animate-bounce">🎉</span>
        <div className="text-lg font-bold text-green-300 mb-1">Onboarding Concluído!</div>
        <div className="text-xs text-gray-200 bg-black/30 rounded p-2 mt-1 w-full max-h-40 overflow-auto whitespace-pre-line break-words">
          {data.value || data.resumo || 'Todos os passos do onboarding foram realizados com sucesso. O novo colaborador está pronto para começar!'}
        </div>
      </div>
    ) : null;
  } else {
    content = null;
  }

  return (
    <motion.div
      layout
      initial={{ scale: 0.95, opacity: 0.7 }}
      animate={{ scale: selected ? 1.07 : 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative group ${data.label === 'Resumo do Onboarding' ? 'w-64 h-64 sm:w-96 sm:h-80' : 'w-56 h-56 sm:w-72 sm:h-72'} flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#101e2e] via-[#00cfd1]/40 to-[#1a2e3a] border-2 ${selected ? 'border-kore-ciano shadow-lg' : 'border-[#00cfd1]/40'} rounded-2xl shadow-md overflow-visible transition-all duration-300`}
    >
      {/* Círculo decorativo IA/Tech */}
      <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-tr from-[#00cfd1]/70 via-[#0a1a2f]/80 to-[#00cfd1]/40 border-2 border-white/20 flex items-center justify-center text-2xl text-kore-ciano shadow-md">
        {data.label.includes('IA') ? '🤖' : data.label.includes('E-mail') ? '📧' : data.label.includes('Banco') ? '💾' : '👤'}
      </span>
      <div className="flex flex-col items-center gap-2 w-full px-2">
        {content}
      </div>
      {content && <div className="mt-2 text-xs font-semibold text-kore-ciano drop-shadow-sm uppercase tracking-wide">{data.label}</div>}
      {data.status === 'done' && <div className="text-green-400 text-xs font-bold mt-1 animate-pulse">Concluído</div>}
      {renderLog(data.log)}
      {/* Glow ao redor do nó ativo */}
      {isActive && <span className="absolute inset-0 rounded-2xl border-4 border-kore-ciano/60 animate-pulse pointer-events-none" />}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </motion.div>
  );
}
