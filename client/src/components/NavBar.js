import React from 'react';
import { Link } from 'react-router-dom'

//Navbar that gives you links to explore different options
export default function NavBar() {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/View"> View All</Link>
            <Link to="/Edit"> Edit Posts</Link>
        </div>
    )
}
