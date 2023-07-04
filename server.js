const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

// Set static folder for serving HTML, CSS, and client-side JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for getting a random quote
app.get('/api/quotes/random', (req, res) => {
  const polygonAPIUrl = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09';
  const apiKey = 'K6DZsYHrde7wOXjdS4wX_tmzUbN_nRPa';

  axios.get(`${polygonAPIUrl}?apiKey=${apiKey}`)
    .then(response => {
      const quote = response.data.quote; // Assuming the response contains a "quote" property
      res.json({ quote });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch quote' });
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
