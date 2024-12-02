const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Localhost working on: http://localhost:${PORT}`);
});