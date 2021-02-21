import React from 'react'
import './css_reset.css'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SearchUsersContainer from "./components/Users/SearchUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (
        <div className="AppWraper">
            <HeaderContainer/>
            <div className="NavContent">
                <Navbar/>
                <div className="MainBlock">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <SearchUsersContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/music' component={() => <Music/>}/>
                    <Route path='/settings' component={() => <Settings/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;

