const express = require("express");
const router = express.Router();
const app = express();
const {
  register,
  addDepartment,
  addProgram,
  addSemester,
  addSession,
} = require("../controller/auth/Register");
const { login } = require("../controller/auth/Login");
const { data } = require("../controller/auth/data/Student");
const cors = require("cors");
const { createDept } = require("../controller/department/Create");
const { readDept } = require("../controller/department/Index");
const { createSemes } = require("../controller/semester/Create");
const { readSemes } = require("../controller/semester/Index");

const { createCourse } = require("../controller/course/Create");
const { readCourse } = require("../controller/course/Index");
const { createProgram } = require("../controller/program/Create");
const { readProgram } = require("../controller/program/Index");
const { teacher } = require("../controller/auth/data/Teacher");
const { session } = require("../controller/session/Index");
const { createSession } = require("../controller/session/Create");

app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

router.route("/data").get(data);
router.route("/session").get(session);
router.route("/signup").post(register);
router.route("/signin").post(login);
router.route("/createDepart").post(createDept);
router.route("/createSemester").post(createSemes);
router.route("/departments").get(readDept);
router.route("/createCourse").post(createCourse);
router.route("/createProgram").post(createProgram);
router.route("/readProgram").get(readProgram);
router.route("/semesters").get(readSemes);
router.route("/courses").get(readCourse);
router.route("/teacher").get(teacher);
router.route("/addDepartment").post(addDepartment);
router.route("/addProgram").post(addProgram);
router.route("/addSemester").post(addSemester);
router.route("/addSession").post(addSession);
router.route("/createSession").post(createSession);
module.exports = router;
