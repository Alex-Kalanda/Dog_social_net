import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"
import SunUnderWater from '../img/SunUnderWater.jpg'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.Content}>
            <img className={classes.HeadImg} src={SunUnderWater} alt="HeadImg"/>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}

export default Profile;