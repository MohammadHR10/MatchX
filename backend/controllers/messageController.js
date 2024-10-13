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

// Get all messages for a user (inbox)
const getMessages = async (req, res) => {
  const { userId } = req.params;

  try {
    const messages = await Message.find({
      $or: [{ receiver: userId }, { sender: userId }],
    }).populate('sender', 'name').populate('receiver', 'name');

    res.status(200).json(messages); // Respond with the messages
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
