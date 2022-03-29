const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const CoursestSchema = new mongoose.Schema({
  subjects: {
    type: String,
    required: true,
  },
  semesterId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Semes",
      required: true,
    },
  ],
  code: {
    type: String,
    required: true,
  },
  teacherId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
});
const course = mongoose.model("Course", CoursestSchema);

module.exports = course;
