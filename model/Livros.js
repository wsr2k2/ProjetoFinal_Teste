const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const Livros = database.sequelize.define("Livros", {
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
    idioma:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    autor:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    genero:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    paginas:{
        type: Sequelize.INTEGER,
        allowNull: true,
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
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})
// Series.sync({ force: false });
module.exports = Livros;