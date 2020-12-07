import React from 'react'
import '../../../App.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id:1, posttext:'Hi, how are you?', likes:10 },
        {id:2, posttext:'Privet, Medved!', likes:114 },
        {id:3, posttext:'What do you do, tommorow?', likes:5 },
        {id:4, posttext:'You nice man?', likes:4 },
        {id:5, posttext:'I like Picnic', likes:107 },
        {id:6, posttext:'I learn 16 lesson It-camasutra!', likes:54 },
        {id:7, posttext:'Props is krytaja vesch!', likes:42 },
    ]



    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <div>New post</div>
            <Post message={postsData[0].posttext} likes={postsData[0].likes}/>
            <Post message={postsData[1].posttext} likes={postsData[1].likes}/>
            <Post message={postsData[2].posttext} likes={postsData[2].likes}/>
            <Post message={postsData[3].posttext} likes={postsData[3].likes}/>
            <Post message={postsData[4].posttext} likes={postsData[4].likes}/>
            <Post message={postsData[5].posttext} likes={postsData[5].likes}/>
            <Post message={postsData[6].posttext} likes={postsData[6].likes}/>
        </div>
    )
}

export default MyPosts