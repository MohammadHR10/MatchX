const Message = require('../models/messageModel');

// Send a message between users
const sendMessage = async (req, res) => {
  const { senderId, receiverId, message } = req.body;

  try {
    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      message,
    });

    const savedMessage = await newMessage.save(); // Save message to the database

    res.status(201).json(savedMessage); // Respond with the saved message
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all messages for a specific user (inbox functionality)
const getMessages = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch all messages where the user is either the sender or the receiver
    const messages = await Message.find({
      $or: [{ receiver: userId }, { sender: userId }],
    })
      .populate('sender', 'name') // Populate the sender's name
      .populate('receiver', 'name'); // Populate the receiver's name

    res.status(200).json(messages); // Respond with the messages
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
