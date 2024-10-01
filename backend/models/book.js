'use strict';
const {
    Model,
    STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class book extends Model {
       
        static associate(models) {
          
        }
    }
    book.init({

        bookName: DataTypes.STRING,
        author: DataTypes.STRING,
        pages: DataTypes.STRING,
        bookId: DataTypes.STRING,
        
        price: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'book',
    });
    return book;
}; 