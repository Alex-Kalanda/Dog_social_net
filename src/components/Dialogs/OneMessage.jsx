import React from 'react'
import classes from './Dialogs.module.css'


const OneMessage = (props) => {


    return (
        <div>
            <div className={classes.OneMessage}>{props.text}</div>
        </div>

    )
}

export default OneMessage;