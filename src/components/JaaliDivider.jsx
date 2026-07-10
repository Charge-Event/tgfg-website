/**
 * A thin repeating row of arches, echoing the jaali (perforated stone screen)
 * motif seen across Hyderabad's Nizami architecture. Used as a section
 * divider so the site's signature idea recurs in a small, quiet way.
 */
export default function JaaliDivider({ count = 14, tone = 'brass' }) {
  const color = tone === 'brass' ? 'var(--brass)' : 'var(--bottle)';
  const arches = Array.from({ length: count });
  const midX = (count * 40) / 2;

  return (
    <div className="jaali-divider" aria-hidden="true">
      <svg width="100%" height="32" viewBox={`0 0 ${count * 40} 32`} preserveAspectRatio="none">
        {arches.map((_, i) => (
          <path
            key={i}
            d={`M ${i * 40 + 4} 27 L ${i * 40 + 4} 14 A 16 16 0 0 1 ${i * 40 + 36} 14 L ${i * 40 + 36} 27`}
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            opacity="0.9"
          />
        ))}
        <rect
          x={midX - 5}
          y="1"
          width="10"
          height="10"
          fill={color}
          transform={`rotate(45 ${midX} 6)`}
        />
      </svg>
    </div>
  );
}
