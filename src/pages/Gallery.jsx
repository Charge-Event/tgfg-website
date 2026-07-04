import { useState } from 'react';
import ArchFrame from '../components/ArchFrame';
import { galleryImages } from '../data/content';
import './Gallery.css';

const CATEGORIES = ['All', 'Weddings', 'Corporate', 'Live Counters', 'Desserts'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Moments we've catered</span>
          <h1>Gallery</h1>
          <p>A look at recent weddings, corporate events and live counters. Real event photos to be added here.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`gallery-filter ${filter === c ? 'gallery-filter--active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {shown.map((img) => (
              <ArchFrame key={img.alt} ratio="4 / 5" label={img.alt} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
