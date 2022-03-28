const program = require("../../models/Program");

exports.readProgram = async (req, res) => {
  program
    .find({})
    .populate("semesterId")
    .populate("userId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
