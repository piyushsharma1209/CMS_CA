// main.js

// This function makes a call to the WordPress REST API to retrieve the latest posts
async function getPosts() {
    const response = await fetch('https://piyushsharma.one/fedup/wp-json/wp/v2/posts');
    const posts = await response.json();
    return posts;
}

// This function takes a post object and creates an HTML element for it
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
    });

    const titleElement = document.createElement('div');
    titleElement.classList.add('post-title');
    titleElement.innerHTML = post.title.rendered;
    postElement.appendChild(titleElement);

    return postElement;
}

// This function adds the posts titles to the page
async function displayPosts() {
    const posts = await getPosts();
    const appElement = document.getElementById('app');
    for (const post of posts) {
        const postElement = createPostElement(post);
        appElement.appendChild(postElement);
    }
}

displayPosts();