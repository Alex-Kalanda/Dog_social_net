import React from 'react'
import '../../../../App.css'
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.Post}>
            <img src="https://sun1.beltelecom-by-minsk.userapi.com/impf/c850724/v850724347/1b0545/uGewIdH6jPw.jpg?size=100x0&quality=96&crop=59,0,973,973&sign=9cd3c640a662db5f98be8d5becfa4170&ava=1" alt="ava"/>
            <p>Any post</p>
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post