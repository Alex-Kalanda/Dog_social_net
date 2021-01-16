import React from 'react'
import Profile from "./Profile";
import store from "../../redux/reduxStore";


const ProfileContainer = () => {
    return ( <Profile store={store}/> )
}

export default ProfileContainer;