import React from 'react'
import LogoDog from '../img/logo_dog.jpg'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <header className = {classes.Header}>
        <img src={LogoDog} alt="LogoDog"/>
        <p>Social network for frontend dev!</p>
        <div>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>LOGIN</NavLink>}
        </div>
    </header>
    )
}
export default Header;