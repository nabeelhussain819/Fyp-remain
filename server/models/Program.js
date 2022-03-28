const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
  prog: {
    type: String,
    required: true,
  },
  semesterId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Semes",
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
module.exports =
  mongoose.models.Program || mongoose.model("Program", ProgramSchema);
