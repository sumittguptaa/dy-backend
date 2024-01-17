const express = require('express');
const userCourseController = require('../Controllers/courseController');


const router = express.Router();


// Register a user course route
router.post('/courseregister', userCourseController.registerUserCourse);

// Get all user courses route
router.get('/all-user-courses', userCourseController.getAllUserCourses);

router.get('/get-course/:userId', userCourseController.getCourseByUserId);

module.exports = router;