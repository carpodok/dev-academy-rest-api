const asyncHandler = require("../middleware/async");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamp");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../utils/responseHandler");

const getCourses = asyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    const courses = await Course.find({ bootcamp: req.params.bootcampId });

    return sendSuccessResponse(res, 200, "Courses retrieved successfully", {
      count: courses.length,
      data: courses,
    });
  } else {
    sendSuccessResponse(
      res,
      200,
      "Courses retrieved successfully",
      res.advancedResults
    );
  }
});

const getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: "bootcamp",
    select: "name description",
  });

  if (!course) {
    return sendErrorResponse(
      res,
      404,
      `No course with the id of ${req.params.id}`
    );
  }

  sendSuccessResponse(res, 200, "Course retrieved successfully", {
    data: course,
  });
});

const addCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;
  req.body.user = req.user.id;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  if (!bootcamp) {
    return sendErrorResponse(
      res,
      404,
      `No bootcamp with the id of ${req.params.bootcampId}`
    );
  }

  if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return sendErrorResponse(
      res,
      401,
      `User ${req.user.id} is not authorized to add a course to bootcamp ${bootcamp._id}`
    );
  }

  const course = await Course.create(req.body);

  sendSuccessResponse(res, 200, "Course added successfully", { data: course });
});

const updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    return sendErrorResponse(
      res,
      404,
      `No course with the id of ${req.params.id}`
    );
  }

  // Make sure user is course owner
  if (course.user.toString() !== req.user.id && req.user.role !== "admin") {
    return sendErrorResponse(
      res,
      401,
      `User ${req.user.id} is not authorized to update course ${course._id}`
    );
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  sendSuccessResponse(res, 200, "Course updated successfully", {
    data: course,
  });
});

const deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return sendErrorResponse(
      res,
      404,
      `No course with the id of ${req.params.id}`
    );
  }

  // Make sure user is course owner
  if (course.user.toString() !== req.user.id && req.user.role !== "admin") {
    return sendErrorResponse(
      res,
      401,
      `User ${req.user.id} is not authorized to delete course ${course._id}`
    );
  }

  await course.remove();

  sendSuccessResponse(res, 200, "Course deleted successfully", {});
});

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
