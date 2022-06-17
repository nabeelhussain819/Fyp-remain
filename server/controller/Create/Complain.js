const complain = require("../../Models/Complain/DepartmentComplain");
const complain1 = require("../../Models/Complain/CourseComplain");
const complain2 = require("../../Models/Complain/TeacherComplain");
const complain3 = require("../../Models/Complain/ProgramComplain");
const complain4 = require("../../Models/Complain/SemesterComplain");
exports.departComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    departmentId: req.body.departmentId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.courseComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    courseId: req.body.courseId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain1.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.teacherComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    teacherId: req.body.teacherId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain2.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.programComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    programId: req.body.programId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain3.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.semesterComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    semesterId: req.body.semesterId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain4.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
