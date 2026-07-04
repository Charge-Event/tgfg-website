import { useState } from 'react';
import { contact } from '../data/content';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to an email service (e.g. Formspree) or backend
    // endpoint before going live — this currently only updates the UI.
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Let's plan your event</span>
          <h1>Contact</h1>
          <p>Share your date, guest count and occasion — we'll get back with a menu and quote.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact-form__success">
                <h3>Enquiry received</h3>
                <p>Thank you — our team will reach out shortly to discuss your event.</p>
              </div>
            ) : (
              <>
                <div className="field-row">
                  <label>
                    Name
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    Phone
                    <input type="tel" name="phone" required />
                  </label>
                </div>
                <label>
                  Email
                  <input type="email" name="email" />
                </label>
                <div className="field-row">
                  <label>
                    Event date
                    <input type="date" name="date" />
                  </label>
                  <label>
                    Guest count
                    <input type="number" name="guests" min="1" />
                  </label>
                </div>
                <label>
                  Occasion
                  <select name="occasion" defaultValue="Wedding">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Celebration</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Tell us more
                  <textarea name="message" rows="4" placeholder="Cuisine preferences, venue, anything else we should know" />
                </label>
                <button type="submit" className="btn btn-primary">Send Enquiry</button>
              </>
            )}
          </form>

          <div className="contact-details">
            <div>
              <span className="eyebrow">Call or WhatsApp</span>
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="contact-details__phone">{p}</a>
              ))}
            </div>
            <div>
              <span className="eyebrow">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <span className="eyebrow">Visit</span>
              <p>{contact.address}</p>
            </div>
            <a
              href="https://wa.me/917353109444"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark contact-details__whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
