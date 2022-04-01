const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  departmentId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: false,
    },
  ],
  programId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: false,
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
});

const sessions = mongoose.model("Session", SessionSchema);

module.exports = sessions;
