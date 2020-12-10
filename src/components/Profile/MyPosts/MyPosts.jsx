import React from 'react'
import '../../../App.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {



    let wallPosts = props.postsData.map ( wall => <Post message={wall.posttext} likes={wall.likes}  /> )


    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <div>New post</div>
            {wallPosts}
        </div>
    )
}

export default MyPosts