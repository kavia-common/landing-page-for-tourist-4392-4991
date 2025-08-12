Monolithic app run guide:

1) Install dependencies:
   npm install

2) Start backend:
   npm run server
   - Listens on PORT or 5000 by default.

3) Start frontend:
   npm start
   - Proxies /api requests to http://localhost:5000.

Optional persistence:
- Provide MONGO_URI in environment to enable saving inquiries to MongoDB.
- If not provided, inquiries are still accepted but not stored.
