

exports.addClassroom = async (classroomName, username, Classroom) => {
  const currentDate = new Date();
  const newClassroomObject = new Classroom({
    classroomName,
    createdDate: currentDate,
    students: [],
    author: username,
  });
  try {
    await newClassroomObject.save();
    return { success: true, msg: `created new classroom: ${classroomName}` };
  } catch (error) {
    return { success: false, msg: `Oopsie Doopsie ${error}` };
  }
};
