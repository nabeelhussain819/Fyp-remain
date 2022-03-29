const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SemesterSchema = new Schema({
  semester: {
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
  programId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Program",
    },
  ],
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
});

const semes = mongoose.model("Semes", SemesterSchema);

module.exports = semes;
