const Semes = require("../../Models/Semester");
const program = require("../../Models/Program");

exports.createSemes = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      programId: req.body.programId,
      studentId: req.body.studentId,
      teacherId: req.body.teacherId,
    };
    const Semester = new Semes(data);
    await Semester.save();

    const programs = await program.findById({ _id: data.programId });
    programs.semesterId.push(Semester._id);
    await programs.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
