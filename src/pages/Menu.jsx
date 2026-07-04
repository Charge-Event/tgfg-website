import { Link } from 'react-router-dom';
import JaaliDivider from '../components/JaaliDivider';
import { menu } from '../data/content';
import './Menu.css';

export default function Menu() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Curated by our chefs</span>
          <h1>Menu</h1>
          <p>
            A sample of what's typically served — every menu is customised
            per event, cuisine preference and guest count.
          </p>
        </div>
      </section>

      <section className="menu-section">
        <div className="container">
          {menu.map((cat, idx) => (
            <div key={cat.category} className="menu-category">
              <h3>{cat.category}</h3>
              <ul className="menu-list">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <span className="menu-list__name">{item.name}</span>
                    <span className="menu-list__note">{item.note}</span>
                  </li>
                ))}
              </ul>
              {idx < menu.length - 1 && (
                <div className="menu-category__divider">
                  <JaaliDivider count={10} tone="bottle" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Want a menu built around your event?</h2>
          <p>Share your guest count and preferences — we'll curate a tasting menu for you.</p>
          <Link to="/contact" className="btn btn-primary">Request A Custom Menu</Link>
        </div>
      </section>
    </>
  );
}
