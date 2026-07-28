import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" 
      />

      {/* Aurora Orb 1 - Primary Blue */}
      <div 
        className="absolute top-[-10%] left-[15%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-[#4F8CFF]/25 to-[#7C3AED]/20 blur-[130px] animate-aurora mix-blend-screen opacity-70"
      />

      {/* Aurora Orb 2 - Secondary Purple */}
      <div 
        className="absolute top-[20%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#22D3EE]/25 blur-[140px] animate-pulse-slow mix-blend-screen opacity-60"
      />

      {/* Aurora Orb 3 - Cyan Accent */}
      <div 
        className="absolute top-[60%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-r from-[#22D3EE]/15 via-[#4F8CFF]/20 to-transparent blur-[120px] animate-float opacity-50"
      />

      {/* Top Center Lighting Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-b from-[#4F8CFF]/15 via-transparent to-transparent blur-2xl pointer-events-none" />
    </div>
  );
}
