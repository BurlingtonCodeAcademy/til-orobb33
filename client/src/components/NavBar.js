import React from 'react';
import { Link } from 'react-router-dom'

//Navbar that gives you links to explore different options
export default function NavBar() {
    return (
        <div id="navlinks">
            <Link id="homelink" to="/"  style={{ textDecoration: "none", color: "black" }}> Home </Link>
            <Link to="/View"  style={{ textDecoration: "none", color: "black" }} > View All</Link>
            
        </div>
    )
}
