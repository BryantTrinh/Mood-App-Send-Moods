// This is if we are doing numbers instead of the URL
// function to search for array for a specific number (emoji). For loop iterates through array and finds an element that is equal to 'num', then we add
// the corresponding user created post to the list of results, and then we return the list of results.

function searchArray(arr, num) {
  var results= [];
  for (var i = 0; i < arr.length; i++) {
    if (arr [i] === num) {

      // here we are adding the user created post to the list of results.

      results.push(userCreatedPosts[arr[i]]);
    }
  }
  return results;
}

// ----------------------------------------------------------------------------------------------
// This is if we are using the URL package (cloudify?) for our pictures.

function searchArray(arr, url) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === url) {
      results.push(userCreatedPosts[arr[i]]);
    }
  }
  return results;
}

// to render the emotion emojis to a feed page, we can use innerHTML to update the html content of the element
// this function takes in list of 'posts', which should be an object containing the pictureUrl property. 
// We iterate through the list of posts and append an 'img' element to the feed element for each post, where we use the pictureUrl property as the 'src' attribute for the image. 


var feed = document.getElementById('feed');

function renderEmojis(posts) {
  for (var i = 0; i< posts.length; i++) {
    var post = posts[i];
    feed.innerHTML += '<img src="' + post.pictureUrl + '">'; 
  }
}