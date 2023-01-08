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

  const result = await fetch(`api/post/filter/${emojiId}`, {
    method: 'GET',
  });
  console.log(result); // the GET request to the API endpoint works! but not rendering
}

// either write another router.get('/filter'...) and write more code to filter.js to keep
// the selected emoji after reloading instead of happy
// OR turn this into a search functionality and render a search result page