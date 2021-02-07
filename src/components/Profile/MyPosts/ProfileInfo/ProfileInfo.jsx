import React from 'react'
import '../../../../App.css'
import classes from './ProfileInfo.module.css'
import avatar from "../../../img/avatar_dog.jpg";
import Preloader from "../../../MicriComponents/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }


    return (
        <div className={classes.Ava_Info}>
            <img className={classes.Avatar} src={props.profile.photos.large} alt="avatar"/>
            <div className={classes.Info}>



                <h1>{props.profile.fullName}</h1>
                <ul>
                    <li>About me: {props.profile.aboutMe}</li>
                    <li>City: Podzaborny</li>
                    <li>Warning level: 5+</li>
                    <li>Dog color: Black and tan</li>
                    <li>Enemies: white dogs</li>
                    <li>Looking for a job: {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу, всё норм'}</li>
                    <li>About job: {props.profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo