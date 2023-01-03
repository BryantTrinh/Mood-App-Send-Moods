let choice = 0;

const newPostFormHandler = async (event) => {
  console.log('STARTING createPost.js');
  event.preventDefault();

  const title = document.querySelector('#post-title-input').value.trim();
  const content = document.querySelector('#post-content-input').value.trim();

  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('post created');
  document.location.replace('/profile');
  };

const selectEmojis = async (event) => {
  console.log('SELECTING emojis');
  event.preventDefault();

  event.target.classList.remove('filter-grey');
}

function changeEmojiFilter() {
  emoji1.classList.remove("clicked");
  emoji2.classList.remove("clicked");
  emoji3.classList.remove("clicked");

  if (choice === 1) {
    emoji1.classList.add("clicked");
  } else if (choice === 2) {
    emoji2.classList.add("clicked");
  } else if (choice === 3) {
    emoji3.classList.add("clicked");
  }
}

function selectChoice(emojiId) {
  if (choice !== emojiId) {
    choice = emojiId;
  } else if (choice === emojiId) {
    choice = 0;
  }
  changeEmojiFilter();
}