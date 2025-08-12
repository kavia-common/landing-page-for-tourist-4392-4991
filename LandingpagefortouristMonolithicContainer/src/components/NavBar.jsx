import React from 'react';

// PUBLIC_INTERFACE
export default function NavBar({ onToggleTheme, theme }) {
  /** Top navigation bar with anchor links and theme toggle. */
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#hero" className="brand" aria-label="Aurora Travels home">
          <span className="logo-dot" aria-hidden="true" /> Aurora Travels
        </a>
        <div className="nav-links" aria-label="Section links">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#destinations">Destinations</a>
          <a className="nav-link" href="#testimonials">Testimonials</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
}
