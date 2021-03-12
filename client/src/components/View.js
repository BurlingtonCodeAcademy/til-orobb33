import React from 'react'
import { useState, useEffect } from 'react'




export default function View() {
const [results, setResults] = useState([])

useEffect (() => {
if (results.length ===0) {

    fetch("/api")
    .then((res) => res.json())
    .then ((allResults) => {
        setResults(allResults)
    })
}
})

let entryArray =[];
// results && 
results.forEach((obj) => {
    console.log(obj)
    entryArray.push(obj.text)
});

    return (
        <div>
            <h1 id="viewHeader">View all posts</h1>

{entryArray.map((post, index) => {
return 
<div key={index}>{post.author}</div>

})}
        </div>
    )
}
