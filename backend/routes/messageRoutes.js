const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');

const router = express.Router();

// Post a message between users
router.route('/').post(sendMessage);

// Get all messages for a user by their userId
router.route('/:userId').get(getMessages);

module.exports = router;
