const Sequelize = require('sequelize');
const uuidv4 = require('uuidv4');

const sequelize = require('../util/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  created: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  firstName: { type: Sequelize.STRING},
  lastName: { type: Sequelize.STRING },
  email: { unique: true, type: Sequelize.STRING},
  password: { type: Sequelize.STRING},
  profilePic: { type: Sequelize.STRING}
});

module.exports = User;