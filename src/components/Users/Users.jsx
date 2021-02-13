import classes from "./SearchUsers.module.css";
import '../../App.css'
import React from "react";
import Preloader from "../MicriComponents/Preloader/Preloader";
import noPhoto from '../img/noPhoto.jpeg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API";

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
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : noPhoto} alt="userPhoto"/>
                        </NavLink>
                    </div>
                    <div> {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  className={classes.FollowerButton}
                                  onClick={() => {
                                      props.toggleFollowingInProgress(true, u.id)
                                      usersAPI.unFollow(u.id)
                                          .then(data => {
                                              if (data.resultCode === 0) {
                                                  props.unFollow(u.id)
                                              }
                                              props.toggleFollowingInProgress(false, u.id)
                                          })
                                  }}>UnFollow</button>


                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.toggleFollowingInProgress(true, u.id)
                                      usersAPI.follow(u.id)
                                          .then(data => {
                                              if (data.resultCode === 0) {
                                                  props.follow(u.id)
                                              }
                                              props.toggleFollowingInProgress(false, u.id)
                                          })
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