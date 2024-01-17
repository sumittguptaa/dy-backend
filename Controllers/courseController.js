const UserCourse = require("../models/courseModel");

const userCourseController = {
  registerUserCourse: async (req, res) => {
    try {
      const userData = req.body;
      const existingRegistration = await UserCourse.findOne({
        userId: userData.userId,
      });

      if (existingRegistration) {
        return res
          .status(400)
          .json({ message: "User is already registered for a course" });
      }

      const newUserCourse = new UserCourse(userData);
      await newUserCourse.save();

      res.json({ message: "User course registration successful",newUserCourse });
    } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.userId) {
        // Handle unique constraint violation (user already registered for a course)
        return res
          .status(400)
          .json({ message: "User is already registered for a course" });
      }

      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllUserCourses: async (req, res) => {
    try {
      const userCourses = await UserCourse.find();
      res.json(userCourses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },



  getCourseByUserId: async (req, res) => {
    const userId = req.params.userId;

    try {
      const userCourse = await UserCourse.findOne({ userId });

      if (!userCourse) {
        return res.status(404).json({ message: 'User course not found' });
      }

      res.json(userCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },






};

module.exports = userCourseController;
