const express = require('express');
const cors = require('cors');
const booksRoute = require('./routes/books');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', booksRoute);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
