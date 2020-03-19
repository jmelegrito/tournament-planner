'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    password: DataTypes.STRING,
    userType: DataTypes.STRING,
    tournamentJoined: DataTypes.INTEGER,
    bracket: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    users.hasMany(models.tournaments, {
      foreignKey: 'id'
    })
  };
  return users;
};