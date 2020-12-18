import React from 'react'
import './css_reset.css'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {


    return (
        <BrowserRouter>
            <div className="AppWraper">
                <Header/>
                <div className="NavContent">
                    <Navbar/>
                    <div className="DialogsPage">
                        <Route path = '/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogs}
                                                                         messagesData={props.state.messages} /> } />
                        <Route path = '/profile' render={ () => <Profile postsData={props.state.posts}/> } />
                        <Route path = '/news' component={ () => <News /> } />
                        <Route path = '/music' component={ () => <Music /> } />
                        <Route path = '/settings' component={ () => <Settings /> } />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

