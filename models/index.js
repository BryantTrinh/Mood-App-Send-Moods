const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Mood = require('./Mood');

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Mood, {
  foreignKey: 'post_id',
});

Mood.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };
