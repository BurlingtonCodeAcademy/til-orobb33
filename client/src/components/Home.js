import React from "react";

//adding info through form, creating posts
export default function Home() {
  return (
    <div>
      <h1 id="home">TIL</h1>
      <form action="/writepost" method="POST">
       
        <input name="title" placeholder="title:" type="text" />
     
        <input name="author" placeholder="author:" type="text" />
      
        <textarea name="content" placeholder="your text here" type="text" />
        
        <input name="topic" placeholder="topic:" type="text" />
       
        <input type="submit" value="submit"></input>
       
      </form>
    </div>
  );
}
