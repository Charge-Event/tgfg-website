import { Link } from 'react-router-dom';
import JaaliDivider from './JaaliDivider';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <JaaliDivider tone="brass" count={16} />
        <div className="footer__grid">
          <div>
            <span className="footer__mark">TGFG</span>
            <p className="footer__blurb">
              Luxury catering for weddings, corporate events and celebrations
              across Hyderabad — flavours that impress, service that delights.
            </p>
            <a
              className="footer__insta"
              href="https://www.instagram.com/the.goodfoodguys"
              target="_blank"
              rel="noreferrer"
            >
              @the.goodfoodguys
            </a>
          </div>

          <div>
            <span className="footer__heading">Explore</span>
            <ul className="footer__links">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
            </ul>
          </div>

          <div>
            <span className="footer__heading">Get in touch</span>
            <ul className="footer__links">
              <li><a href="tel:+917207613310">+91 72076 13310</a></li>
              <li><a href="tel:+917353109444">+91 73531 09444</a></li>
              <li><a href="mailto:sales@thegoodfoodguys.com">sales@thegoodfoodguys.com</a></li>
              <li className="footer__address">
                Rajendra Nagar, Khanapur, Gandipet, Hyderabad, Telangana 500075
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} The Good Food Guys. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
