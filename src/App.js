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


const App = () => {



    let postsData = [
        {id:1, posttext:'Hi, how are you?', likes:10 },
        {id:2, posttext:'Privet, Medved!', likes:114 },
        {id:3, posttext:'What do you do, tommorow?', likes:5 },
        {id:4, posttext:'You nice man?', likes:4 },
        {id:5, posttext:'I like Picnic', likes:107 },
        {id:6, posttext:'I learn 16 lesson It-camasutra!', likes:54 },
        {id:7, posttext:'Props is krytaja vesch!', likes:42 }
    ]



    return (
        <BrowserRouter>
            <div className="AppWraper">
                <Header/>
                <div className="NavContent">
                    <Navbar/>
                    <div className="DialogsPage">
                        <Route path = '/dialogs' render={ () => <Dialogs /> } />
                        <Route path = '/profile' render={ () => <Profile postsData={postsData}/> } />
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

