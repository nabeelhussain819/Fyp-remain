const Comment = require("../..//Models/Review/DepartmentReview");
const Comment1 = require("../../Models/Review/CourseReview");
const Comment2 = require("../../Models/Review/TeacherReview");
const Comment3 = require("../../Models/Review/SemesterReview");

exports.departComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    departmentId: req.body.departmentId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.courseComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    courseId: req.body.courseId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment1.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.teacherComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    teacherId: req.body.teacherId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment2.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};

exports.semesterComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    semesterId: req.body.semesterId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment3.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
