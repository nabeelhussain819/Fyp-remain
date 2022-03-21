const depart = require("../../models/Department");

exports.createDept = async (req, res, next) => {
  const data = {
    department: req.body.department,
    programId: req.body.programId,
    userId: req.body.userId,
    teacherId: req.body.teacherId,
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
