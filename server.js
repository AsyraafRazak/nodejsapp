const express = require('express');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello, MERN batch 3 2026!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data from the server.' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 