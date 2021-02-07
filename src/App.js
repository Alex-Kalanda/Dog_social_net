import React from 'react'
import './css_reset.css'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SearchUsersContainer from "./components/Users/SearchUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {

    return (
        <div className="AppWraper">
            <Header/>
            <div className="NavContent">
                <Navbar/>
                <div className="MainBlock">
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <SearchUsersContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/settings' component={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;

