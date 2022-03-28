const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  u_id: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  isTeacher: {
    type: Boolean,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    required: true,
    default: false,
  },
  deptId: {
    type: Schema.Types.ObjectId,
    ref: "Depart",
  },
  programId: {
    type: Schema.Types.ObjectId,
    ref: "Program",
  },
  courseId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
      default: false,
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

TeacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
TeacherSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = teacher;
