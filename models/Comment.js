const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//create fields/columns for User model 
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true, 
        }
})