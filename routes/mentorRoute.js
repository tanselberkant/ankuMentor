const router = require('express').Router();
const mentorController = require('../controllers/mentorController');

// localhost:3000/api/mentor

router.route('/').get(mentorController.getAllMentors);
router.route('/').post(mentorController.createMentor);
router.route('/:id').delete(mentorController.deleteMentor);

module.exports = router;
