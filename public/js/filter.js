let emojiId;

const filterFormHandler = async (event) => {
  console.log('STARTING filter.js for filtering by emoji');
  event.preventDefault();

  const emojiOptionsArray = document.querySelector('#emoji-dropdown').options;

  for (i = 0; i < emojiOptionsArray.length; i++) {
    if (emojiOptionsArray[i].selected) {
      emojiId = parseInt(emojiOptionsArray[i].value);
    }
  };
  console.log('>>> emojiId: ', emojiId);

  await fetch(`api/post/filter/${emojiId}`, {
    method: 'GET',
  })

  // fetch(`api/post/search/${emojiId}`)
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  // get all data from local storage
  // use .filter() to return a new array of posts with the emoji
  // trigger a re-rendering based on the new posts data
  // connect the post data from this function to posts to render in
}



// Array.from(document.querySelector('#emoji-dropdown').options).forEach(function(emoji) {

// })

// module.exports = all the functions