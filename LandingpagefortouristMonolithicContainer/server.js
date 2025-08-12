'use strict';

/**
 * Express.js server for the LandingpagefortouristMonolithicContainer.
 * - Serves API endpoints for content and contact inquiries.
 * - Optionally connects to MongoDB if MONGO_URI is provided.
 * - In production, serves the React build as static files.
 */

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// Local modules
const apiRoutes = require('./server/routes/api');
const contactRoutes = require('./server/routes/contact');

const app = express();

// Basic security/headers and JSON parsing
app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

// Health check
// PUBLIC_INTERFACE
app.get('/api/health', (req, res) => {
  /** Health check endpoint returning server status. */
  return res.json({ status: 'ok', uptime: process.uptime() });
});

// Connect to MongoDB if MONGO_URI is set
const mongoUri = process.env.MONGO_URI || '';
let dbConnected = false;

async function connectDB(uri) {
  try {
    if (!uri) {
      console.log('MONGO_URI not provided. Running without database.');
      return;
    }
    await mongoose.connect(uri, {
      // Use modern Mongoose defaults
    });
    dbConnected = true;
    console.log('MongoDB connected.');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
}

// Mount routes
app.use('/api', apiRoutes);
app.use('/api', contactRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, 'build');
  app.use(express.static(buildPath));
  // PUBLIC_INTERFACE
  app.get('*', (req, res) => {
    /** Serves React frontend for any non-API route in production. */
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB(mongoUri);
});

module.exports = app;
