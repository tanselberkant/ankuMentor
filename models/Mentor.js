const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Must have name'],
  },
  email: {
    type: String,
    required: [true, 'Must have an e-mail'],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Must have a phoneNumber'],
  },
  faculty : {
    type: String,
    required: [true, 'must have a faculty']
  }
});

module.exports = mongoose.model('Mentor', MentorSchema);
