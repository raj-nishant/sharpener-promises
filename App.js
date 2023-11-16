const posts = [{ title: "POST1" }, { title: "POST2" }];

// printing each of the post

function printPost() {
  posts.forEach((post) => {
    console.log(post.title);
  });
}

// creating post function

function createPost(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(title);

      resolve();
    }, 1000);
  });
}

// deleting post function

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();

      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date();

      resolve(lastActivityTime);
    }, 1000);
  });
}

// Modified code using async/await

async function performActions() {
  try {
    await createPost({ title: "post3" });

    const updatedTime = await updateLastUserActivityTime();

    console.log("Updated Last Activity Time:", updatedTime);

    console.log("All Posts:");

    printPost();

    await deletePost();

    console.log("Deleted the last post");

    console.log("Remaining Posts:");

    printPost();
  } catch (error) {
    console.log(error);
  }
}

performActions();
