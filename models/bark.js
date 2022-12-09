'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bark.init({
    bark: DataTypes.STRING,
    barker: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
       model: 'users',
       key: 'id'
      }
     },   
    barked: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
       model: 'users',
       key: 'id'
      }
     },
    }, 
  {
    sequelize,
    modelName: 'Bark',
    tableName: 'barks',
  });
  return Bark;
};