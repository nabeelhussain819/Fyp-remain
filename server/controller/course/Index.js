const course = require("../../models/Course");

exports.readCourse = async (req, res) => {
  course
    .find({})
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
