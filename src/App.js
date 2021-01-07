import React from 'react'
import './css_reset.css'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Dialogs from "./components/Dialogs/Dialogs"
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {

    return (
            <div className="AppWraper">
                <Header/>
                <div className="NavContent">
                    <Navbar/>
                    <div className="MainBlock">

                        <Route path = '/dialogs'
                               render={ () => <Dialogs
                                   dialogsData={props.state.chats.dialogs}
                                   newDogChat={props.state.chats.newDogChat}
                                   messagesData={props.state.chats.messages}
                                   newChatMessage={props.state.chats.newChatMessage}
                                   dispatch={props.dispatch}
                               /> } />
                        <Route path = '/profile'
                               render={ () => <Profile
                                   postsData={props.state.profilePage.posts}
                                   newPostText={props.state.profilePage.newPostText}
                                   dispatch={props.dispatch}
                               /> } />

                        <Route path = '/news' component={ () => <News /> } />
                        <Route path = '/music' component={ () => <Music /> } />
                        <Route path = '/settings' component={ () => <Settings /> } />
                    </div>
                </div>
            </div>
    );
}

export default App;

