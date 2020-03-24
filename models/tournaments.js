'use strict';
module.exports = (sequelize, DataTypes) => {
  const tournaments = sequelize.define('tournaments', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    contact: DataTypes.STRING,
    type: DataTypes.STRING,
    organizer: DataTypes.INTEGER
  }, {});
  tournaments.associate = function(models) {
    tournaments.belongsTo(models.users, {
      foreignKey: "organizer"
    })
  };
  return tournaments;
};