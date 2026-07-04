import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/content';
import './ListPage.css';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h1>Services</h1>
          <p>Every event is catered end-to-end — menu, kitchen and service — tailored to the occasion.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-cards">
            {services.map((s) => (
              <div className="grid-card" key={s.title}>
                <span className="grid-card__tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Not sure which service fits your event?</h2>
          <p>Tell us the occasion and guest count — we'll recommend the right format.</p>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
