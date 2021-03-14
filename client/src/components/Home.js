import React from "react";

//this is internal trigger
export default function Home() {
  return (
    <div>
      <h1 id="home">TIL</h1>
      <form action="/writepost" method="POST">
        {/* <label> Title:  */}
        <br></br>
        <input name="title" placeholder="title:" type="text" />
        {/* </label> */}
        <br></br>
        <input name="author" placeholder="author:" type="text" />
        {/* <label> Content:  */}
        <br></br>
        <textarea name="content" placeholder="your text here" type="text" />
        <br></br>
        {/* </label> */}
        {/* <label> Topic: */}
        <br></br>
        <input name="topic" placeholder="topic:" type="text" />
        {/* </label> */}
        <br></br>

        <br></br>
        <input type="submit" value="submit"></input>
        {/* <label>Links<input name="links" type="text"/></label>*/}
      </form>
      {/* <View/> */}
    </div>
  );
}
