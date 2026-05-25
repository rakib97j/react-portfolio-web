import  { useEffect, useRef } from "react";

export default function PixelCard({
  children,
  className = "",
  colors = "#00ff66,#39ff14,#00ff99",
  gap = 4,
  speed = 35,
  pixelSize = 35
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;
    if (!container) return;

    let w, h, cols, rows;
    const parsedColors = colors.split(",");
    let grid = [];
    let animationFrameId;

    const resize = () => {
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
      cols = Math.ceil(w / (pixelSize + gap));
      rows = Math.ceil(h / (pixelSize + gap));
      grid = Array(cols).fill(0).map(() => Array(rows).fill(0));
    };
    
    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      if (!cols) return;
      
      const mouseCol = Math.floor(mouseRef.current.x / (pixelSize + gap));
      const mouseRow = Math.floor(mouseRef.current.y / (pixelSize + gap));

      if (mouseRef.current.active && mouseCol >= 0 && mouseCol < cols && mouseRow >= 0 && mouseRow < rows) {
         grid[mouseCol][mouseRow] = 1.0;
         
         if (Math.random() > 0.3 && mouseCol + 1 < cols) grid[mouseCol + 1][mouseRow] = Math.max(grid[mouseCol + 1][mouseRow], 0.6);
         if (Math.random() > 0.3 && mouseCol - 1 >= 0) grid[mouseCol - 1][mouseRow] = Math.max(grid[mouseCol - 1][mouseRow], 0.6);
         if (Math.random() > 0.3 && mouseRow + 1 < rows) grid[mouseCol][mouseRow + 1] = Math.max(grid[mouseCol][mouseRow + 1], 0.6);
         if (Math.random() > 0.3 && mouseRow - 1 >= 0) grid[mouseCol][mouseRow - 1] = Math.max(grid[mouseCol][mouseRow - 1], 0.6);
      }

      // Random twinkling
      if (Math.random() > 0.95) {
         const randomCol = Math.floor(Math.random() * cols);
         const randomRow = Math.floor(Math.random() * rows);
         if (grid[randomCol] && grid[randomCol][randomRow] !== undefined) {
             grid[randomCol][randomRow] = 0.5;
         }
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j] > 0) {
            grid[i][j] -= (speed / 1000); 
            if (grid[i][j] < 0) grid[i][j] = 0;
            
            const x = i * (pixelSize + gap);
            const y = j * (pixelSize + gap);
            
            const colorIndex = (i * 7 + j * 13) % parsedColors.length;
            
            ctx.fillStyle = parsedColors[colorIndex];
            ctx.globalAlpha = grid[i][j] * 0.4;
            ctx.fillRect(x, y, pixelSize, pixelSize);
            ctx.globalAlpha = 1.0;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, gap, speed, pixelSize]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-100 transition-opacity duration-300"
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
