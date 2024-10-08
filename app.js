// app.js

const express = require('express');
const app = express();
const port = 3000;

// Import routes
const bfhlRoutes = require('./routes/bfhlRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use(bfhlRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
