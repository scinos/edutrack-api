/*
  The classroom logic
*/
const classroomFunctions = require('./classroomFunctions');
const Classroom = require('./ClassroomModel');

exports.newClassroom = async function newClassroom(req, res) {
  if (!req.body.classroomName || !req.body.username) {
    res.status(400).json({ success: 'false', msg: 'No classroom name' });
  }
  const result = await classroomFunctions.addClassroom(req.body.classroomName, req.body.username, Classroom);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ msg: 'error' });
  }
};
