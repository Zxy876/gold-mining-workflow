interface FloatingActionBarProps {
  onCompile: () => void;
}

export const FloatingActionBar = ({ onCompile }: FloatingActionBarProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-panel border border-outline-variant/30 rounded-full px-2 py-2 flex items-center gap-1 z-50 shadow-2xl">
      <button className="p-3 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-full transition-all group" title="Select Tool">
        <span className="material-symbols-outlined text-xl">near_me</span>
      </button>
      <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
      <button className="p-3 text-tertiary bg-tertiary/10 hover:bg-tertiary/20 rounded-full transition-all" title="Add Sensor">
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
      </button>
      <button className="p-3 text-secondary bg-secondary/10 hover:bg-secondary/20 rounded-full transition-all" title="Add Nerve">
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>mediation</span>
      </button>
      <button className="p-3 text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-all" title="Add Nucleus">
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>blur_on</span>
      </button>
      <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
      <button className="p-3 text-on-surface-variant hover:text-error hover:bg-error/10 rounded-full transition-all" title="Delete Selection">
        <span className="material-symbols-outlined text-xl">delete</span>
      </button>
      <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
      <button 
        onClick={onCompile}
        className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 font-headline font-bold text-xs rounded-full hover:bg-secondary/30 transition-all mr-1"
      >
        COMPILE
      </button>
      <button className="px-4 py-2 bg-primary text-on-primary font-headline font-bold text-xs rounded-full hover:shadow-[0_0_15px_rgba(224,142,254,0.4)] transition-all">
        SIMULATE FLOW
      </button>
    </div>
  );
};
