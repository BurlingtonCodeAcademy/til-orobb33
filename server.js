require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const staticDir = path.resolve("./client/public");
app.use(express.urlencoded({ extended: true }));
//mongoose stuff
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/til");



//entry database, setting up schema for journal entries
const entryDB = mongoose.connection;
const entrySchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  date: String,
  topic: Array,
  // date: String,
});

const entryModel = mongoose.model("entries", entrySchema);
app.use(express.static(staticDir));


//add
app.post("/writepost", async (req, res) => {
  let newPost = new entryModel({
    title: req.body.title,
    author: req.body.author,
    date: new Date(),
    content: req.body.content,
    topics: [req.body.tags],
  });
  await newPost.save();
  res.status(200).sendFile(path.resolve(staticDir + "/index.html"));
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

//show one entry
app.get('/view/:id', async (req, res) => {
let id = req.params.id
let data = await entryModel.findOne({_id:id})


res.send(data)
});

//edit
app.post(
  "/view/:id",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    updatePost(id, data);
    res.redirect("/");
  }
);
//

async function updatePost(id, update) {
  let updateObj = {
    $set: update,
  };
  await entryModel.updateOne({ _id: ObjectId(id) }, updateObj);
}

app.get("*", (req, res) => {
  res.sendFile(staticDir + "/index.html");
});

app.listen(port, () => {
  console.log("server is running");
});

