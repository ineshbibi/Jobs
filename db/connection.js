const Sequelize = require("sequelize");
const db = {};
//connecton avec la base de données
const sequelize = new Sequelize("jobs", "root", "", {
  dialect: "mysql",
  host: "localhost"
});
db.sequelize = sequelize;
module.exports = db;
