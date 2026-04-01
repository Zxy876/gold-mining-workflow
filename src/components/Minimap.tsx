export const Minimap = () => {
  return (
    <div className="absolute bottom-6 right-6 w-48 aspect-video glass-panel border border-outline-variant/20 rounded-xl overflow-hidden pointer-events-auto">
      <div className="absolute inset-0 synapse-grid scale-50 opacity-30"></div>
      <div className="absolute top-4 left-4 size-3 bg-tertiary rounded opacity-60"></div>
      <div className="absolute top-10 left-12 size-3 bg-secondary rounded opacity-60"></div>
      <div className="absolute top-6 right-6 size-4 bg-primary rounded opacity-60"></div>
      <div className="absolute top-2 left-2 right-2 bottom-2 border border-primary/40 bg-primary/5 rounded"></div>
      <div className="absolute bottom-2 left-2 text-[8px] font-label uppercase tracking-widest text-on-surface-variant">Neural Map</div>
    </div>
  );
};
