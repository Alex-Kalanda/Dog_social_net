import React from 'react';
import './css_reset.css';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
  return (
    <div className="AppWraper">
        <Header/>
        <div className="NavContent">
            <Navbar/>
            <Profile/>
        </div>
    </div>
  );
}


export default App;

