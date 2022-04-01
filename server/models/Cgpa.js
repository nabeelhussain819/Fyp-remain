const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CgpaSchema = new Schema({
  gpa: {
    type: Number,
    required: true,
    unique: true,
  },
  courseId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  ],
  cgpa: {
    type: Number,
    required: false,
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
});

const cgpa = mongoose.model("Cgpa", CgpaSchema);

module.exports = cgpa;
