const teacher = require("../../../models/Teacher");

exports.teacher = async (req, res, next) => {
  teacher
    .find({})
    .populate({
      path: "deptId",
    })
    .populate("sessionId")
    .populate("programId")
    .populate("courseId")
    // .populate("rating")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
