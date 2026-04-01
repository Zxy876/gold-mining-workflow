export type NodeType = 'sensor' | 'nerve' | 'nucleus';

export interface NodeData {
  id: string;
  type: NodeType;
  name: string;
  x: number;
  y: number;
  potential?: number;
  throughput?: string;
  latency?: string;
  synapticLoad?: number;
}

export interface Connection {
  id: string;
  from: string;
  to: string;
  color?: string;
  animated?: boolean;
}
