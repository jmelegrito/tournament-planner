'use strict';
module.exports = (sequelize, DataTypes) => {
  const tournaments = sequelize.define('tournaments', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    contact: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  tournaments.associate = function(models) {
    // associations can be defined here
  };
  return tournaments;
};