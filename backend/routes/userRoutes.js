const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');

const router = express.Router();

// Create a new user or get all users
router.route('/')
  .post(createUser) // Create a new user
  .get(getUsers); // Get all users

module.exports = router;
