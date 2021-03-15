import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function View() {
  const [results, setResults] = useState([]);

  //if results length is 0, then fetch information
  //fetching API info, set results to all results
  //this puts results into an array
  useEffect(() => {
    if (results.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((allResults) => {
          setResults(allResults);
        });
    }
  });

  console.log(results);
  return (
    <div id="viewtext">
      <h1 id="viewHeader">View all posts</h1>
      {/* targeting results with .map -> guard clause  
      also creating divs on states created*/}
      {results.length === 0
        ? null
        : results.map((post, index) => {
            console.log(post);
            return (
            <div id= "listings">
            <Link id="links" to={`/View/${post._id}`}>Title : {post.title}</Link>

             <div id="authors" key={index}>Author : {post.author}</div>
          
            </div>
        )})}
    </div>
  );
}
