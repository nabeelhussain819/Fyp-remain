
const Semes = require("../../models/Semester");
const program = require("../../models/Program");

exports.createSemes = async (req, res) => {

  try {
    const { semester, programId, userId } = req.body;

    const Semester = new Semes(req.body);
    await Semester.save();

    const programs = await program.findById({ _id: req.body.programId });
    programs.semesterId.push(semester._id);
    await programs.save();

    console.log(programs);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
