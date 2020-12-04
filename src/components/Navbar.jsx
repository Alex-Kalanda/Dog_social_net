import React from 'react';
import classes from '../Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li><a href="#1">Profile</a></li>
                <li><a href="#2">Messages</a></li>
                <li><a href="#3">News</a></li>
                <li><a href="#4">Music</a></li>
                <li><a href="#5">Settings</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;