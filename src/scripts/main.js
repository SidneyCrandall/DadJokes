import { getdadJoke } from "./data/DataManager.js";
import { Post } from "./Post.js";

const postElement = document.querySelector("main")

const showPost = () => {
    getdadJoke().then((allPosts) => {
        postElement.innerHTML = Post(allPosts)
    })
};
showPost();