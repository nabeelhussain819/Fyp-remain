const semes = require("../../models/Semester");
const program = require("../../models/Program");

exports.createSemes = async (req, res) => {
  try {
    const { semester, courseId, userId } = req.body;
    const existingSemester = await semes.findOne({
      semester: semester,
    });
    const existingProgram = await semes.findOne({
      courseId: courseId,
    });
    if (!semester) {
      return res.status(400).json({ error: "Add all data" });
    }
    if (!existingProgram && existingSemester) {
      return res.status(400).json({ error: " already exists." });
    } else {
      const semester = new semes(req.body);
      await semester.save();
      // const programs = await program.findById({ _id: req.body.programId });
      // programs.semesterId.push(semester._id);
      // await programs.save();
      // console.log(programs);
      res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
