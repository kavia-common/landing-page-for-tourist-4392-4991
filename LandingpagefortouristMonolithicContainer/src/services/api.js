const BASE = '/api';

// PUBLIC_INTERFACE
export async function getContent() {
  /** Fetches landing page content from the backend. */
  const res = await fetch(`${BASE}/content`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error('Failed to fetch content');
  return res.json();
}

// PUBLIC_INTERFACE
export async function sendInquiry(payload) {
  /**
   * Sends a contact inquiry to the backend.
   * @param {{name: string, email: string, message: string, subject?: string, phone?: string}} payload
   * @returns {Promise<{success: boolean, stored: boolean, id?: string}>}
   */
  const res = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to send inquiry');
  return res.json();
}
