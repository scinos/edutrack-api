const sinon = require('sinon');
const { expect } = require('chai');
const classroomFunctions = require('../server/api/classroom/classroomFunctions');
const Classroom = require('./ClassroomModelTest');
//  const Classroom = require('../server/api/classroom/ClassroomModel');


describe('Classroom functions', () => {
  //  const stub = sinon.stub(Classroom, 'save');
  //  const classroom1 = new Classroom();
  it('Creates new classroom', async () => {
    //  classroom1.save();
    const status = await classroomFunctions.addClassroom('testName', 'testUser', Classroom);
    expect(status.success).to.equal(true);
  });

  afterEach(() => {
    //  Restore to default sandbox
    sinon.restore();
  })
});
