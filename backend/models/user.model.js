'use strict';
const {
    Model,
    STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
       
        static associate(models) {
          
        }
    }
    user.init({

        userName: DataTypes.STRING,
        userClass: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,




    }, {
        sequelize,
        modelName: 'user',
    });
    return user;
}; 