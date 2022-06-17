const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SemesterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    sectionId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Section",
        required: false,
      },
    ],
    rating: [
      {
        type: Number,
        required: false,
      },
    ],
    programId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Program",
      },
    ],
    studentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
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
  },
  { timestamps: true }
);

const semes = mongoose.model("Semes", SemesterSchema);

module.exports = semes;
