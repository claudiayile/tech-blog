const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // set up method to run on instance data per user to check password 
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
//create fields/columns for User model 
User.init(
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