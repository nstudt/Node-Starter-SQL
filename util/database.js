const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'node-starter',
    username: 'root',
    password: null, 
    dialect: 'mysql',
    host: 'localhost'

});

module.exports = sequelize;