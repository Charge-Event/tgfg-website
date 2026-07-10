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
          <span className="arch-frame__monogram">TGFG</span>
          <span className="arch-frame__rule" />
          {label && <span className="arch-frame__label">{label}</span>}
        </div>
      )}
    </div>
  );
}
