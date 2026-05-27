export function WaxSeal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wax" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f4d98a" />
          <stop offset="45%" stopColor="#b8893a" />
          <stop offset="100%" stopColor="#3a2410" />
        </radialGradient>
        <radialGradient id="waxGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4d98a" stopOpacity=".6"/>
          <stop offset="100%" stopColor="#f4d98a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="55" fill="url(#waxGlow)" />
      {/* drip blob */}
      <path d="M60 8
               C 80 8, 105 25, 108 55
               C 112 78, 100 100, 80 108
               C 68 112, 62 108, 60 112
               C 58 108, 52 112, 40 108
               C 20 100, 8 78, 12 55
               C 15 25, 40 8, 60 8 Z"
            fill="url(#wax)" stroke="#2a1808" strokeWidth=".5"/>
      {/* inner ring */}
      <circle cx="60" cy="60" r="38" fill="none" stroke="#f4d98a" strokeWidth=".6" opacity=".7"/>
      <circle cx="60" cy="60" r="34" fill="none" stroke="#f4d98a" strokeWidth=".4" opacity=".5" strokeDasharray="2 3"/>
      {/* monogram MC */}
      <text x="60" y="68" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif"
            fontSize="34" fontStyle="italic" fontWeight="600" fill="#f4d98a" opacity=".95">
        MC
      </text>
      {/* tiny stars */}
      {[
        [60, 26], [60, 94], [26, 60], [94, 60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="#f4d98a" opacity=".8"/>
      ))}
    </svg>
  );
}
