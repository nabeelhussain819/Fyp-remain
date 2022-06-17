const semes = require("../../Models/Semester");

exports.readSemes = async (req, res) => {
  semes
    .find({})
    .populate("programId")
    .populate("sectionId")
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
