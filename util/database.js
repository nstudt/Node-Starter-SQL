const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'node-starter',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
});

module.exports = sequelize;