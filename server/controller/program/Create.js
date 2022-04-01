const depart = require("../../models/Department");
const program = require("../../models/Program");
const sessions = require("../../models/Session");

exports.createProgram = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      departmentId: req.body.departmentId,
      sessionId: req.body.sessionId,
      userId: req.body.userId,
      teacherId: req.body.teacherId,
    };
    const Program = await new program(data);
    await Program.save();

    const Sessions = await sessions.findById({ _id: req.body.sessionId });
    Sessions.programId.push(Program._id);

    await Depart.save();
    const Depart = await depart.findById({ _id: req.body.departmentId });
    Depart.programId.push(Program._id);
    await Depart.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
