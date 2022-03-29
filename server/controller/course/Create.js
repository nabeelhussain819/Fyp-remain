const semes = require("../../models/Semester")
const course = require("../../models/Course");


exports.createCourse = async (req, res) => {
  console.log(req.body)
  try {
    const data = {
      subjects: req.body.subjects,
      semesterId: req.body.semesterId,
      teacherId: req.body.teacherId,
      code: (Math.random() + 1).toString(36).substring(5),
    };
    const Course = new course(data);
    await Course.save();
    const Semes = await semes.findById({ _id: req.body.semesterId });
    Semes.courseId.push(Course._id);
    await Semes.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
