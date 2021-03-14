import React from "react";
import { useState } from "react";

export default function SinglePost(props) {
  let postID = props.match.params.singlePostID;
  const [postInfo, setPostInfo] = useState(null);

  fetch(`/view/${postID}`)
    .then((res) => res.json())
    .then((res) => {
      setPostInfo(res);
    });

  return (


    <div>
      {postInfo === null ? null : (
        <div>
          <div>Title: {postInfo.title}</div>
          <div> Author: {postInfo.author}</div>
          <div>Content: {postInfo.content}</div>
        </div>
      )}
    </div>


//create form that is same info as home page
//autopopulate it with the information from fetch
//write an onchange handler that updates State
//button that submits state to server
//server uses findone and update to update database

//can create delete button here or on viewall
  );
}

