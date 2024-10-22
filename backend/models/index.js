const { Sequelize, DataTypes } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const sequelize = new Sequelize(`polarisDB`, "root", "root123", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("connection with databasse successful");
} catch (err) {
  console.log("you got a error", err);
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.requestedBooks = require("../models/requestedBooks")(sequelize, DataTypes);

db.user = require("../models/user.model")(sequelize, DataTypes);
db.book = require("../models/book")(sequelize, DataTypes);

db.issueBook = require("../models/issueBook")(sequelize, Sequelize);

db.book.hasMany(db.requestedBooks);
db.requestedBooks.belongsTo(db.book);

db.user.hasMany(db.requestedBooks);
db.requestedBooks.belongsTo(db.user);

db.user.hasMany(db.issueBook);
db.issueBook.belongsTo(db.user);

db.book.hasMany(db.issueBook);
db.issueBook.belongsTo(db.book);

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database & tables updated!");
});

module.exports = db;
