import { Link } from 'react-router-dom'
import { Check, Rocket, Target } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { companyInfo } from '../data/services'

export default function About() {
  return (
    <>
      <PageBanner
        title="About Meridian Global Energy"
        crumb="About Us"
        image="/images/hero-platform.jpg"
      />

      <section>
        <div className="container split">
          <Reveal>
            <span className="kicker">Who We Are</span>
            <h2 className="section-title">
              One company for projects that cross borders
            </h2>
            <p className="section-lede">
              Meridian Global Energy is a fictional company shown on this demonstration website.
              The story it tells is a global oil, gas and energy services firm working with
              operators in upstream, midstream and downstream, plus marine logistics.
            </p>
            <p className="section-lede">
              The work on these pages covers engineering support, procurement, logistics, asset
              recovery and fuel supply — the kind of corporate site an international energy
              business can put in front of clients.
            </p>
            <Link to="/services" className="btn btn-green" style={{ marginTop: 30 }}>
              See What We Do <span className="arrow">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="split-media">
            <img
              className="main-img"
              src="/images/refinery-orig.jpg"
              alt="Tanker alongside an industrial harbour"
              loading="lazy"
            />
            <img
              className="float-img"
              src="/images/pipeline1.jpg"
              alt="Technician operating industrial valves"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Where We Operate</span>
            <h2 className="section-title">Five Regions, One Delivery Standard</h2>
            <p className="section-lede">
              Sample regional desks. These cities illustrate a global footprint. They are not
              real offices, and no one at these locations is affiliated with this demo.
            </p>
          </Reveal>

          <div className="region-grid">
            {companyInfo.regions.map((region, i) => (
              <Reveal key={region.name} delay={i * 80}>
                <article className="region-card">
                  <p>{region.name}</p>
                  <h3>{region.city}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Our Direction</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </Reveal>

          <div className="vm-grid">
            <Reveal>
              <div className="vm-card vision">
                <div className="glyph" aria-hidden="true"><Target size={28} /></div>
                <h3>Our Vision</h3>
                <p>
                  To be the energy services partner operators call when a project has to move
                  safely across regions, assets and supply chains.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="vm-card mission">
                <div className="glyph" aria-hidden="true"><Rocket size={28} /></div>
                <h3>Our Mission</h3>
                <p>
                  Plan every engagement through to handover. Engineering, supply, logistics and
                  maintenance stay accountable to the same quality and safety standard.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal className="split-media">
            <img
              className="main-img"
              src="/images/workers.jpg"
              alt="Field crew in hard hats at a work site"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="kicker">Why Choose Us</span>
            <h2 className="section-title">Built for International Operators</h2>
            <p className="section-lede">
              Passion, respect, integrity, monitoring and excellence guide how the company is
              presented — across upstream, midstream and downstream work.
            </p>
            <ul className="check-list">
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> One standard for every operating region</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Work held to the client quality plan and specification</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Specialized crews and training for the asset</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Projects planned through to completion</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Marine, oil, gas and energy coverage</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
