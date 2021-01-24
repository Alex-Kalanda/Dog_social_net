import React from 'react'
import '../../../../App.css'
import classes from './Post.module.css'
import avatar from '../../../img/dog-logo.png'
import Likes from "./Likes/Likes";

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <img className={classes.Avatar} src={avatar} alt="ava"/>
            <div className={classes.textMessage}>{props.message}</div>
            <div className={classes.like}>
                <div className={classes.numberOfLikes}>{props.likes}</div>
                <Likes/>
            </div>
        </div>
    )
}

export default Post