/*
  Mongoose model for classroom
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

const classroomSchema = new Schema({
  classroomName: { type: String, required: true },
  author: { type: String, required: true },
  createdDate: { type: Date, required: true },
  students: { type: Array, required: true },
  joinCode: { type: String, required: false },
});

module.exports = mongoose.model('Classroom', classroomSchema);
