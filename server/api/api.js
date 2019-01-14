/*
  Router for /api route,
  all request to [DOMAIN]/api go through here
*/

const express = require('express');
const classroomRoutes = require('./classroom/classroomRouter');


const router = express.Router();

router.use('/classroom', classroomRoutes);

module.exports = router;
