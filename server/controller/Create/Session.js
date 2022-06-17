const sessions = require("../../Models/Session");
const department = require("../../Models/Department");

exports.createSession = async (req, res) => {
  try {
    const { name, departmentId, studentId } = req.body;

    const Sessions = new sessions(req.body);
    await Sessions.save();

    const Department = await department.findById({
      _id: req.body.departmentId,
    });
    Department.sessionId.push(Sessions._id);
    await Department.save();

    console.log(Department);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};