const savePostHandler = async (event) => {
  event.preventDefault()
  
  let selectedElement = event.target
  let finder = event.target.id
  let savePostIndex = finder.split(',')
  let post_id = savePostIndex[0];
  let user_id = savePostIndex[1];

  console.log(event.target)
  console.log(savePostIndex[0])
  console.log(savePostIndex[1])
 
  if ((!selectedElement.getAttribute("saved")|| selectedElement.getAttribute("saved") == "false")) {
    fetch('/api/saved-posts', {
      method: 'POST',
      body: JSON.stringify({ post_id, user_id }),
      headers: { 'Content-type': 'application/json' }
    })
      .then(
        selectedElement.setAttribute("saved", "true"),
        saved = selectedElement.getAttribute("saved"),
        console.log(event.target),
        console.log(saved),
        selectedElement.setAttribute("src","assets/images/filled-save.png")
        )
        return
      };
      if (saved = true) {
        fetch('api/saved-posts/delete', {
          method: 'POST',
          body: JSON.stringify({ post_id, user_id }),
          headers: { 'Content-type': 'application/json' }
        })
        .then(
          selectedElement.setAttribute("saved", "false"),
          saved = selectedElement.getAttribute("saved"),
          console.log(event.target),
          console.log(saved),
          selectedElement.setAttribute("src","assets/images/save-icon.png")
      )
      return
  }
}
