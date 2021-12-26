const router = require('express').Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const redirectMiddleware = require('../middlewares/redirectMiddleware');

//localhost:3000/api/users
// router.route('/').get(authController.getRandomMentor);
router.route('/signin').post(authController.loginStudent);
router.route('/singup').post(authController.createStudent);
router.route('/logout').get(authController.logOutStudent);
router.route('/dashboard').get(authController.getStudentDashBoardPage);
// router.route('/communities').get(authController.getCommunitiesList);

module.exports = router;
