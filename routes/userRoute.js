const router = require('express').Router();
const authController = require('../controllers/authController');

//localhost:3000/api/users
router.route('/').get(authController.getRandomMentor);
router.route('/').post(authController.createStudent);

module.exports = router;
