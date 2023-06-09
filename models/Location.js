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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // opening: {
    //   type: DataTypes.TIME,
    //   allowNull: false,
    // },
    // closing: {  
    //   type: DataTypes.TIME,
    //   allowNull: false,
    // },
    amenities: {
      type: DataTypes.JSON, // Using JSON data type to store an object
      allowNull: false,
      defaultValue: {
        hasFood: false,
        hasWifi: false,
        hasOutlets: false,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // rating: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Location;