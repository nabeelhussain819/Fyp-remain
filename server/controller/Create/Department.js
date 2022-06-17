const depart = require("../../Models/Department");
const user = require("../../Models/Student");
exports.createDept = async (req, res, next) => {
  const data = {
    name: req.body.name,
    studentId: req.body.studentId,
    teacherId: req.body.teacherId,
    code: req.body.code,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  depart.create(data, (error, index) => {
    if (error) {
      return next(error);
    } else {
      res.json(index);
    }
  });
};
exports.getDepartment = async (req, res, next) => {
  const department = await user.findById({ _id: req.body.studentId });
  console.log(department);
  if (!department) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    res.json(department);
  }
};
