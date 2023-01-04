const loginFormHandler = async (event) => {
  console.log('STARTING login function');
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      window.alert('Failed to log in');
    }
  };
};

const signupFormHandler = async (event) => {
  console.log('>>> event: ', event)
  console.log('STARTING signup function');
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('api/user/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('signup ok');
      document.location.replace('/profile');
    } else {
      window.alert('Failed to sign up');
    }
  };
};