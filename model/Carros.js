const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const Carros = database.sequelize.define("Carros", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    marca:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    potencia:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    velocidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    zeroCem:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    descricao:{
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
    site:{
        type: Sequelize.STRING,
        allowNull: true,
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})

module.exports = Carros;