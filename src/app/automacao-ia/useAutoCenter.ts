import { useEffect } from 'react';
import { useReactFlow } from 'reactflow';
import { Node } from 'reactflow';

export function useAutoCenter(currentStep: number, nodes: Node[]) {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    if (!reactFlowInstance || !nodes.length) return;
    const node = nodes[currentStep];
    if (!node) return;

    // Centraliza o nó atual na viewport, ajustando zoom conforme dispositivo
    const isMobile = window.innerWidth < 640;
    const zoom = isMobile ? 0.95 : 0.45;
    reactFlowInstance.setCenter(
      node.position.x + 120, // ajusta para centro do nó
      node.position.y + 120,
      { zoom, duration: 600 }
    );
  }, [currentStep, nodes, reactFlowInstance]);
}
