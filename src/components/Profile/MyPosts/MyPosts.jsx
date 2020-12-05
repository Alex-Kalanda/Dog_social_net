import React from 'react'
import '../../../App.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <div>New post</div>
            <Post message='Hi, how are you?' likes='10'/>
            <Post message='Privet, Medved!' likes='114'/>
            <Post message='What do you do, tommorow?' likes='5'/>
            <Post message='You nice man?' likes='4'/>
            <Post message='I like Picnic' likes='107'/>
            <Post message='I learn 16 lesson It-camasutra!' likes='54'/>
            <Post message='Props is krytaja vesch!' likes='42'/>
        </div>
    )
}

export default MyPosts