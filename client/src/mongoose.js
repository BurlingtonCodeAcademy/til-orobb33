const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017',{ useNewUrlParser: true, useUnifiedTopology: true })
//can take an options object {}

const libraryDB = mongoose.connection 

//listening for error event, saying to bind error to the console

//you can use number or int32


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    copies: Number,
    new: Boolean,
    genre: Array
   
})

const movieSchema = new mongoose.Schema({
    title: String, 
    director: String
})

const BooksModel = mongoose.model('books', bookSchema)
const MovieModel = mongoose.model('Movie', movieSchema)




let hitchhikersGuide = new MovieModel ({
title: "Hitchhiker's Guide to the Galaxy",
director: "Garth Jennings"

})


//creating new book
//saving to the model

// const subtleKnife = newBooksModel({
// title: "The Subtle Knife",
// author: "Philip Pulman",
// copies: 4,
// new: true,
// genre: ['fiction', 'fantasy', 'political']


// })

// subtleKnife.save(err,data) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log("successfully added: ", data)
//     }
// }

//find is a method, called it with a (), {} is an empty object that says get me everything
async function printAll() {
    const cursor = await BooksModel.find({})


await cursor.forEach(book => {
    console.log(book)
})
}
printAll()