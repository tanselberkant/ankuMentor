const Student = require('../models/Student');
const Mentor = require('../models/Mentor');
const bcrypt = require('bcrypt');

// const getRandomMentor = async (req, res) => {
//   try {
//     const matchedMentor = await Mentor.aggregate([{ $sample: { size: 1 } }]);
//     res.status(200).json({ matchedMentor });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const createStudent = async (req, res) => {
  try {
    const matchedMentor = await Mentor.aggregate([{ $sample: { size: 1 } }]);

    // const student = await Student.create(req.body)
    const { firstName, lastName, email, password, studentNumber } = req.body;
    const student = await Student.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      studentNumber: studentNumber,
      mentor: matchedMentor[0]._id,
    });
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const loginStudent = (req, res) => {
  try {
    const { studentNumber, password } = req.body;
    Student.findOne({ studentNumber: studentNumber }, (err, student) => {
      if (student) {
        bcrypt.compare(password, student.password, (err, success) => {
          if (success) {
            req.session.userID = student._id;
            res.status(200).json({ message: 'You are logged in' });
          } else {
            res.status(400).json({ message: 'Your Password is not correct !' });
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

module.exports = {
  // getRandomMentor,
  createStudent,
  loginStudent,
};
