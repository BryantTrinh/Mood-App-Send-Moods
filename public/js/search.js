let emojiId;

const feedSearchFormHandler = async (event) => {
  console.log('STARTING search.js for searching by emoji');
  event.preventDefault();

  const emojiOptionsArray = document.querySelector('#emoji-dropdown').options;

  for (i = 0; i < emojiOptionsArray.length; i++) {
    if (emojiOptionsArray[i].selected) {
      emojiId = parseInt(emojiOptionsArray[i].value);
    }
  };
  console.log('>>> emojiId: ', emojiId);

  document.location.replace(`/search/feed/${emojiId}`);
};

const profileSearchFormHandler = async (event) => {
  console.log('STARTING search.js for searching by emoji');
  event.preventDefault();

  const emojiOptionsArray = document.querySelector('#emoji-dropdown').options;

  for (i = 0; i < emojiOptionsArray.length; i++) {
    if (emojiOptionsArray[i].selected) {
      emojiId = parseInt(emojiOptionsArray[i].value);
    }
  };
  console.log('>>> emojiId: ', emojiId);

  document.location.replace(`/search/profile/${emojiId}`);
};
