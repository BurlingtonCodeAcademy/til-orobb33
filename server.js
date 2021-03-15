require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
// const staticDir = path.resolve("./client/public");
app.use(express.urlencoded({ extended: true }));
//mongoose stuff
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/til");
const { ObjectId } = require('mongodb')
const staticDir = path.resolve("./client/build");


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
  res.redirect("/View")
});

//edit
app.post(
  "/Edit/:id",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    await updatePost(id, data)
    updatePost(id, data);
    res.redirect("/");
  }
);

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


async function updatePost(id, update) {
  let updateObj = {
    $set: update,
  };
  await entryModel.updateOne({ _id: ObjectId(id) }, updateObj);
}


//delete
app.get("/delete/:id", async(req, res) => {
let id = req.params.id
console.log(id)
await entryModel.findOneAndDelete({_id: id});
})


app.get("*", (req, res) => {
  res.sendFile(staticDir + "/index.html");
});

app.listen(port, () => {
  console.log("server is running");
});

