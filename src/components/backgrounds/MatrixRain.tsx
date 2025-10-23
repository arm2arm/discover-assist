import { useEffect, useState } from 'react';

const MatrixRain = ({ density = 25 }: { density?: number }) => {
  const [columns, setColumns] = useState<Array<{ chars: string[]; speed: number; delay: number }>>([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const symbols = ['φ', 'ψ', 'θ', 'α', 'β', 'γ', 'Δ', 'λ', 'Σ', 'Ω', 'π', 'AI', 'LLM', 'ML', '∫', '∂', '∇', '∑', '0', '1', 'E', 'h', 'c'];
    
    const columnCount = Math.floor(window.innerWidth / density);
    const newColumns = Array.from({ length: columnCount }, () => ({
      chars: Array.from({ length: 20 }, () => symbols[Math.floor(Math.random() * symbols.length)]),
      speed: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 5 // 0-5 second delay
    }));

    setColumns(newColumns);
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {columns.map((column, i) => (
        <div
          key={i}
          className="absolute top-0 flex flex-col text-xs font-mono matrix-column"
          style={{
            left: `${(i / columns.length) * 100}%`,
            animationDuration: `${column.speed}s`,
            animationDelay: `${column.delay}s`,
            color: 'hsl(165, 60%, 55%)',
            textShadow: '0 0 8px hsl(165, 60%, 55%)',
          }}
        >
          {column.chars.map((char, j) => (
            <span
              key={j}
              className="block leading-tight"
              style={{
                opacity: Math.max(0, 1 - j / column.chars.length)
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;
