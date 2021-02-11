import React from 'react'
import '../../../../App.css'
import classes from './ProfileInfo.module.css'
import noPhoto from '../../../img/noPhoto.jpeg'
import Preloader from "../../../MicriComponents/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.Ava_Info}>
            <img className={classes.Avatar} src={props.profile.photos.large === null
            ? noPhoto
            : props.profile.photos.large} alt="avatar"/>
            <div className={classes.Info}>

                <h1>{props.profile.fullName}</h1>
                <ul>
                    <li>Что нужно знать обо мне: {props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJob
                        ? 'Ищу работу...'
                        : 'Работу не ищу'}</li>
                    <li>О работе: {props.profile.lookingForAJobDescription}</li>
                    <li>Связь со мной:
                        <ul>
                            <li>{props.profile.contacts.facebook === null || undefined
                                ? ''
                                : `Facebook   ${props.profile.contacts.facebook}`}</li>
                            <li>{props.profile.contacts.website === null || undefined
                                ? ''
                                : `Website   ${props.profile.contacts.website}`}</li>
                            <li>{props.profile.contacts.twitter === null || undefined
                                ? ''
                                : `Twitter   ${props.profile.contacts.twitter}`}</li>
                            <li>{props.profile.contacts.instagram === null || undefined
                                ? ''
                                : `Instagram   ${props.profile.contacts.instagram}`}</li>
                            <li>{props.profile.contacts.youtube === null || undefined
                                ? ''
                                : `Youtube   ${props.profile.contacts.youtube}`}</li>
                            <li>{props.profile.contacts.github === null || undefined
                                ? ''
                                : `Github   ${props.profile.contacts.github}`}</li>
                            <li>{props.profile.contacts.mainLink === null || undefined
                                ? ''
                                : `MainLink   ${props.profile.contacts.mainLink}`}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo