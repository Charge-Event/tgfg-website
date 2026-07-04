export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <div
      className="section-heading"
      style={{
        textAlign: align,
        color: light ? 'var(--pearl)' : 'var(--ink)',
        marginBottom: '2.5rem',
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={{ fontSize: 'var(--step-h2)', marginTop: '0.6rem' }}>{title}</h2>
      {subtitle && (
        <p
          style={{
            marginTop: '0.9rem',
            maxWidth: 560,
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
            color: light ? 'var(--pearl-dim)' : 'var(--stone-dark)',
            fontSize: '1.02rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
