const mongoose = require("mongoose");
const user = require("../models/User");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    // const data = {
    //   name: "admin",
    //   email: "admin@admin.com",
    //   password: "admin@123",
    //   u_id: "1234",
    //   phone: "12345",
    //   deptId: null,
    // };
    // const User = new user(data);

    // await User.save();
    console.log("database is connected");
  } catch (error) {
    console.log("database not connected");
  }
};
module.exports = connectDB;
