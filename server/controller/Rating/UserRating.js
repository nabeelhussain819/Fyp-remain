const UserRating = require("../../models/StudentRating");

exports.UserRating = async (req, res) => {
  try {
    const data = {
      term: req.body.term,
      comment: req.body.comment,
      topic: req.body.topic,
      courseId: req.body.courseId,
      userId: req.boy.userId,
    };
    const StRating = await new UserRating(data);
    await StRating.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "add all feilds" });
  }
};
