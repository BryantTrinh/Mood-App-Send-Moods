let emojiId;

const searchFormHandler = async (event) => {
  console.log('STARTING search.js for searching by emoji');
  event.preventDefault();

  const emojiOptionsArray = document.querySelector('#emoji-dropdown').options;

  for (i = 0; i < emojiOptionsArray.length; i++) {
    if (emojiOptionsArray[i].selected) {
      emojiId = parseInt(emojiOptionsArray[i].value);
    }
  };
  console.log('>>> emojiId: ', emojiId);

  // const result = await fetch(`api/post/search/${emojiId}`, {
  //   method: 'GET',
  // });
  // console.log(result); // the GET request to the API endpoint works! but not rendering

  document.location.replace(`/search/${emojiId}`);
}

// TO BE DISCUSSED WITH TEAM:
// OPTION 1: write another router.get('/filter'...) and write more code to filter.js to keep
// the selected emoji after reloading instead of happy
// OPTION 2: turn the filter into a search functionality and render a search result page