import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowIntensity: number;
  pulsePhase: number;
}

const NeuralNetwork = ({ intensity = 1 }: { intensity?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize particles - more nodes for neural network effect
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000 * intensity);
    const colors = ['hsl(165, 60%, 55%)', 'hsl(185, 60%, 45%)', 'hsl(205, 70%, 28%)'];
    
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      glowIntensity: Math.random() * 0.5 + 0.5,
      pulsePhase: Math.random() * Math.PI * 2
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Periodic boundary conditions (wrap around)
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          particle.vx += dx * 0.00003;
          particle.vy += dy * 0.00003;
        }

        // Update pulse phase with varied speeds for organic feel
        particle.pulsePhase = time + i * 0.1;
        const pulse = Math.sin(particle.pulsePhase * 2) * 0.5 + 0.5;
        const slowPulse = Math.sin(time * 0.5 + i * 0.2) * 0.5 + 0.5;
        
        // Animated radius
        const animatedRadius = particle.radius * (1 + slowPulse * 0.5);
        const glowRadius = animatedRadius * (4 + pulse * 2);

        // Draw node glow with enhanced animation
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowRadius
        );
        gradient.addColorStop(0, particle.color.replace(')', `, ${0.9 * pulse})`).replace('hsl', 'hsla'));
        gradient.addColorStop(0.3, particle.color.replace(')', `, ${0.5 * pulse})`).replace('hsl', 'hsla'));
        gradient.addColorStop(0.7, particle.color.replace(')', `, ${0.2 * pulse})`).replace('hsl', 'hsla'));
        gradient.addColorStop(1, 'rgba(77, 208, 225, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw node core with animated size
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, animatedRadius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 15 * pulse + 5;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const connectionPulse = Math.sin(time * 2 + distance * 0.01) * 0.5 + 0.5;
            const opacity = (0.4 * (1 - distance / 150)) * connectionPulse;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            
            // Gradient connection
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              other.x, other.y
            );
            lineGradient.addColorStop(0, `rgba(77, 208, 225, ${opacity})`);
            lineGradient.addColorStop(0.5, `rgba(100, 220, 235, ${opacity * 1.2})`);
            lineGradient.addColorStop(1, `rgba(77, 208, 225, ${opacity})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralNetwork;
