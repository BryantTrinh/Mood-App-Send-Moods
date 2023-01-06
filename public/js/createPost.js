let choice = 0;
let emoji1 = document.getElementById('emoji1');
let emoji2 = document.getElementById('emoji2');
let emoji3 = document.getElementById('emoji3');
let emoji4 = document.getElementById('emoji4');
let emoji5 = document.getElementById('emoji5');
let selected_moods = [];


const newPostFormHandler = async (event) => {
  console.log('STARTING createPost.js');
  event.preventDefault();

  const title = document.querySelector('#post-title-input').value.trim();
  const content = document.querySelector('#post-content-input').value.trim();

  const moodInput = document.querySelectorAll('.mood-input');
  for (let i = 0; i < moodInput.length; i++) {
    if (moodInput[i].checked) {
      selected_moods.push(moodInput[i].value);
    }
  }
  console.log('>>> selected_moods array: ', selected_moods);
  selected_moods = selected_moods.join(',');

  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({ title, content, selected_moods }), // **DELETE SELECTED_MOODS COLUMN IN POST TABLE
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/profile');
  };

// *NOTE: might not need the below?
function changeEmojiFilter() {
  // emoji1.classList.add('filter-grey');
  // emoji2.classList.add('filter-grey');
  // emoji3.classList.add('filter-grey');
  // emoji4.classList.add('filter-grey');
  // emoji5.classList.add('filter-grey');

  if (choice === 1) {
    emoji1.classList.remove('filter-grey');
  } else if (choice === 2) {
    emoji2.classList.remove('filter-grey');
  } else if (choice === 3) {
    emoji3.classList.remove('filter-grey');
  } else if (choice === 4) {
    emoji4.classList.remove('filter-grey');
  } else if (choice === 5) {
    emoji5.classList.remove('filter-grey');
  }
}

// still need to debug this
function selectEmoji(emojiId) {
  if (choice !== emojiId) {
    choice = emojiId;
  } else if (choice === emojiId) {
    choice = 0;
  };
  changeEmojiFilter();
}
