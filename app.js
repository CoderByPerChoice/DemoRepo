const express = require("express");

const app = express();
app.use(express.json());

const PORT = 8080;

const POSTS = [
  {
    ID: 1,
    Post: "Post 1",
    Author: "Rahul",
  },
  {
    ID: 2,
    Post: "Post 2",
    Author: "Amit",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to My REST API");
});

app.get("/posts", (req, res) => {
  res.send(POSTS);
});

app.post("/post", (req, res) => {
  const PostID = req.body.PostID;
  const Post = req.body.Post;
  const Author = req.body.Author;

  POSTS.push({
    PostID: PostID,
    Post: Post,
    Author: Author,
  });

  res.status(201).json({ msg: "Post created successfully" });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
