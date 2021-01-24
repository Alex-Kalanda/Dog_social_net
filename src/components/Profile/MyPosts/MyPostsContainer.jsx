import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return(
        <MyPosts
            newPostText={state.newPostText}
            postsData={state.posts}
            updateNewPostText={onPostChange}
            addPost={onAddPost} />
)
}

export default MyPostsContainer
