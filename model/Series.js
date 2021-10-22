const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const Series = database.sequelize.define("Series", {
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
    ano:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    genero:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    temporadas:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    episodios:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sinopse:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    nota:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    imagem:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    trailer:{
        type: Sequelize.STRING,
        allowNull: true,
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})

module.exports = Series;