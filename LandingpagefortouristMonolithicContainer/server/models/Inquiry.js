'use strict';

const mongoose = require('mongoose');

/**
 * Inquiry schema and model for contact form submissions.
 * Uses a safe wrapper to avoid crashes when MONGO_URI is not configured.
 */

let InquiryModel = null;

try {
  const InquirySchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, default: '', trim: true },
      subject: { type: String, default: '', trim: true },
      message: { type: String, required: true, trim: true },
    },
    { timestamps: true }
  );

  InquiryModel = mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
} catch (err) {
  // In case mongoose is not ready or schema init fails in certain contexts
  InquiryModel = null;
}

// PUBLIC_INTERFACE
function isDbReady() {
  /** Indicates whether Mongoose is connected and the model is usable. */
  return (
    mongoose.connection &&
    mongoose.connection.readyState === 1 &&
    typeof InquiryModel?.create === 'function'
  );
}

module.exports = {
  // PUBLIC_INTERFACE
  isDbReady,
  /** Returns the model for direct usage if needed. */
  model: InquiryModel,
  /** Convenience function to call create directly when model is available. */
  create: async (data) => {
    if (!isDbReady()) throw new Error('Database not connected');
    return InquiryModel.create(data);
  },
};
