// This section is for our javascript logic for dynamically creating "cards" aka individual posts on our user profile page, also with using sequelize to do so.

// This code will create a new div element for the card, add a heading element with the user's name, a text element to display the post content. Then it will append the card to the page, allowing us to dynamically display the post data on our page.

const Sequelize = require('sequelize');

// Connect to database

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

// Fetch the post data from the database using Sequelize

const postId = 1;
Post.findbyPk(postId).then(post => {
  // create card element
  const card = document.createElement('div');
  card.classList.add('card');

  // create heading element and add user's name

  const heading = document.createElement('h3');
  heading.textContent = post.username;
  card.appendChild(heading);

  // Create text element in order to add the post content

  const text = document.createElement('p');
  text.textContent = post.content;
  card.appendChild(text);

  // append card to page

  document.body.appendChild(card);
});
