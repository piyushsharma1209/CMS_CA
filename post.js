// post.js

// This function makes a call to the WordPress REST API to retrieve a specific post
async function getPost(id) {
    const response = await fetch(`https://piyushsharma.one/fedup/wp-json/wp/v2/posts/${id}`);
    const post = await response.json();
    return post;
}

// This function takes a post object and creates an HTML element for it
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('div');
    titleElement.classList.add('post-title');
    titleElement.innerHTML = post.title.rendered;
    postElement.appendChild(titleElement);

    const contentElement = document.createElement('div');
    contentElement.classList.add('post-content');
    contentElement.innerHTML = post.content.rendered;
    postElement.appendChild(contentElement);

    return postElement;
}

// This function displays the post on the page
async function displayPost() {
    // Get the post ID from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Retrieve the post from the WordPress REST API
    const post = await getPost(id);

    // Create the post element
    const postElement = createPostElement(post);

    // Add the post element to the page
    const appElement = document.getElementById('app');
    appElement.appendChild(postElement);
}

displayPost();
