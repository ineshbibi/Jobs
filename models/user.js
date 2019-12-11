const sequelize = require("sequelize");
const db = require("../db/connection");
module.exports = db.sequelize.define("users", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER(11)
  },
  name: sequelize.STRING(50)
});
