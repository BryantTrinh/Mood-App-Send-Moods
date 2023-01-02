// This section is for our javascript logic for dynamically creating "cards" aka individual posts on our user profile page

var postDisplayEl = document.getElementById('postDisplay');
var recentPosts = [];

// initialize and update page content from mysql

function renderPosts() {
  recentPosts = 

}

// creating the recent cards

function renderRecentCard(){
  parent.innerHTML = "";

  for (let i=0; i< recentPosts.length; i++) {
    let recentPostsContainerEl = document.createElement('div');
    let recentPostsCardEl = document.createElement('div');
    let recentPostsTextEl = document.createElement('p');
    
  }
}