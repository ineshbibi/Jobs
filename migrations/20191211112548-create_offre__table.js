"use strict";

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("offres", {
      content: sequelize.STRING(500),
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER(11)
      },
      UserId: {
        type: sequelize.INTEGER(11)
      },

      title: sequelize.STRING(50),
      createdAt: sequelize.DATE,
      updatedAt: sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("offre");
  }
};
