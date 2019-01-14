const { expect } = require('chai');
const classroomFunctions = require('../server/api/classroom/classroomFunctions');
const Classroom = require('../server/api/classroom/ClassroomModel');

describe('All classroom functions', async () => {
  it('creates new classroom', async () => {
    const status = await classroomFunctions.addClassroom('test', 'test', Classroom);
    expect(status.success).to.equal('true');
  });
});
