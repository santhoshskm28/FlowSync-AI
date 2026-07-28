import React, { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[2] transition-transform duration-75 ease-out rounded-full opacity-40 mix-blend-screen"
      style={{
        left: 0,
        top: 0,
        width: '400px',
        height: '400px',
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
        background: 'radial-gradient(circle, rgba(79, 140, 255, 0.15) 0%, rgba(124, 58, 237, 0.08) 45%, transparent 70%)',
      }}
    />
  );
}
