"use strict";
const { Model, STRING } = require("sequelize");
// const {   Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class requestedBooks extends Model {
    static associate(models) {}
  }
  requestedBooks.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        references: {
          model: "books",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },

      duration: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
      },
      isApproved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "requestedBooks",
    },
  );
  return requestedBooks;
};
