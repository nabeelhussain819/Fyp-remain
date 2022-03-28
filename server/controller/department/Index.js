const depart = require("../../models/Department");

exports.readDept = async (req, res, next) => {
  depart
    .find({})
    .populate("programId")
    .populate("userId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
