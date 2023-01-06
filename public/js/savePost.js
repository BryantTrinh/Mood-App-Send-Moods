const savePostHandler = async (event) => {
    event.preventDefault();
    
    let finder = event.target.id
    let savePostIndex = finder.split(',')
    let post_id = savePostIndex[0];
    let user_id = savePostIndex[1];

    console.log(savePostIndex[0])
    console.log(savePostIndex[1])
    
    fetch('/api/saved-posts', {
      method: 'POST',
      body: JSON.stringify({ post_id, user_id }),
      headers: { 'Content-type': 'application/json' }
    })
  }

  