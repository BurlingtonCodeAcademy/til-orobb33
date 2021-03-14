import React from "react";
import { useState } from "react";

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
          {/* <div>Title: {postInfo.title}</div>
          <div> Author: {postInfo.author}</div>
          <div>Content: {postInfo.content}</div> 
          */}
          <form action={`/edit/${postID}`} method="POST">
            <input name="title" placeholder={postInfo.title} type="text" />

            <input name="author" placeholder={postInfo.author} type="text" />

            <textarea
              name="content"
              placeholder={postInfo.content}
              type="text"
            />
            {/*        
       <input name="topic" placeholder={postInfo.topic}  type="text" /> */}

            <input type="submit" value="submit"></input>
          </form>
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