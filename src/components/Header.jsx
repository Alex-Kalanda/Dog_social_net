import React from 'react';
import LogoDog from './img/logo_dog.jpg'

const Header = () => {
    return (
    <header className="Header">
        <img src={LogoDog} alt="LogoDog"/>
        <p>Welcome to page about Pisunator!</p>
    </header>
    )
}
export default Header;