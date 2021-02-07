import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/users'>Search users</NavLink></li>
                <li><NavLink to='/dialogs'>Messages</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li><NavLink to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;