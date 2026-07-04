import { Link } from 'react-router-dom';
import ArchFrame from '../components/ArchFrame';
import JaaliDivider from '../components/JaaliDivider';
import SectionHeading from '../components/SectionHeading';
import { services, achievements, testimonials } from '../data/content';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">Luxury Catering · Hyderabad</span>
            <h1 className="hero__title">
              Flavours that impress,
              <br />
              service that delights.
            </h1>
            <p className="hero__sub">
              The Good Food Guys bring restaurant-grade craft and Nizami
              hospitality to weddings, corporate events and celebrations
              across Hyderabad — every dish plated as carefully as it's cooked.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
              <Link to="/menu" className="btn btn-outline">View Menu</Link>
            </div>
          </div>
          <div className="hero__art">
            <ArchFrame label="Signature plating shot" ratio="3 / 4" />
          </div>
        </div>
      </section>

      <div className="container"><JaaliDivider /></div>

      <section className="intro">
        <div className="container intro__grid">
          <SectionHeading
            eyebrow="Who we are"
            title="A decade of celebrations, catered with care"
            subtitle="From intimate sangeets to thousand-guest receptions, we design menus and execute service with the same discipline a five-star kitchen holds itself to — rooted in Hyderabad's own culinary heritage."
          />
          <div className="intro__stats">
            {achievements.map((a) => (
              <div className="intro__stat" key={a.label}>
                <span className="intro__stat-value">{a.value}</span>
                <span className="intro__stat-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around your occasion"
            align="center"
          />
          <div className="services-preview__grid">
            {services.slice(0, 3).map((s) => (
              <div className="services-preview__card" key={s.title}>
                <span className="services-preview__tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <div className="services-preview__more">
            <Link to="/services" className="btn btn-outline-dark">See All Services</Link>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container testimonial__inner">
          <span className="testimonial__mark">&ldquo;</span>
          <p className="testimonial__quote">{testimonials[0].quote}</p>
          <span className="testimonial__author">{testimonials[0].author}</span>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Planning an event?</h2>
          <p>Tell us the date, the guest count, and the occasion — we'll take it from there.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Enquiry</Link>
        </div>
      </section>
    </>
  );
}
