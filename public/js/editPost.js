console.log('anything');

const postId = document.querySelector('input[name="post-id"]').value;
let selected_moods = [];

const editPostFormHandler = async (event) => {
  console.log('STARTING editPost.js for updating');
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('textarea[name="post-content"]').value.trim();

  const moodInput = document.querySelectorAll('.mood-input');
  for (let i = 0; i < moodInput.length; i++) {
    if (moodInput[i].checked) {
      selected_moods.push(moodInput[i].value);
    }
  }
  console.log('>>> selected_moods array: ', selected_moods);
  selected_moods = selected_moods.join(',');

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content, selected_moods }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('post updated');
  document.location.replace('/profile');
};

const deleteClickHandler = async () => {
  console.log('STARTING editPost.js for deleting');

  await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
  });

  console.log('post deleted');
  document.location.replace('/dashboard');
  };

document.addEventListener('submit', editPostFormHandler);
document.addEventListener('reset', deleteClickHandler);