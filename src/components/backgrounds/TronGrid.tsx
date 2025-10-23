const TronGrid = ({ opacity = 0.3 }: { opacity?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="tron-grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="0.5"
            />
          </pattern>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(165, 60%, 55%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(185, 60%, 45%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(205, 70%, 28%)" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="glow-gradient">
            <stop offset="0%" stopColor="hsl(165, 60%, 55%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(165, 60%, 55%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base grid */}
        <rect width="100%" height="100%" fill="url(#tron-grid)" />

        {/* Animated nodes */}
        <circle className="tron-node tron-node-1" r="3" fill="url(#glow-gradient)">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 100 100 L 500 100 L 500 300 L 100 300 Z"
          />
        </circle>
        <circle className="tron-node tron-node-2" r="2.5" fill="url(#glow-gradient)">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M 800 200 L 400 200 L 400 500 L 800 500 Z"
          />
        </circle>
        <circle className="tron-node tron-node-3" r="2" fill="url(#glow-gradient)">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M 200 400 L 700 400 L 700 600 L 200 600 Z"
          />
        </circle>

        {/* Scan line effect */}
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="hsl(165, 60%, 55%)"
          strokeWidth="2"
          opacity="0.6"
          className="tron-scan-line"
        >
          <animate
            attributeName="y1"
            from="0"
            to="100%"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            from="0"
            to="100%"
            dur="6s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
};

export default TronGrid;
