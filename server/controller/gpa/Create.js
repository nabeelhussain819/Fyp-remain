const cgpa = require("../../models/Cgpa");

exports.createProgram = async (req, res) => {
  try {
    const data = {
      gpa: req.body.gpa,
      userId: req.body.userId,
      courseId: req.body.courseId,
      cgpa: 9.5 * req.body.gpa,
    };
    const Cgpa = await new cgpa(data);
    await Cgpa.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
