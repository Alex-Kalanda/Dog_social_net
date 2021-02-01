import React from 'react'
import LogoDog from '../img/logo_dog.jpg'
import classes from './Header.module.css'

const Header = () => {
    return (
    <header className = {classes.Header}>
        <img src={LogoDog} alt="LogoDog"/>
        <p>Welcome to page about Pisunator!</p>
    </header>
    )
}
export default Header;