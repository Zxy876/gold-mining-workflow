import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import { FloatingActionBar } from './components/FloatingActionBar';
import { Minimap } from './components/Minimap';
import { Node } from './components/Node';
import { Synapse } from './components/Synapse';
import { NodeData, Connection } from './types';

export default function App() {
  const [nodes, setNodes] = useState<NodeData[]>([
    {
      id: 'sensor-1',
      type: 'sensor',
      name: 'Sensor_A1',
      x: 160,
      y: 128,
      potential: 76.4,
    },
    {
      id: 'nerve-1',
      type: 'nerve',
      name: 'Nerve Node',
      x: 450,
      y: 256,
      throughput: '2.4 GB/s',
      latency: '0.04 ms',
    },
    {
      id: 'nucleus-1',
      type: 'nucleus',
      name: 'Nucleus_Core',
      x: 850,
      y: 160,
      synapticLoad: 42,
    },
  ]);

  const [connections] = useState<Connection[]>([
    { id: 'c1', from: 'sensor-1', to: 'nerve-1', color: '#ffd709', animated: true },
    { id: 'c2', from: 'nerve-1', to: 'nucleus-1', color: '#e08efe', animated: true },
  ]);

  const handleNodeDrag = (id: string, x: number, y: number) => {
    setNodes(prev => prev.map(node => node.id === id ? { ...node, x, y } : node));
  };

  // Simulate some live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        if (node.type === 'sensor') {
          return { ...node, potential: Math.min(100, Math.max(0, (node.potential || 0) + (Math.random() - 0.5) * 5)) };
        }
        if (node.type === 'nucleus') {
          return { ...node, synapticLoad: Math.min(100, Math.max(0, (node.synapticLoad || 0) + (Math.random() - 0.5) * 2)) };
        }
        return node;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col bg-background text-on-surface font-body overflow-hidden">
      <TopBar />
      <main className="relative flex-1 flex overflow-hidden">
        <Sidebar />
        
        <div className="flex-1 synapse-grid relative cursor-crosshair overflow-hidden">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="potential-grad" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#ffd709" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {connections.map(conn => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (fromNode && toNode) {
                return (
                  <Synapse 
                    key={conn.id} 
                    fromNode={fromNode} 
                    toNode={toNode} 
                    connection={conn} 
                  />
                );
              }
              return null;
            })}
          </svg>

          {/* Nodes */}
          {nodes.map(node => (
            <Node 
              key={node.id} 
              data={node} 
              onDrag={handleNodeDrag} 
            />
          ))}

          {/* Floating Search */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[400px] z-50">
            <label className="flex flex-col h-11">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full glass-panel border border-outline-variant/30">
                <div className="text-on-surface-variant flex items-center justify-center pl-4 pr-1">
                  <span className="material-symbols-outlined text-lg">search</span>
                </div>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-on-surface-variant px-2 text-sm font-body leading-normal" 
                  placeholder="Query neural network components..."
                />
                <div className="flex items-center pr-2">
                  <kbd className="px-1.5 py-0.5 bg-surface-container-highest rounded text-[10px] text-on-surface-variant font-label border border-outline-variant/30">⌘ K</kbd>
                </div>
              </div>
            </label>
          </div>

          <Minimap />
          <FloatingActionBar />
        </div>
      </main>
    </div>
  );
}
