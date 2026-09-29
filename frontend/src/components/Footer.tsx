import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import BrandMark from './BrandMark'
import { services, companyInfo } from '../data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <BrandMark />
              <span className="brand-name">
                Meridian
                <small>Global Energy</small>
              </span>
            </div>
            <p>
              A demonstration website for a global oil, gas and energy services company. Sample
              offices span the Americas, Europe, the Middle East, Africa and Asia-Pacific.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="ico" aria-hidden="true"><MapPin size={16} /></span>
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Phone size={16} /></span>
                <span>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && ', '}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Mail size={16} /></span>
                <a href={companyInfo.emailHref}>{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {companyInfo.fullName}. Demonstration website.</span>
          <span>Fictional company · Sample contact details only</span>
        </div>
      </div>
    </footer>
  )
}
