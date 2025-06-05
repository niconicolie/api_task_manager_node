const Sequelize = require('sequelize');
const database = require('./db');

const Task = database.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING
    }
})

module.exports = Task;