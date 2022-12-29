const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    neutral_mood: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    happy_mood: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    angry_mood: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    sad_mood: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    questionable_mood: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
