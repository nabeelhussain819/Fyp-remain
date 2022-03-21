const user = require("../../models/User");
const program = require("../../models/program");
const depart = require("../../models/Department");
const semester = require("../../models/Semester");
const teacher = require("../../models/Teacher");

exports.register = async (req, res, next) => {
  const {
    email,
    password,
    phone,
    u_id,
    name,
    deptId,
    programId,
    semesterId,
  } = req.body;
  const existingUserU = await user.findOne({ u_id: u_id });
  const existingUser = await user.findOne({ email: email });
  const existingUserPhone = await user.findOne({ phone: phone });
  const matchDepart = await depart.findOne({ programId: programId });
  var term = req.body.u_id;
  var student = new RegExp(/[A-Z]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
  var re = new RegExp(/[TEC]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
  var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/gm);

  if (
    !email ||
    !password ||
    !phone ||
    !u_id ||
    !name ||
    !deptId ||
    !programId ||
    !semesterId
  ) {
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
  } else if (!matchDepart.programId === req.body.programId) {  
    return res
      .status(400)
      .json({ error: "department doesnot match the program" });
  } else if (re.test(term)) {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      u_id: req.body.u_id,
      phone: req.body.phone,
      deptId: req.body.deptId,
      isTeacher: true,
      programId: req.body.programId,
      semesterId: req.body.semesterId,
    };
    res.status(200).json({ message: "registerd" });
    const Teacher = new teacher(data);
    await Teacher.save();
    const department = await depart.findById({ _id: req.body.deptId });
    department.teacherId.push(Teacher._id);
    await department.save();
    const Program = await program.findById({ _id: req.body.programId });
    Program.teacherId.push(Teacher._id);
    await Program.save();
    const Semester = await semester.findById({ _id: req.body.semesterId });
    Semester.teacherId.push(Teacher._id);
    await Semester.save();
  } else if (student.test(term)) {
    const User = new user(req.body);
    const OTP = generateOTP();
    const verification = new verifyToken({
      userId: User._id,
      Token: OTP,
    });
    await verification.save();
    await User.save();
    mailTransport().sendMail({
      from: "unknown@email.com",
      to: User.email,
      subject: "verify email",
      html: "<h1>${OTP()}</h1>",
    });
    res.status(200).json({ message: "registerd" });
    const department = await depart.findById({ _id: req.body.deptId });
    department.userId.push(User._id);
    await department.save();
    const Program = await program.findById({ _id: req.body.programId });
    Program.userId.push(User._id);
    await Program.save();
    const Semester = await semester.findById({ _id: req.body.semesterId });
    Semester.userId.push(User._id);
    await Semester.save();
  } else {
    return res.status(400).json({ error: "ID isnot valid" });
  }
};
