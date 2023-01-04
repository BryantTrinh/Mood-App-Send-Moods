const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Emoji extends Model {}

Emoji.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING, // or should this be INTEGER?...
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'emoji',
  }
);

module.exports = Emoji;
