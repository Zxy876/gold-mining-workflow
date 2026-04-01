import { motion } from 'motion/react';
import { NodeData } from '../types';

interface NodeProps {
  data: NodeData;
  onDrag: (id: string, x: number, y: number) => void;
}

export const Node = ({ data, onDrag }: NodeProps) => {
  const getGlowClass = () => {
    switch (data.type) {
      case 'sensor': return 'node-glow-tertiary border-tertiary/40';
      case 'nerve': return 'node-glow-secondary border-secondary/40';
      case 'nucleus': return 'node-glow-primary border-primary/40';
      default: return '';
    }
  };

  const getIcon = () => {
    switch (data.type) {
      case 'sensor': return 'sensors';
      case 'nerve': return 'hub';
      case 'nucleus': return 'memory';
      default: return 'help';
    }
  };

  const getColorClass = () => {
    switch (data.type) {
      case 'sensor': return 'text-tertiary';
      case 'nerve': return 'text-secondary';
      case 'nucleus': return 'text-primary';
      default: return 'text-white';
    }
  };

  const getBgColorClass = () => {
    switch (data.type) {
      case 'sensor': return 'bg-tertiary';
      case 'nerve': return 'bg-secondary';
      case 'nucleus': return 'bg-primary';
      default: return 'bg-white';
    }
  };

  const getLabel = () => {
    switch (data.type) {
      case 'sensor': return 'INPUT';
      case 'nerve': return 'CONDUIT';
      case 'nucleus': return 'NUCLEUS';
      default: return '';
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDrag={(_, info) => {
        onDrag(data.id, data.x + info.delta.x, data.y + info.delta.y);
      }}
      initial={false}
      animate={{ x: data.x, y: data.y }}
      className={`absolute w-64 p-px rounded-xl bg-gradient-to-br from-white/10 to-transparent ${getGlowClass()} group cursor-move z-10`}
    >
      <div className="bg-surface-container-high rounded-[11px] p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`material-symbols-outlined ${getColorClass()} text-lg`} style={{ fontVariationSettings: "'FILL' 1" }}>
              {getIcon()}
            </span>
            <h4 className="text-sm font-headline font-bold text-white">{data.name}</h4>
          </div>
          <span className={`text-[10px] font-label px-1.5 py-0.5 rounded border ${getColorClass().replace('text-', 'bg-')}/10 ${getColorClass()} ${getColorClass().replace('text-', 'border-')}/20`}>
            {getLabel()}
          </span>
        </div>

        {data.type === 'sensor' && (
          <div className="space-y-1">
            <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-tertiary" 
                animate={{ width: `${data.potential || 0}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-[9px] font-label text-on-surface-variant">
              <span>POTENTIAL</span>
              <span>{data.potential ? (data.potential * 1.2).toFixed(1) : 0} mV</span>
            </div>
          </div>
        )}

        {data.type === 'nerve' && (
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col p-2 bg-surface-variant/50 rounded-lg border border-outline-variant/10">
              <span className="text-[8px] text-on-surface-variant">THROUGHPUT</span>
              <span className="text-[10px] font-bold text-secondary">{data.throughput || '0.0 GB/s'}</span>
            </div>
            <div className="flex flex-col p-2 bg-surface-variant/50 rounded-lg border border-outline-variant/10">
              <span className="text-[8px] text-on-surface-variant">LATENCY</span>
              <span className="text-[10px] font-bold text-secondary">{data.latency || '0.00 ms'}</span>
            </div>
          </div>
        )}

        {data.type === 'nucleus' && (
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[10px] font-label text-on-surface-variant">
                <span>SYNAPTIC LOAD</span>
                <span className="text-primary">{data.synapticLoad || 0}%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary" 
                  animate={{ width: `${data.synapticLoad || 0}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <span className="text-primary font-bold text-xs">CPU</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-headline font-medium text-white">Quantum Processor</span>
                <span className="text-[9px] text-on-surface-variant">Active Clusters: 8/12</span>
              </div>
            </div>
          </div>
        )}

        {/* Connection Points */}
        <div className={`absolute -left-2 top-1/2 -translate-y-1/2 size-4 ${getBgColorClass()} rounded-full border-4 border-background shadow-lg hover:scale-125 transition-transform cursor-pointer`} />
        <div className={`absolute -right-2 top-1/2 -translate-y-1/2 size-4 ${getBgColorClass()} rounded-full border-4 border-background shadow-lg hover:scale-125 transition-transform cursor-pointer`} />
      </div>
    </motion.div>
  );
};
