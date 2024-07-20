const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//creting id's using uuid package
const { v4 : uuidv4 } = require("uuid");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "I love coding",
    },
    {
        id : uuidv4(),
        username : "Shradhakhapra",
        content : "I love teaching",
    },
    {
        id : uuidv4(),
        username : "rahulkumar",
        content : "I have cleared my interview",
    },
];

// index route
app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
});

// create route
app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push( { id, username, content } ); 
    res.redirect("/posts");
});

//show route
app.get("/posts/:id", (req,res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

// update route 
app.patch("/posts/:id", (req,res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    //console.log(id);
    console.log(newContent);"<%="
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// edit route
app.get("/posts/:id/edit", (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post} );
});

// delete
app.delete("/posts/:id",(req,res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});