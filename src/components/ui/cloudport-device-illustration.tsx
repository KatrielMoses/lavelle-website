export function CloudportDeviceIllustration() {
  return (
    <div className="w-full flex items-center justify-center">
      {/* Container carefully sized to crop top and bottom black borders from the video */}
      <div className="relative mx-auto w-full max-w-[540px] aspect-[16/7] rounded-xl border border-[#C8D6E5]/60 bg-[#151515] overflow-hidden shadow-[0_20px_50px_rgba(0,63,114,0.15)] ring-1 ring-white/10">
        <video
          src="/assets/showcase/clodport_showcase_loop.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtle overlay gradient to blend the edges with the site theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003F72]/30 to-transparent pointer-events-none mix-blend-overlay" />
        
        {/* Inner shadow/border for hardware feel */}
        <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
      </div>
    </div>
  );
}
