import React from 'react'
import classes from './Profile.module.css'
import SunUnderWater from '../img/SunUnderWater.jpg'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={classes.Content}>
            <img className={classes.HeadImg} src={SunUnderWater} alt="HeadImg"/>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;