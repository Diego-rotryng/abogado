export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10 H85" stroke="currentColor" strokeWidth="1" />
      <path d="M115 10 H198" stroke="currentColor" strokeWidth="1" />
      <path d="M85 10 Q92 4 100 10 Q108 16 115 10" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="100" cy="10" r="1.6" fill="currentColor" />
      <circle cx="6" cy="10" r="1.2" fill="currentColor" />
      <circle cx="194" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}
