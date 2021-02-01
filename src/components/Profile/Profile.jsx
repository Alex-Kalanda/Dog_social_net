import React from 'react'
import classes from './Profile.module.css'
import SunUnderWater from '../img/SunUnderWater.jpg'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {

    return (
        <div className={classes.Content}>
            <img className={classes.HeadImg} src={SunUnderWater} alt="HeadImg"/>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;