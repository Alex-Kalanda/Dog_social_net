import React from 'react'
import '../../../App.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let wallPosts = props.postsData.map ( wall => <Post message={wall.posttext} likes={wall.likes}  /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <div className={classes.newPost}>
                <button onClick={addPost}>New post</button>
                <input type='text' ref={newPostElement}/>
            </div>
            {wallPosts}
        </div>
    )
}

export default MyPosts