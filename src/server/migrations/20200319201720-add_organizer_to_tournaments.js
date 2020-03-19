'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tournaments',
      'organizer', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: "id"
        }
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'tournaments',
      'organizer'
    )
  }
};
