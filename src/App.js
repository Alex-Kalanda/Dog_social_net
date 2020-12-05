import React from 'react'
import './css_reset.css'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <BrowserRouter>
            <div className="AppWraper">
                <Header/>
                <div className="NavContent">
                    <Navbar/>
                    <div className="DialogsPage">
                        <Route path = '/dialogs' component={Dialogs}/>
                        <Route path = '/profile' component={Profile}/>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

