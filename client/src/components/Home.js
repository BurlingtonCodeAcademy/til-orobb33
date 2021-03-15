import React from "react";
import "../App.css"

//adding info through form, creating posts
export default function Home() {
  return (
  <div>
    <div id="header">
  <h1 id="home">T.I.L.</h1>
      <h1>Today I Learned</h1>
    </div>
      
      <form id="formlayout" action="/writepost" method="POST">
       
        <input id="title" name="title" placeholder="title:" type="text" />
     
        <input id="author" name="author" placeholder="author:" type="text" />
      
        <textarea id="textbox" name="content" placeholder="your text here" type="text" />
        
        <input id="topic" name="topic" placeholder="topic:" type="text" />
       
        <input id="submit" type="submit" value="submit"></input>

       
      </form>
   
    </div>
  );
}
