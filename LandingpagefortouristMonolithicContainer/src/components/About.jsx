import React from 'react';

// PUBLIC_INTERFACE
export default function About({ data }) {
  /** About section describing the company and highlights. */
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <h2 id="about-title" className="section-title">{data?.heading || 'About Us'}</h2>
          <p className="section-desc">{data?.body}</p>
        </div>
        {Array.isArray(data?.highlights) && data.highlights.length > 0 && (
          <div className="grid grid-3" role="list">
            {data.highlights.map((h, idx) => (
              <div role="listitem" className="card" key={idx}>
                <h3 className="card-title">{h}</h3>
                <p className="card-text">We ensure this in every itinerary.</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
