export const Post = (postObject) => {
    return `
    <section class="post">
    <header>
    <h2 class="post__joke"> ${postObject.joke} </h2>
    </header>
      <p class="post__id"> Joke: ${postObject.id} </p>
      <button onclick="location.reload();">You're Kidding!</button>
      </section>
      `
}