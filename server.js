require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
// const user = process.env.USER
// const password = process.env.PASSWORD
const staticDir = path.resolve("./client/public");
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/til");
//time display var
let timeDisplay = new Date();
console.log(timeDisplay);

//entry database, setting up schema for journal entries
const entryDB = mongoose.connection;
const entrySchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  topic: Array,
  // date: String,
});

const entryModel = mongoose.model("entries", entrySchema);
app.use(express.static(staticDir));

//add entry
// app.post('/view', express.urlencoded(), (req, res) => {
//   let data = req.body
//   newPost(data.title, data.author, data.content, data.topic, data.date)
// res.redirect('/')
// })

//add
app.post("/writepost", async (req, res) => {
  let newPost = new entryModel({
    title: req.body.title,
    author: req.body.author,
    // date: timeDisplay(),
    content: req.body.content,
    topics: [req.body.tags],
  });
  await newPost.save();
  res.status(200).send("Successfulyy added");
});

//find
app.get("/api", async (req, res) => {
  const cursor = await entryModel.find({});

  let results = [];

  await cursor.forEach((post) => {
    results.push(post);
  });

  res.json(results);
});

// //show entries
// app.get('/view', allEntries)

// //show one entry
// app.get('/view/:id', async (req, res) => {
// let id = req.params.id
// let data = singleEntry(id)
// res.send(data)
// });

//edit
app.post("/view/:id", express.urlencoded(), (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updatePost(id, data);
  res.redirect("/");
});
//

app.get("*", (req, res) => {
  res.sendFile(staticDir + "/index.html");
});

app.listen(port, () => {
  console.log("server is running");
});

// app.post("/dashboard", async (req, res) => {
//   let formSub = req.body;

//   //userModel is connecting to DB, it has UserSchema, and its finding a username (every user should have a username based on schema)
//   //username that is ENTERED on website, (formsub). so you're asking to find matching
//   let userObj = await UserModel.findOne({ username: formSub.username });

//   console.log(userObj);

//   //if user obj exists and the password match, sign them in.
//   if (userObj && userObj.pass === formSub.pass) {

//       let issuedToken = createJWT(userObj)

//    req.headers.authorization = 'Bearer' + issuedToken.token

//    nextTick()
