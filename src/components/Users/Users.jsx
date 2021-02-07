import classes from "./SearchUsers.module.css";
import '../../App.css'
import React from "react";
import Preloader from "../MicriComponents/Preloader/Preloader";

let Users = (props) => {

    let amountOfPages = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= amountOfPages; i++) {
        pages.push(i)
    }

    return <>
        <div className='CaptionPages'>
            Find your friend!
        </div>
        <div className={classes.FindArea}>
            <input type="text" placeholder='input your friend name...'/>
            <button>Find</button>
        </div>
        <div className={classes.selectOfPage}>
            <span>Page</span>


            {pages.map(item => {
                return <span
                    className={props.currentPage === item && classes.selectedPage}
                    onClick={() => {
                        props.onPageChanged(item)
                    }}>{item}</span>
            })}
            <div className='PreloaderUsers'>
                {props.isFetching ? <Preloader/> : null}
            </div>
        </div>
        {props.users.map(u =>
            <div key={u.id} className={classes.UserBlock}>

                <div className={classes.Img_Button}>
                    <div className={classes.UserPhoto}>
                        <img src={u.photos.small} alt="userPhoto"/>
                    </div>
                    <div> {u.followed
                        ? <button className={classes.FollowerButton} onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </div>

                <div className={classes.Left_UserInfo}>
                    <div>
                        <div className={classes.DogName}>{u.name}</div>
                        <div className={classes.Status}>{u.status}</div>
                    </div>
                    <div className={classes.LivingPlace}>
                        <div> #ID user {u.id}</div>
                    </div>
                </div>

            </div>)}
    </>

}

export default Users