import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../App.css"

//brings you to single post
//fetches data for that individual post
export default function SinglePost(props) {
  let postID = props.match.params.singlePostID;
  const [postInfo, setPostInfo] = useState(null);

  fetch(`/view/${postID}`)
    .then((res) => res.json())
    .then((res) => {
      setPostInfo(res);
    });

  //return brings form to edit.... cannot get to function, i believe form action and method is issue
  return (
    <div>
      {postInfo === null ? null : (
        <div>
         <h1 id="edit title">Edit: </h1>
          <form id="editform"action={`/Edit/${postID}`} method="POST">
            <input id="edit-title"name="title" placeholder={postInfo.title} type="text" />

            <input id="edit-author"name="author" placeholder={postInfo.author} type="text" />

            <textarea id="edit-text"
              name="content"
              placeholder={postInfo.content}
              type="text"
            />
    
            <input id="submit" type="submit" value="submit"></input>
          </form> 
         


          <h1>Original Post:</h1>
          <h3>Title: {postInfo.title}</h3>
          <h3> Author: {postInfo.author}</h3>
          <h3>Content: {postInfo.content}</h3>
          <h3>Date: {postInfo.date}</h3> 


          <Link to={"/View/"}> <button id="delete" onClick={() => fetch("/delete/" + postID)}>Delete</button> </Link>
        </div>
      )}
    </div>
  );
}



//------------------NOTES: 
  //create form that is same info as home page
//autopopulate it with the information from fetch
//write an onchange handler that updates State
//button that submits state to server
//server uses findone and update to update database

//can create delete button here or on view all