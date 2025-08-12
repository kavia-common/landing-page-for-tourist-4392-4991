import React from 'react';

// PUBLIC_INTERFACE
export default function Destinations({ items }) {
  /** Destinations section with a grid of destination highlight cards. */
  return (
    <section id="destinations" className="section" aria-labelledby="destinations-title">
      <div className="container">
        <div className="section-header">
          <h2 id="destinations-title" className="section-title">Top Destinations</h2>
          <p className="section-desc">Handpicked places for your next adventure.</p>
        </div>
        <div className="grid grid-3" role="list">
          {(items || []).map((d, idx) => (
            <article role="listitem" className="card" key={idx} aria-label={d.name}>
              <h3 className="card-title">{d.name}</h3>
              <p className="card-text">{d.description}</p>
              <p className="helper">{d.imageAlt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
