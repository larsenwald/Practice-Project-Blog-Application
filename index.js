import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));//so the ejs files can have access to the images and styles we placed in "public"

import bodyParser from "body-parser"; //for retrieving info from submitted forms
app.use(bodyParser.urlencoded({extended: true})); //for retrieving info from submitted forms


app.listen(port, () => {
    console.log(`Server's up! Listening on ${port}...`);
  });

const posts = [];
app.get("/", (req, res) => {
    res.render("index.ejs", {
      posts: posts,
    })
})

app.post("/post-added", (req, res) => {
  const aPost = new article(req.body["title"], req.body["description"], req.body["content"]);
  posts.push(aPost);
  res.render("index.ejs", {
    posts: posts,
  })
})

app.get("/read", (req, res) => {
  console.log(req.query)
  console.log(Object.keys(req.query));
  res.render("read-article.ejs", {
    post: posts[Object.keys(req.query)[0].substring(1)],
  })
})

app.get("/deleted", (req, res) => {
  posts.splice(Object.keys(req.query)[0].substring(1), 1)
  res.render("index.ejs", {
    posts: posts,
  })
})

app.post("/edit", (req, res) => {
  console.log(Object.keys(req.body)[3].substring(1));
  posts[Object.keys(req.body)[3].substring(1)].title = req.body["title"];
  posts[Object.keys(req.body)[3].substring(1)].description = req.body["description"];
  posts[Object.keys(req.body)[3].substring(1)].content = req.body["content"];
  res.render("index.ejs", {
    posts: posts,
  });
})

function article(title, description, content){
  this.title = title;
  this.description = description;
  this.content = content;
}