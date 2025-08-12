import React, { useEffect, useState } from 'react';
import './App.css';
import { getContent, sendInquiry } from './services/api';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  /** Root component rendering all sections and handling theme + data fetching. */
  const [theme, setTheme] = useState('light');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Apply theme to html root for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Fetch content from backend
  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const data = await getContent();
        if (mounted) {
          setContent(data);
        }
      } catch (err) {
        // Fallback content on error
        if (mounted) {
          setContent({
            hero: {
              title: 'Explore the World with Aurora Travels',
              subtitle:
                'Memorable journeys crafted with care. Discover handpicked destinations, curated experiences, and exceptional service.',
              ctaText: 'Plan Your Trip',
            },
            about: {
              heading: 'About Us',
              body:
                'Aurora Travels is a boutique travel company dedicated to creating unforgettable experiences. From serene escapes to exhilarating adventures, we tailor every journey to your style and pace.',
              highlights: ['Personalized itineraries', 'Expert local guides', '24/7 concierge support'],
            },
            services: [],
            destinations: [],
            testimonials: [],
            contact: { email: 'hello@auroratravels.example', phone: '+1 (555) 010-2233', address: '' },
          });
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  // SEO basics
  useEffect(() => {
    document.title = 'Aurora Travels | Explore the World';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Aurora Travels offers bespoke journeys, luxury stays, and adventure tours worldwide. Discover destinations, read testimonials, and contact us to plan your dream trip.'
      );
    }
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    /** Toggles between light and dark theme. */
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // PUBLIC_INTERFACE
  const submitContact = async (payload) => {
    /**
     * Sends contact inquiry to backend.
     * Params: payload { name, email, message, subject?, phone? }
     * Returns: { success, stored }
     */
    return sendInquiry(payload);
  };

  if (loading) {
    return (
      <div className="App">
        <header className="app-header-basic">
          <div className="container">
            <p role="status" aria-live="polite">
              Loading…
            </p>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero data={content?.hero} />
        <About data={content?.about} />
        <Services items={content?.services || []} />
        <Destinations items={content?.destinations || []} />
        <Testimonials items={content?.testimonials || []} />
        <Contact onSubmit={submitContact} info={content?.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
