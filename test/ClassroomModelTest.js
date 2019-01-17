
class Classroom {
  constructor(props) {
    this.author = props.author;
    this.classroomName = props.classroomName;
  }
}

Classroom.prototype.save = function save() {
  if (this.author === 'testUser' && this.classroomName === 'testName') {
    return true;
  }
  const error = "stupid";
  throw (error);
};
module.exports = Classroom;
