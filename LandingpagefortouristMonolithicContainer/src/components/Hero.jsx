import React from 'react';

// PUBLIC_INTERFACE
export default function Hero({ data }) {
  /** Hero section with title, subtitle and call to action. */
  return (
    <section id="hero" className="hero" aria-label="Intro">
      <div className="container hero-grid">
        <div>
          <h1 className="hero-title">{data?.title}</h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn" aria-label="Plan your trip via contact form">
              {data?.ctaText || 'Get Started'}
            </a>
            <a href="#destinations" className="btn ghost">Browse Destinations</a>
          </div>
        </div>
        <div className="hero-card" aria-label="Why choose us">
          <h3>Why travel with us</h3>
          <ul>
            <li>Tailor-made journeys</li>
            <li>Trusted local experts</li>
            <li>24/7 trip assistance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
