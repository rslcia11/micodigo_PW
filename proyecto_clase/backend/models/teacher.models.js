const {DataTypes} = require("sequelize");
const sequelize = require("../database/connect"); //Ruta al archivo database.js

const Teacher = sequelize.define(
    "Teacher",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        timestamps : false, 
        tableName: "teacher",
    }
);
module.exports= Teacher;
