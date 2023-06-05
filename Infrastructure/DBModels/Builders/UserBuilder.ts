const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql2');

// export default class UserBuilder extends Model {}

export default sequelize.define('Users', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });