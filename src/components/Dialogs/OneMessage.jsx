import React from 'react'
import classes from './Dialogs.module.css'


const OneMessage = (props) => {
    return (
        <div className={classes.OneMessage}>{props.text}</div>
    )
}

export default OneMessage;