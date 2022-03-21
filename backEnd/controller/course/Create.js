const course = require("../../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const data = {
      subjects: req.body.subjects,
      teacherId: req.body.teacherId,
      code: (Math.random() + 1).toString(36).substring(5),
    };
    const Course = new course(data);
    await Course.save();

    // const tea = await semes.findById({ _id: req.body.teacherId });
    // semester.courseId.push(Course._id);
    // await semester.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
