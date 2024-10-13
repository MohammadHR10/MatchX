const User = require('../models/userModel');

// Create a new user or find an existing user
const createUser = async (req, res) => {
  const { name, category, interests, passion, funFact } = req.body;

  try {
    let user = await User.findOne({ name });

    // If the user doesn't exist, create a new one
    if (!user) {
      user = new User({
        name,
        category,
        interests,
        passion,
        funFact,
      });

      await user.save(); // Save new user to the database
    }

    res.status(201).json(user); // Respond with the user data
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all users (for the feed or matching)
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users); // Respond with all users
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
