const depart = require("../../Models/Department");
const program = require("../../Models/Program");
const sessions = require("../../Models/Session");

exports.createProgram = async (req, res) => {
  console.log(req.body);
  try {
    const data = {
      name: req.body.name,
      departmentId: req.body.departmentId,
      sessionId: req.body.sessionId,
      image: req.body.image,
    };

    const Program = await new program(data);
    await Program.save();

    const Sessions = await sessions.findById({ _id: req.body.sessionId });
    Sessions.programId.push(Program._id);
    await Sessions.save();

    const Depart = await depart.findById({ _id: req.body.departmentId });
    Depart.programId.push(Program._id);
    await Depart.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
