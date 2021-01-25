import React from 'react'
import classes from './Music.module.css'


const Music = () => {
    return (
        <div className={classes.MyMusic}>
            <h1 className = 'CaptionPages'>My music</h1>
            <div className={classes.ListTracks}>
                <span>Track 1</span>
                <span>Track 2</span>
                <span>Track 3</span>
                <span>Track 4</span>
                <span>Track 5</span>
            </div>

        </div>
    )
}

export default Music