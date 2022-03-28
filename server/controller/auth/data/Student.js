const user = require("../../../models/User");

exports.data = async (req, res, next) => {
  user
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
