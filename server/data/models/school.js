module.exports = (sequelize, DataTypes) => {
  const school = sequelize.define(
    'school',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {},
  );
  return school;
};
