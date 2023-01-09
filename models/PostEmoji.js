const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class PostEmoji extends Model {}

PostEmoji.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    emoji_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'emoji',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_emoji',
  }
);

module.exports = PostEmoji;