export function GoldParticles({ className = "" }: { className?: string }) {
  // deterministic positions for SSR safety
  const dots = Array.from({ length: 40 }).map((_, i) => {
    const x = (i * 97) % 100;
    const y = (i * 53) % 100;
    const r = 0.5 + ((i * 17) % 18) / 10;
    const dur = 6 + (i % 7);
    const delay = (i % 9) * 0.4;
    const opacity = 0.25 + ((i % 5) / 10);
    return { x, y, r, dur, delay, opacity };
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <radialGradient id="gp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4d98a" />
          <stop offset="100%" stopColor="#b8893a" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="url(#gp)" opacity={d.opacity}>
          <animate attributeName="cy" values={`${d.y};${(d.y + 20) % 100};${d.y}`} dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values={`${d.opacity};${d.opacity * 0.3};${d.opacity}`} dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  );
}
