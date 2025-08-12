import React from 'react';

// PUBLIC_INTERFACE
export default function Services({ items }) {
  /** Services section listing offerings as cards. */
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <h2 id="services-title" className="section-title">Services</h2>
          <p className="section-desc">Curated experiences for every traveler.</p>
        </div>
        <div className="grid grid-4" role="list">
          {(items || []).map((s, idx) => (
            <article role="listitem" key={idx} className="card" aria-label={s.title}>
              <div aria-hidden="true" style={{ fontSize: 28 }}>{s.icon || '🧭'}</div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
