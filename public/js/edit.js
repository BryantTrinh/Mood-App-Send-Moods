// DONE

const postId = document.querySelector('input[name="post-id"]').value;

const editForm = async function(event) {

  event.preventDefault();

const title = document.querySelector('input[name="post-title"]').value;

const body = document.querySelector('textarea[name="post-body"]').value;

await fetch(`/api/post/${postId}`, {

  method: 'PUT',

  body: JSON.stringify({

    title,

    body

  }),

  headers: {

    'Content-Type': 'application/json'

  }

});

  document.location.replace('/dashboard');

};

const deleteClick = async function() {

  await fetch(`/api/post/${postId}`, {

    method: 'DELETE'

});

document.location.replace('/dashboard');

};

document.querySelector('#edit-post-form').addEventListener('submit', editForm);

document.querySelector('#delete-btn').addEventListener('click', deleteClick);