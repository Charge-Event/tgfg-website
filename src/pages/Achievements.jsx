import { achievements, testimonials } from '../data/content';
import './Achievements.css';

export default function Achievements() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Track record</span>
          <h1>Achievements</h1>
          <p>A decade of events, recognitions and the trust of clients across Hyderabad.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="stats-grid">
            {achievements.map((a) => (
              <div className="stat-block" key={a.label}>
                <span className="stat-block__value">{a.value}</span>
                <span className="stat-block__label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <span className="eyebrow">In their words</span>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.author}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <span>{t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">Recognition</span>
          <div className="awards-row">
            <div className="award-slot">Award / Press Mention</div>
            <div className="award-slot">Award / Press Mention</div>
            <div className="award-slot">Award / Press Mention</div>
          </div>
        </div>
      </section>
    </>
  );
}
