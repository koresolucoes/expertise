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
  } else if (data.label === 'Log Geral') {
    content = (
      <div className="bg-black/40 text-cyan-200 px-2 py-1 rounded flex-1 font-mono whitespace-pre-line" style={{minHeight: 80}}>
        {data.value || (data.log ? data.log.join('\n') : 'Aguardando finalização do onboarding...')}
      </div>
    );
  } else {
    content = null;
  }

  return (
    <motion.div
      layout
      initial={{ scale: 0.95, opacity: 0.7 }}
      animate={{ scale: selected ? 1.05 : 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`rounded-lg bg-gradient-to-br from-[#0a1a2f] to-[#00cfd1]/80 border ${selected ? 'border-kore-ciano' : 'border-transparent'} w-40 h-40 sm:w-56 sm:h-56 flex flex-col items-center justify-center text-center shadow-md`}
    >
      <div className="flex items-center gap-2">
        {content}
      </div>
      <div className="text-xs text-gray-200 italic">{data.label}</div>
      {data.status === 'done' && <div className="text-green-400 text-xs font-bold">Concluído</div>}
      {renderLog(data.log)}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </motion.div>
  );
}
