import './ArchFrame.css';

/**
 * Signature visual motif for the site: an arched frame echoing Hyderabad's
 * Nizami architecture (Charminar, Golconda gateways). Used for hero imagery,
 * gallery photos, and menu category art instead of plain rectangles.
 */
export default function ArchFrame({ src, alt, ratio = '4 / 5', bordered = true, className = '', label }) {
  return (
    <div
      className={`arch-frame ${bordered ? 'arch-frame--bordered' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="arch-frame__placeholder">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 21V10a8 8 0 0 1 16 0v11"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          {label && <span>{label}</span>}
        </div>
      )}
    </div>
  );
}
