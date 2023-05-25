const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opening: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closing: {  
      type: DataTypes.TIME,
      allowNull: false,
    },
    amenities: {
      type: DataTypes.BOOLEAN,
      hasFood: DataTypes.BOOLEAN,
      hasWifi: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;