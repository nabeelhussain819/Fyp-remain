const depart = require("../../models/Department");
const program = require("../../models/Program");

exports.createProgram = async (req, res) => {
  try {
    const data = {
      prog: req.body.prog,
      semesterId: req.body.semesterId,
      userId: req.body.userId,
      teacherId: req.body.teacherId,
    };
    const Program = await new program(data);
    await Program.save();
    // const Depart = await depart.findById({ _id: req.body.deptId });
    // Depart.programId.push(Program._id);
    // await Depart.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
