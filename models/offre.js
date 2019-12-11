const sequelize = require("sequelize");
const User = require("./user");
const db = require("../db/connection");
module.exports = db.sequelize.define("offres", {
  content: sequelize.STRING(500),
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER(11)
  },
  title: sequelize.STRING(50)
});
