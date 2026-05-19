import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Antigravity = ({ waveSpeed = 3.6, particleCount = 120 }) => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    
    // Dynamic brand color based on theme
    const getBrandColor = () => {
      // Neon green for dark mode, cyan for light mode matching index.css
      return theme === 'dark' ? '#00FF00' : '#00E5FF';
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    
    class Particle {
      constructor() {
        this.reset();
        // Distribute initially across the screen
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 2 + 1.5;
        this.baseX = this.x;
        // Move upward using waveSpeed to scale the velocity
        this.speedY = -(Math.random() * 0.8 + 0.4) * (waveSpeed / 2);
        this.angle = Math.random() * Math.PI * 2;
        // Oscillation speed and amplitude
        this.angleSpeed = (Math.random() * 0.02 + 0.01) * (waveSpeed / 3.6);
        this.amplitude = Math.random() * 60 + 20;
      }
      
      update() {
        this.y += this.speedY;
        this.angle += this.angleSpeed;
        this.x = this.baseX + Math.sin(this.angle) * this.amplitude;
        
        // Reset particle if it floats past the top
        if (this.y < -50) {
          this.reset();
        }
      }
      
      draw(ctx, currentColor) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = currentColor;
        ctx.shadowBlur = 15;
        ctx.shadowColor = currentColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for next drawing
      }
    }
    
    const init = () => {
      particles = [];
      const count = window.innerWidth < 768 ? Math.floor(particleCount / 2) : particleCount;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentColor = getBrandColor();
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx, currentColor);
      });
      
      // Draw magnetic field connecting lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            // Calculate opacity based on distance (closer = more opaque)
            const opacity = Math.max(0, 1 - dist / 120);
            
            // Extract RGB from hex to apply opacity
            let r, g, b;
            if (currentColor === '#00FF00') {
              r = 0; g = 255; b = 0;
            } else {
              r = 0; g = 229; b = 255;
            }
            
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.5})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [waveSpeed, particleCount, theme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-70"
      />
    </div>
  );
};

export default Antigravity;
