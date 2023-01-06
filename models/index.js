const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Emoji = require('./Emoji');
const PostEmoji = require('./PostEmoji');
const SavedPost = require('./SavedPost');

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

Post.belongsToMany(Emoji, {
  through: PostEmoji,
  foreignKey: 'post_id',
});

Emoji.belongsToMany(Post, {
  through: PostEmoji,
  foreignKey: 'emoji_id',
});

SavedPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

SavedPost.hasMany(Post, {
  foreignKey: 'post_id',
})

module.exports = { User, Post, Comment, Emoji, PostEmoji, SavedPost };
