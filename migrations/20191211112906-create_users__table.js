"use strict";

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER(11)
      },
      name: sequelize.STRING(50),
      createdAt: sequelize.DATE,
      updatedAt: sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
