// TO BE TRASHED
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Mood extends Model {}

Mood.init(
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'moods',
  }
);

module.exports = Mood;
