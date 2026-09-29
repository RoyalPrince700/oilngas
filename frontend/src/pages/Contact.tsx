import { useState, type FormEvent } from 'react'
import { Globe, Mail, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { companyInfo, services } from '../data/services'

type FormStatus = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Bots often fill the hidden field. People never see it.
    if (String(data.get('website') || '').trim()) {
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      form.reset()
    }, 400)
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        crumb="Contact"
        image="/images/hero-refinery.jpg"
      />

      <section>
        <div className="container">
          <Reveal className="center" >
            <span className="kicker">Get in Touch</span>
            <h2 className="section-title contact-heading">
              We&rsquo;d Love to Hear From You
            </h2>
          </Reveal>

          <div className="contact-grid">
            <Reveal>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Globe size={26} /></div>
                <h3>Global Coverage</h3>
                <p>
                  {companyInfo.regions.map((region) => region.city).join(' · ')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Phone size={26} /></div>
                <h3>Call Us</h3>
                <p>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <br />}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Mail size={26} /></div>
                <h3>Email Us</h3>
                <p>
                  {companyInfo.emails.map((mail, i) => (
                    <span key={mail.href}>
                      {i > 0 && <br />}
                      <a href={mail.href}>{mail.display}</a>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="contact-split">
            <Reveal>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <p>Tell us about your project or supply needs and we&rsquo;ll respond promptly.</p>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+1 555 010 0000" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service of Interest</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="">General Enquiry</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : (
                    <>Send Message <span className="arrow">→</span></>
                  )}
                </button>
                {status === 'sent' && (
                  <p className="form-status">
                    Received. This is a demonstration form, so the message stays on this sample
                    site and is not delivered to a real inbox.
                  </p>
                )}
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="presence-panel">
                <p className="kicker">Sample Details</p>
                <h2>Demonstration contact</h2>
                <p>
                  Meridian Global Energy is not a real company. The phone number, email and
                  cities on this page are placeholders for a global oil and gas website.
                </p>
                <ul>
                  {companyInfo.regions.map((region) => (
                    <li key={region.name}>
                      <strong>{region.name}</strong>
                      <span>{region.city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
