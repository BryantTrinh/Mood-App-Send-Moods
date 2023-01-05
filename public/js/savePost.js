function savePostHandler(event) {
    event.preventDefault();
    
    const post_id = document.querySelector('#username-login').value.trim();
    const user_id = document.querySelector('#password-login').value.trim();
    
    fetch('/api/saved-posts', {
      method: 'POST',
      body: JSON.stringify({ post_id, user_id }),
      headers: { 'Content-type': 'application/json' }
    })
  }

  