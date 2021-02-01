import React from 'react'
import classes from './Settings.module.css'
import '../../App.css'


const Settings = () => {
    return (
        <div className={classes.Settings}>
            <h1 className = 'CaptionPages'>Settings</h1>
            <div>Change Name</div>
            <div>Change Surname</div>
            <div>Time setting</div>
            <div>Language</div>
            <div>male/female</div>
            <div>Date of birth</div>
        </div>
    )
}

export default Settings;