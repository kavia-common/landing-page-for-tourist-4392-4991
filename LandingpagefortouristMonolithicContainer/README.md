# Aurora Travels - Monolithic Landing Page (React + Express)

A visually appealing, responsive, and accessible landing page for a tourist company built as a monolithic app:
- React frontend (Create React App)
- Express.js backend with optional MongoDB for contact inquiries

## Features
- About, Services, Destinations, Testimonials, and Contact sections
- Responsive design with light/dark theme toggle
- Accessible components and semantic markup
- Backend API for content and contact
- Optional MongoDB persistence for inquiries
- Production-ready static serving from Express

## Getting Started

Install dependencies:
```bash
npm install
```

Run the backend:
```bash
npm run server
```

Run the frontend (in a separate terminal):
```bash
npm start
```

By default, the React app proxies API requests to `http://localhost:5000` (configured in `package.json`).
Open http://localhost:3000 to view the app.

## Environment Variables

Copy `.env.example` to `.env` and provide values via your orchestrator or environment:
- `PORT` (default: 5000)
- `MONGO_URI` (optional). If not set, inquiries will be accepted but not persisted.

## API

- `GET /api/health` → `{ status: 'ok' }`
- `GET /api/content` → returns landing page content
- `POST /api/contact` → accepts `{ name, email, message, subject?, phone? }`
  - Response: `{ success: boolean, stored: boolean, id?: string }`

## Production

Build the frontend:
```bash
npm run build
```

Set `NODE_ENV=production` and run the server:
```bash
npm run server
```

Express will serve the `build` directory and the API under `/api`.

## Notes on Accessibility and Performance
- Headings follow semantic order and landmarks are used (nav, main, section, footer).
- Interactive elements have focus styles and ARIA labels.
- Minimal images and gradients for faster loads. SEO title/description are set in `App.js`.

