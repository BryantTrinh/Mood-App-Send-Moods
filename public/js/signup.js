// DONE

const signupForm = async function(event) {
  event.preventDefault();

const usernameEl = document.querySelector('#username-input-signup');

const passwordEl = document.querySelector('#password-input-signup');

const response = await fetch('/api/user', {

  method: 'POST',

  body: JSON.stringify({

    username: usernameEl.value,

    password: passwordEl.value,
  }),

  headers: { 'Content-Type': 'application/json' },

});

if (response.ok) {

  document.location.replace('/dashboard');

} else {

  alert('You have failed to signup');

}

};

document.querySelector('#signup-form').addEventListener('submit', signupForm);