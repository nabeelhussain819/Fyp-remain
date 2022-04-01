const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserRatingSchema = new Schema({
  term: {
    type: text,
    required: true,
  },
  comment: {
    type: text,
    required: true,
  },
  topic: {
    type: text,
    required: true,
  },
  courseId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
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
});

const StRating = mongoose.model("StudentRating", UserRatingSchema);

module.exports = StRating;
