const { DataTypes, INTEGER} = require("sequelize");
const sequelize = require("../database/connect");

const Teacher = sequelize.define(
    "Teacher",
    {
        pk_teacher:{
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: false,
        tableName: "teacher"
    }
);
module.exports = Teacher;