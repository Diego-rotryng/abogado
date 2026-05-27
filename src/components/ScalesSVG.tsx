export function ScalesSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e6c474" />
          <stop offset="50%" stopColor="#b8893a" />
          <stop offset="100%" stopColor="#7a5722" />
        </linearGradient>
      </defs>
      {/* stand */}
      <path d="M100 30 V150" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="28" r="5" fill="url(#gold)" />
      <path d="M80 155 H120" stroke="url(#gold)" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 170 H130" stroke="url(#gold)" strokeWidth="5" strokeLinecap="round" />
      {/* beam */}
      <g className="animate-sway" style={{ transformOrigin: "100px 50px" }}>
        <path d="M30 50 H170" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round" />
        {/* chains + pans */}
        <path d="M40 50 L40 90" stroke="url(#gold)" strokeWidth="1.5" />
        <path d="M30 90 L50 90" stroke="url(#gold)" strokeWidth="1.5" />
        <path d="M30 90 Q40 110 50 90" stroke="url(#gold)" strokeWidth="2" fill="url(#gold)" fillOpacity=".4"/>
        <ellipse cx="40" cy="92" rx="22" ry="5" fill="url(#gold)" />
        <path d="M160 50 L160 90" stroke="url(#gold)" strokeWidth="1.5" />
        <path d="M150 90 L170 90" stroke="url(#gold)" strokeWidth="1.5" />
        <path d="M150 90 Q160 110 170 90" stroke="url(#gold)" strokeWidth="2" fill="url(#gold)" fillOpacity=".4"/>
        <ellipse cx="160" cy="92" rx="22" ry="5" fill="url(#gold)" />
      </g>
    </svg>
  );
}
