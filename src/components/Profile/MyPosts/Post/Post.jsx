import React from 'react'
import '../../../../App.css'
import classes from './Post.module.css'
import avatar from '../../../img/dog-logo.png'
import Likes from "./Likes/Likes";

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <img className={classes.Avatar} src={avatar} alt="ava"/>
            {props.message}
            <div className={classes.like}>
                {props.likes}
                <Likes/>
            </div>
        </div>
    )
}

export default Post