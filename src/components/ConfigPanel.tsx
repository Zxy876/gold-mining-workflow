import { motion, AnimatePresence } from 'motion/react';
import { NodeData } from '../types';
import { X } from 'lucide-react';

interface ConfigPanelProps {
  node: NodeData;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<NodeData>) => void;
}

export const ConfigPanel = ({ node, onClose, onUpdate }: ConfigPanelProps) => {
  const toggle = (key: keyof NodeData) => {
    onUpdate(node.id, { [key]: !node[key] });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="absolute right-6 top-24 w-72 glass-panel border border-outline-variant/30 rounded-2xl p-6 z-[60] shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(255,215,9,0.6)]"></div>
            <h3 className="text-sm font-headline font-bold text-white uppercase tracking-wider">Node Config</h3>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Target Node</span>
            <span className="text-xs font-mono text-secondary">{node.name}</span>
          </div>

          <div className="space-y-4">
            {[
              { id: 'allow_architecture_change', label: 'Allow Arch Change' },
              { id: 'allow_new_dependencies', label: 'Allow New Deps' },
              { id: 'allow_direct_apply', label: 'Allow Direct Apply' },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[11px] font-medium text-on-surface-variant group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <button
                  onClick={() => toggle(item.id as keyof NodeData)}
                  className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                    node[item.id as keyof NodeData] ? 'bg-secondary' : 'bg-surface-variant'
                  }`}
                >
                  <motion.div
                    animate={{ x: node[item.id as keyof NodeData] ? 22 : 2 }}
                    className="absolute top-1 size-3 bg-white rounded-full shadow-sm"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-outline-variant/20">
          <p className="text-[9px] text-on-surface-variant leading-relaxed opacity-60">
            Decision protocol active. Changes will be compiled into the global synaptic JSON.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
