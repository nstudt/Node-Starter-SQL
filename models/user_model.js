const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGRER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  created: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  userName: { unique: true, type: Sequelize.STRING, allowNull: false },
  userName: { unique: true, type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  profilePic: { type: Sequelize.STRING, allowNull: false }
});

module.exports = User;