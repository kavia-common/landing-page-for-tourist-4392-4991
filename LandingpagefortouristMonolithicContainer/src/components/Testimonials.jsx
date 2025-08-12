import React from 'react';

// PUBLIC_INTERFACE
export default function Testimonials({ items }) {
  /** Testimonials section with customer quotes. */
  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <h2 id="testimonials-title" className="section-title">What Travelers Say</h2>
          <p className="section-desc">Stories from our happy explorers.</p>
        </div>
        <div className="grid grid-3" role="list">
          {(items || []).map((t, idx) => (
            <blockquote role="listitem" key={idx} className="card testimonial">
              <p className="quote">“{t.quote}”</p>
              <cite className="author">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
