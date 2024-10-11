/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize').DataTypes} DataTypes
 * @typedef {import('sequelize').Model} Model
 */

const { DataTypes } = require('sequelize');

/**
 * @param {Sequelize} sequelize
 * @param {typeof import('sequelize').DataTypes} DataTypes
 * @returns {Model}
 */




module.exports = (sequelize, Sequelize) => {
    /**
     * @type {Model}
     */
    const issueBook = sequelize.define("issueBook", {
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: 'id',
            },
        }
        ,
        bookId: {
            type: Sequelize.INTEGER,
            references: {
                model: "books",
                key: 'id',
            },
        }
        ,
     
        issueDate: {
            type: Sequelize.DATE
        },
        returnDate: {
            type: Sequelize.DATE
        },
        actualReturnedDate: {
            type: Sequelize.DATE
        },
        penalty: {
            type: Sequelize.STRING,
            defaultValue:"0"
        },
         submitted: {
            type: DataTypes.ENUM('submitted','notSubmitted'),
            defaultValue: 'notSubmitted'
        },
       
    });


    return issueBook;
};


