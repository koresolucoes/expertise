import { create } from 'zustand';
import { Node, Edge } from 'reactflow';

export interface NodeData {
  label: string;
  value?: string;
  status?: 'idle' | 'active' | 'done' | 'error';
}

export type EdgeData = unknown;

interface WorkflowState {
  nodes: Node<NodeData>[];
  edges: Edge<EdgeData>[];
  setNodes: (nodes: Node<NodeData>[]) => void;
  setEdges: (edges: Edge<EdgeData>[]) => void;
  updateNodeData: (id: string, data: Partial<NodeData>) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  updateNodeData: (id, data) => set((state) => ({
    nodes: state.nodes.map((n) => n.id === id ? { ...n, data: { ...n.data, ...data } } : n)
  })),
}));
