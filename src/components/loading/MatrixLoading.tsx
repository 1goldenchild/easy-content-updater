import React, { useEffect, useRef, useState } from 'react';

const MatrixLoading = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const numbers = "0123456789";
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0EA5E9'; // Bright blue color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = numbers[Math.floor(Math.random() * numbers.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Show "Numerology" text after 0.5 seconds
    setTimeout(() => setShowText(true), 500);

    // Hide text and trigger completion after 2 seconds
    setTimeout(() => {
      setShowText(false);
      setTimeout(onLoadComplete, 500); // Give 0.5s for text fade out
    }, 2000);

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-[#0EA5E9] text-6xl font-bold">Numerology</h1>
      </div>
    </div>
  );
};

export default MatrixLoading;