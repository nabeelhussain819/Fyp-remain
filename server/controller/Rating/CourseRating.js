const CoRating = require("../../models/CourseRating");

exports.CourseRating = async (req, res) => {
  try {
    const data = {
      score: req.body.score,
      courseId: req.body.courseId,
    };
    const CouRating = await new CoRating(data);
    await CouRating.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "add all feilds" });
  }
};
