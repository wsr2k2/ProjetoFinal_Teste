const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const Videos = database.sequelize.define("Videos", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nota:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    link:{
        type: Sequelize.STRING,
        allowNull: true,
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})

module.exports = Videos;