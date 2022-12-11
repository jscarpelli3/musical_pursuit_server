'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.User, {
        through: models.Watchlist,
        foreignKey: 'being_watched',
        otherKey: 'watcher',
        as: 'watching'
      }),
      User.belongsToMany(models.User, {
        through: models.Watchlist,
        foreignKey: 'watcher',
        otherKey: 'being_watched',
        as: 'being_watched'
      }),
      User.belongsToMany(models.User, {
        through: models.Bark,
        foreignKey: 'barked',
        otherKey: 'barker',
        as: 'barked'
      }),
      User.belongsToMany(models.User, {
        through: models.Bark,
        foreignKey: 'barker',
        otherKey: 'barked',
        as: 'barker'
      })
    }
  }
  User.init({
    handle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: DataTypes.STRING,
    alltime_level: DataTypes.INTEGER,
    current_level: DataTypes.INTEGER,
    high_ses_score: DataTypes.INTEGER,
    total_score: DataTypes.INTEGER,
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};