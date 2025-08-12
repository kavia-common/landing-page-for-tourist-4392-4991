import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function Contact({ onSubmit, info }) {
  /** Contact section with inquiry form. */
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '', phone: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill out name, email, and message.' });
      return;
    }

    try {
      setLoading(true);
      const res = await onSubmit(form);
      if (res?.success) {
        setStatus({
          type: 'success',
          message: res.stored
            ? 'Thank you! Your inquiry has been received and saved.'
            : 'Thank you! Your inquiry has been received.',
        });
        setForm({ name: '', email: '', message: '', subject: '', phone: '' });
      } else {
        setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <h2 id="contact-title" className="section-title">Contact</h2>
          <p className="section-desc">
            Have questions or ready to plan your adventure? Send us a message.
          </p>
        </div>

        <div className="grid grid-2">
          <form className="card form" onSubmit={submit} aria-label="Contact form">
            <label>
              Name
              <input
                className="input"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
                required
              />
            </label>
            <label>
              Email
              <input
                className="input"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Subject
              <input
                className="input"
                name="subject"
                type="text"
                value={form.subject}
                onChange={onChange}
                placeholder="Trip planning, inquiry, etc."
              />
            </label>
            <label>
              Phone (optional)
              <input
                className="input"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="+1 555-0123"
              />
            </label>
            <label>
              Message
              <textarea
                className="input"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your travel plans"
                required
              />
            </label>
            {status.message && (
              <div
                className={`alert ${status.type === 'success' ? 'success' : 'error'}`}
                role={status.type === 'success' ? 'status' : 'alert'}
              >
                {status.message}
              </div>
            )}
            <div>
              <button className="btn" type="submit" disabled={loading} aria-busy={loading}>
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </div>
            <p className="helper">We typically respond within 24 hours.</p>
          </form>

          <aside className="card" aria-label="Contact information">
            <h3 className="card-title">Get in touch</h3>
            <p className="card-text">Email: {info?.email}</p>
            <p className="card-text">Phone: {info?.phone}</p>
            {info?.address && <p className="card-text">Address: {info.address}</p>}
          </aside>
        </div>
      </div>
    </section>
  );
}
