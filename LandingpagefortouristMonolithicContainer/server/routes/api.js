'use strict';

const express = require('express');
const router = express.Router();

/**
 * Provides content for the landing page: About, Services, Destinations, Testimonials, and Contact info.
 */

// PUBLIC_INTERFACE
router.get('/content', (req, res) => {
  /** Returns structured content for the landing page sections. */
  const content = {
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
    services: [
      {
        title: 'Custom Itineraries',
        description:
          'From city breaks to multi-country adventures, we craft journeys that reflect your interests and budget.',
        icon: '🧭',
      },
      {
        title: 'Luxury Stays',
        description:
          'Stay at handpicked hotels, resorts, and boutique properties that elevate your travel experience.',
        icon: '🏨',
      },
      {
        title: 'Adventure Tours',
        description:
          'Thrilling outdoor experiences including hiking, diving, safaris, and more—in absolute safety.',
        icon: '🗻',
      },
      {
        title: 'Cultural Experiences',
        description:
          'Immerse yourself in local traditions—culinary tours, artisan workshops, and community events.',
        icon: '🎭',
      },
    ],
    destinations: [
      {
        name: 'Santorini, Greece',
        description: 'Sunsets, whitewashed villages, and azure seas.',
        imageAlt: 'Santorini cliffside view',
      },
      {
        name: 'Kyoto, Japan',
        description: 'Historic temples, tea houses, and cherry blossoms.',
        imageAlt: 'Kyoto temple with cherry blossoms',
      },
      {
        name: 'Machu Picchu, Peru',
        description: 'Ancient citadel set high in the Andes Mountains.',
        imageAlt: 'Machu Picchu mountain view',
      },
      {
        name: 'Bali, Indonesia',
        description: 'Lush rice terraces, beaches, and vibrant culture.',
        imageAlt: 'Bali rice terraces',
      },
      {
        name: 'Amalfi Coast, Italy',
        description: 'Dramatic coastline, pastel villages, and fine cuisine.',
        imageAlt: 'Amalfi coastal village',
      },
      {
        name: 'Banff, Canada',
        description: 'Turquoise lakes and alpine adventures.',
        imageAlt: 'Banff lake and mountains',
      },
    ],
    testimonials: [
      {
        name: 'Sofia Martinez',
        quote:
          'Every detail was perfect. Aurora Travels transformed our honeymoon into a dream we never wanted to end!',
      },
      {
        name: 'James Carter',
        quote:
          'Outstanding service! The itinerary was seamless and we discovered hidden gems we would’ve missed.',
      },
      {
        name: 'Priya Nair',
        quote:
          'Their local insights made our family trip truly special. The kids loved every activity!',
      },
    ],
    contact: {
      email: 'hello@auroratravels.example',
      phone: '+1 (555) 010-2233',
      address: '123 Aurora Way, Wanderlust City',
    },
  };

  return res.json(content);
});

module.exports = router;
