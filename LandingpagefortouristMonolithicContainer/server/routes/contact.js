'use strict';

const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

/**
 * Accepts contact inquiries and stores them in MongoDB if available.
 * Validates required fields server-side.
 */

// PUBLIC_INTERFACE
router.post('/contact', async (req, res) => {
  /**
   * Accepts a contact inquiry submission.
   * Body params:
   * - name: string (required)
   * - email: string (required)
   * - message: string (required)
   * - subject: string (optional)
   * - phone: string (optional)
   * Returns: { success: boolean, stored: boolean, id?: string }
   */
  try {
    const { name, email, message, subject = '', phone = '' } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields.' });
    }

    // If model is present and mongoose is connected, store document
    let stored = false;
    let id = undefined;

    if (Inquiry && Inquiry.isDbReady()) {
      const doc = await Inquiry.create({
        name,
        email,
        message,
        subject,
        phone,
      });
      stored = true;
      id = doc._id;
    }

    return res.json({ success: true, stored, id });
  } catch (err) {
    console.error('Error saving inquiry:', err.message);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

module.exports = router;
