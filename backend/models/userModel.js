const mongoose = require('mongoose');

// User schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Sports', 'Education', 'Hangout'],
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
  passion: String,
  funFact: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
