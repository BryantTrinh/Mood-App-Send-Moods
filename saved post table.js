const { response } = require('express');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// sequelize.defines a new model
const SavedUserPost = sequelize.define('saved_user_post', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  post_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }
});

SavedUserPost.sync();

Post.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Post, { foreignKey: 'post_id' });

// api route to save the user's saved post

app.post('api/saved-user-posts', (req, res) =>{
  SavedUserPost.create({
    user_id: req.body.user_id,
    post_id: req.body.post_id
  })
  .then(savedUserPost => res.json(savedUserPost))
  .catch(error => res.status(400).json({ error }));
});


// on click event to save the user post this is for HTML!!!!

<button id="save-post-button" onClick="savePost()">Save Post</button>


// JS function for this savepost() above

function savePost() {
  // get the user id and post id from DOM or whatever source?
  const user_id = ...;
  const post_id = ...;

}

// POST request to api/saved-user-posts route with user_id and post_id

fetch('/api/saved-user-posts', {
  method: 'POST',
  body: JSON.stringify({ user_id, post_id }),
  headers: { 'Content-Type': 'application/json' }
}).then(response => {
  if (response.ok) {
    console.log('Post saved succesfully!');
  } else {
    console.error('There was an error saving your post');
  });
}

// do not add to schema, this needs to stay on js side, everytime someone creates a new post.

// SELECT saved_user_post.user_id, post.title, post.content, post.selected_moods, post.date_created, post.user_id
// FROM saved_user_post
// INNER JOIN post ON saved_user_post.post_id= post.id;