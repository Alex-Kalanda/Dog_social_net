import React from 'react'
import '../../../../App.css'
import classes from './ProfileInfo.module.css'
import avatar from "../../../img/avatar_dog.jpg";

const ProfileInfo = () => {
    return (
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
    )
}

export default ProfileInfo