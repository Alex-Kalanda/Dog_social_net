import React from 'react'
import '../../../../../App.css'
import like from '../../../../img/like2.png'
import classes from './Likes.module.css'


const Likes = () => {
    return (
        <div className={classes.likes}>
            <img src={like} alt="like"/>
            <span>Likes</span>
        </div>
    )
}

export default Likes