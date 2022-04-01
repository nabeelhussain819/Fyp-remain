const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const CoursestSchema = new mongoose.Schema({
  name: {
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
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
  teacherId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: false,
    },
  ],
});
const course = mongoose.model("Course", CoursestSchema);

module.exports = course;
