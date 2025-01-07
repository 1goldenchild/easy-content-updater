import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  "Life Path",
  "Charts",
  "Global",
  "Vehicle",
  "Relations",
  "Career"
];

const NetworkChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const size = Math.min(window.innerWidth * 0.8, 600);
      canvas.width = size;
      canvas.height = size;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation variables
    let angle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width * 0.3;

    const draw = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      ctx.beginPath();
      features.forEach((_, i) => {
        const x1 = centerX + radius * Math.cos(angle + (i * Math.PI * 2) / features.length);
        const y1 = centerY + radius * Math.sin(angle + (i * Math.PI * 2) / features.length);
        
        features.forEach((_, j) => {
          const x2 = centerX + radius * Math.cos(angle + (j * Math.PI * 2) / features.length);
          const y2 = centerY + radius * Math.sin(angle + (j * Math.PI * 2) / features.length);
          
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        });
      });
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();

      // Draw nodes and labels
      features.forEach((feature, i) => {
        const x = centerX + radius * Math.cos(angle + (i * Math.PI * 2) / features.length);
        const y = centerY + radius * Math.sin(angle + (i * Math.PI * 2) / features.length);

        // Draw node
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw label
        ctx.font = '14px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(feature, x, y);
      });

      // Update angle for animation
      angle += 0.002;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[600px] mx-auto mt-12 mb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default NetworkChart;