import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  //   let entryArray = [];
  //   // results &&
  //   results.forEach((obj) => {
  //     console.log(obj);
  //     entryArray.push(obj.text);
  //   });
  // console.log(entryArray)

  console.log(results);
  return (
    <div>
      <h1 id="viewHeader">View all posts</h1>
      {/* targeting results with .map -> guard clause  
      also creating divs on states created*/}
      {results.length === 0
        ? null
        : results.map((post, index) => {
            console.log(post);
            return (
            <div>
            <Link to={`/View/${post._id}`}>{post.title}</Link>

             <div key={index}>{post.author}</div>
          
            </div>
        )})}
    </div>
  );
}
