const Student = require('../models/Student');

module.exports = (req, res, next) => {
  Student.findById(req.session.userID, (err, student) => {
    if (err || !student) res.redirect('/');
    next();
  });
};
