const section = require("../../Models/Section");
const course = require("../../Models/Course");

exports.createCourse = async (req, res) => {
  console.log(req.body);
  try {
    const data = {
      name: req.body.name,
      sectionId: req.body.sectionId,
      teacherId: req.body.teacherId,
      studentId: req.body.studentId,
      comment: req.body.comment,
      code: (Math.random() + 1).toString(36).substring(5),
    };
    const Course = new course(data);
    await Course.save();
    const Section = await section.findById({ _id: req.body.sectionId });
    Section.courseId.push(Course._id);
    await Section.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
