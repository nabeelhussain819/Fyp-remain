const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },
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

const depart = mongoose.model("Depart", DepartmentSchema);

module.exports = depart;
