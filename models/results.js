'use strict';
module.exports = (sequelize, DataTypes) => {
  const results = sequelize.define('results', {
    homeUser: DataTypes.STRING,
    awayUser: DataTypes.STRING,
    winningUser: DataTypes.STRING
  }, {});
  results.associate = function(models) {
    // associations can be defined here
  };
  return results;
};