export const Sidebar = () => {
  return (
    <aside className="w-64 glass-panel border-r border-outline-variant/20 flex flex-col z-40">
      <div className="p-6 flex flex-col gap-8">
        <div>
          <h3 className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">Node Library</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 cursor-grab active:cursor-grabbing hover:bg-surface-bright group">
              <div className="size-3 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,113,107,0.4)]"></div>
              <div className="flex flex-col">
                <span className="text-sm font-headline font-medium text-white">Sensor</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Biological Input</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 cursor-grab active:cursor-grabbing hover:bg-surface-bright group">
              <div className="size-3 rounded-full bg-secondary shadow-[0_0_8px_rgba(255,215,9,0.4)]"></div>
              <div className="flex flex-col">
                <span className="text-sm font-headline font-medium text-white">Nerve Node</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Signal Conduit</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 cursor-grab active:cursor-grabbing hover:bg-surface-bright group">
              <div className="size-3 rounded-full bg-primary shadow-[0_0_8px_rgba(224,142,254,0.4)]"></div>
              <div className="flex flex-col">
                <span className="text-sm font-headline font-medium text-white">Nucleus</span>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Command Center</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">Canvas Tools</h3>
          <div className="grid grid-cols-2 gap-2">
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined mb-1">zoom_in</span>
              <span className="text-[10px] uppercase font-label">Zoom In</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined mb-1">zoom_out</span>
              <span className="text-[10px] uppercase font-label">Zoom Out</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined mb-1">fit_screen</span>
              <span className="text-[10px] uppercase font-label">Auto Fit</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-high border border-outline-variant/10 text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined mb-1">history</span>
              <span className="text-[10px] uppercase font-label">History</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-auto p-4 bg-surface-container-lowest/50 border-t border-outline-variant/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Live Topology</span>
          <span className="size-1.5 rounded-full bg-green-400 animate-pulse"></span>
        </div>
        <div className="font-mono text-[9px] text-primary/60 h-24 overflow-hidden leading-relaxed">
          {`{ "id": "net_01", "nodes": 12, "active_synapses": 24, "potential": "stable" }`}<br />
          &gt;&gt; sync event: node_move(sensor_02)<br />
          &gt;&gt; pos updated: [x: 412, y: 194]<br />
          &gt;&gt; connection: nucleus_01 -&gt; nerve_05
        </div>
      </div>
    </aside>
  );
};
