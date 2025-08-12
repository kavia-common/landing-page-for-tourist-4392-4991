import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with simple brand and copyright. */
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>© {year} Aurora Travels · Crafted with care for explorers worldwide.</p>
      </div>
    </footer>
  );
}
