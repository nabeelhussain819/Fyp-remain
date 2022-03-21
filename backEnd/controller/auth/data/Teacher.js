const teacher = require("../../../models/Teacher");

exports.teacher = async (req, res, next) => {
  teacher
    .find({})
    .populate({
      path: "deptId",
    })
    .populate("semesterId")
    .populate("programId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
