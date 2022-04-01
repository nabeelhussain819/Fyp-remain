const user = require("../../models/User");
const teacher = require("../../models/Teacher");

exports.register = async (req, res, next) => {
  const { email, password, phone, u_id, name } = req.body;
  console.log(req.body);
  const existingUserU = await user.findOne({ u_id: u_id });
  const existingUser = await user.findOne({ email: email });
  const existingUserPhone = await user.findOne({ phone: phone });
  var term = req.body.u_id;
  var student = new RegExp(/[A-Z]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
  var re = new RegExp(/[TEC]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
  var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/gm);

  if (!email || !password || !phone || !u_id || !name) {
    res.status(400).json({ error: "add all feilds" });
  } else if (password.length < 5) {
    return res
      .status(400)
      .json({ error: "The password needs to be at least 5 characters long." });
  } else if (existingUser) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ error: "Invalid email." });
  } else if (existingUserU) {
    return res
      .status(400)
      .json({ error: "An account with this U_id already exists." });
  } else if (existingUserPhone) {
    return res
      .status(400)
      .json({ error: "An account with this Phone Number already exists." });
  } else if (re.test(term)) {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      u_id: req.body.u_id,
      phone: req.body.phone,
      isTeacher: true,
    };
    res.status(200).json({ message: "registerd" });
    const Teacher = new teacher(data);
    await Teacher.save();
  } else if (student.test(term)) {
    const User = new user(req.body);
    await User.save();
    res.send(User);
  } else {
    return res.status(400).json({ error: "ID isnot valid" });
  }
};
exports.addDepartment = async (req, res, next) => {
  const { deptId, userId } = req.body;
  if (!deptId || !userId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const User = await user.findById({ _id: userId });
    User.deptId.push(req.body.deptId);
    await User.save();
  }
};
exports.addProgram = async (req, res, next) => {
  const { programId, userId } = req.body;
  if (!programId || !userId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const User = await user.findById({ _id: userId });
    User.programId.push(programId);

    await User.save();
  }
};
exports.addSemester = async (req, res, next) => {
  const { semesterId, userId } = req.body;
  if (!semesterId || !userId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const User = await user.findById({ _id: userId });
    User.semesterId.push(semesterId);

    await User.save();
  }
};
