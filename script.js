fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => {
    const postsList = document.querySelector('.posts-list');

    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postsList.appendChild(postElement);

      postElement.addEventListener('click', () => {
        const activePost = document.querySelector('.post.active');
        if (activePost) {
          activePost.classList.remove('active');
        }

        postElement.classList.add('active');

        const commentsList = document.querySelector('.comments-list');
        commentsList.innerHTML = '';
        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );
        postComments.forEach((comment) => {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          commentElement.innerHTML = `
            <h3>${comment.name}</h3>
            <p>${comment.body}</p>
          `;
          commentsList.appendChild(commentElement);
        });
      });
    });
  });

fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((comments) => {
    window.comments = comments;
  });
