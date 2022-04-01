const TeacRating = require("../../models/TeacherRating");

exports.TeacherRating = async (req, res) => {
  try {
    const data = {
      term: req.body.term,
      comment: req.body.comment,
      topic: req.body.topic,
      courseId: req.body.courseId,
      teacherId: req.body.teacherId,
    };
    const TeRating = await new TeacRating(data);
    await TeRating.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "add all feilds" });
  }
};
