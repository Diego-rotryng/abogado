export function OrnateFrame({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 600" className={className} fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="of-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f4d98a" />
          <stop offset="50%" stopColor="#b8893a" />
          <stop offset="100%" stopColor="#6e4a1c" />
        </linearGradient>
      </defs>
      {/* outer */}
      <rect x="6" y="6" width="388" height="588" stroke="url(#of-gold)" strokeWidth="1.5" />
      <rect x="14" y="14" width="372" height="572" stroke="url(#of-gold)" strokeWidth="0.6" />
      {/* corner flourishes */}
      {[
        { x: 14, y: 14, r: 0 },
        { x: 386, y: 14, r: 90 },
        { x: 386, y: 586, r: 180 },
        { x: 14, y: 586, r: 270 },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`} stroke="url(#of-gold)" strokeWidth="1" fill="none">
          <path d="M0 30 Q10 20 20 20 Q30 20 30 0" />
          <path d="M5 25 Q15 18 25 18" opacity=".6" />
          <circle cx="22" cy="22" r="2" fill="url(#of-gold)" />
          <path d="M10 40 Q22 32 35 30" opacity=".4" />
        </g>
      ))}
      {/* mid ornaments top/bottom */}
      <g stroke="url(#of-gold)" strokeWidth="1" fill="none">
        <path d="M180 14 Q200 4 220 14" />
        <circle cx="200" cy="9" r="2" fill="url(#of-gold)" />
        <path d="M180 586 Q200 596 220 586" />
        <circle cx="200" cy="591" r="2" fill="url(#of-gold)" />
        <path d="M14 280 Q4 300 14 320" />
        <path d="M386 280 Q396 300 386 320" />
      </g>
    </svg>
  );
}
