import React from 'react'
import '../../../App.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {
    let wallPosts = props.postsData.map ( wall => <Post message={wall.posttext} likes={wall.likes}  /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <div className={classes.newPost}>
                <button onClick={addPost}>New post</button>
                <input type='text' onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            {wallPosts}
        </div>
    )
}

export default MyPosts