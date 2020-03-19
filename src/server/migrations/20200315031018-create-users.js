'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      emailAddress: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      userType: {
        type: Sequelize.STRING
      },
      tournamentJoined: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "tournaments"
          },
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      bracket: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};