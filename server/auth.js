const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db');

const router = express.Router();

const saltingCount = 10;

// User Register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, saltingCount);
  
      // Add user to db
      const result = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
      );
  
      res.status(201).json({ message: 'User successfully registered', user: result.rows[0] });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  // User Login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
      if (result.rows.length === 0) {
        return res.status(400).json({ message: 'User Not Found!' });
      }
  
      const user = result.rows[0];
  
      // Şifreyi doğrula
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Wrong Password' });
      }
  
      res.status(200).json({ message: 'Login Successful', user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  module.exports = router;