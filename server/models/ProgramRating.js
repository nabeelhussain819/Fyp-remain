const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramRatingSchema = new Schema({
  score: {
    type: number,
    required: true,
  },
  programId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: false,
    },
  ],
});

const PrRating = mongoose.model("ProgramRating", ProgramRatingSchema);

module.exports = PrRating;
