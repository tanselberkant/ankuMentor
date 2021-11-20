const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Must have name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Must Provide a lastName'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Must have an e-mail'],
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentNumber: {
    type: Number,
    required: [true, 'Must have a studentNumber'],
    maxlength: [6, 'Student number can have 6 character'],
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
  },
});

StudentSchema.pre('save', function (next) {
  const student = this;
  if (!student.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(student.password, salt, function (err, hash) {
      if (err) return next(err);
      student.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('Student', StudentSchema);
