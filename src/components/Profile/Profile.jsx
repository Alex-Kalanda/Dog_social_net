import React from 'react'
import avatar from '../img/avatar_dog.jpg'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.Content}>
            <img className={classes.HeadImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiHy-hliL5OujTMR2tmOr1U_A_D644gzVHQ&usqp=CAU" alt=""/>
            <div className={classes.Ava_Info}>
                <img className={classes.Avatar} src={avatar} alt="avatar"/>
                <div className={classes.Info}>
                    <h1>Pisunatorovich Sabek</h1>
                    <ul>
                        <li>Date of birth: 1 may</li>
                        <li>City: Podzaborny</li>
                        <li>Warning level: 5+</li>
                        <li>Web site: 3d_sabeka</li>
                    </ul>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;