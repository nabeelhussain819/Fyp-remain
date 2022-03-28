const semes = require("../../models/Semester");


exports.readSemes = async (req, res) => {
  semes
    .find({})
    .populate("programId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
