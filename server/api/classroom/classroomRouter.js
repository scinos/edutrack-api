const express = require('express');
const clasroom = require('./classroomController');

const classroomRouter = express.Router();

// All routes for the /api/classroom route

// /api/classroom/newclassroom
classroomRouter.route('/newClassroom')
  .post(clasroom.newClassroom);

module.exports = classroomRouter;
