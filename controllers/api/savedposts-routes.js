
// we have to reference the script id from saved-post.handlebars

const savedPostElement = document.getElementById('saved-post-template');

// handlebars.compile will create a rendering function...?

const template = Handlebars.compile(savedPostElement.innerHTML);

// rendering function to generate the html for a post object and then insert into page
// defining data for our post

const post = {
  title: 'Blah Blah Post',
  content: 'Hello World!'
};

// use the rendering function which should generate HTML for our post

const html = template(post);


// now we can insert HTML in our page

document.body.innerHTML += html;

// to save our user's post to the database, we need an api route and javascript function. 
// the function needs to send a request to API route with necessary data for the new post
// the api route should use sequelize to create a new entry in the database
// to render saved post on the page, we use same rendering function and template previously. 
// to retrieve saved posts from database, we use another API route that query the database and returns saved posts as JSON response.
// Finally use javascript to send a request to send a request to the route, parse response, and then pass the saved post to rendering function to generate HTML for each post.

// send request to api route to retrieve saved posts

  fetch('/api/saved-posts')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const html = template(post);
        document.body.innerHTML += html;
      });
    });

    // or.........

// Defining API route and javascript function
// Defining our saved post model in Sequelize

//     const SavedPost = sequelize.define('saved_post', {
//       user_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true
//       }.,
//       content: Sequelize.TEXT
//     });

//     // API route for saving a new post

//     app.post('/api/saved-posts', (req, res) => {

//       // this extracts data for the new saved post from the req. body

//       const { user_id, content } = req.body;

//       // Using Sequelize to create new saved post in the database
//       SavedPost.create({ user_id, content })
//       .then(() => {
//         // return success message if post was saved succesfully and error if cannot save post
//         res.send({ 'Successfully saved post'});
//       })
//       .catch(error => {
//         res.send({'Error saving post, please try again'});
//       });
//     });

//     // function for saving new post/ defining this function

//     function savePost(user_id, content) {

//       // sends req to API route with the data for newly saved post

//       fetch('/api/saved-posts', {
//         method: 'POST',
//         body: JSON.stringify({ user_id, content }),
//         headers: { 'Content-type': 'application/json' }
//       }).then(response => {
//         // Handling res from API route
//         if (response.ok) {
//           console.log('Post was saved successfully');
//         } else {
//         console.error('There was an error saving post');
//     }
//   });
// }

// // We can use this savePost function to save a new post by calling it with the user_id and content values.

// savePost(1, 'Hello World!');