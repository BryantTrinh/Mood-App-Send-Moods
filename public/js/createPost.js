let choice = 0;
let selectedMoods = [];

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

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', () => {
  buttonElement.classList.toggle('.filter-grey');
});






