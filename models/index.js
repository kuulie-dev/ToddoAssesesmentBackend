const{Sequelize} =require('sequelize')

const sequelize = require('../config/dbconfig');

const TaskModels = require('./TaskModel.js');
const db = {
    Sequelize,
    sequelize,
    TaskModel:TaskModels(sequelize, Sequelize.DataTypes)
};

module.exports = db;

