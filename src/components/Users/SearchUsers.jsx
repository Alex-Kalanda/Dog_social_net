import React from 'react'
import '../../App.css'
import classes from './SearchUsers.module.css'
import testUserPhoto from '../img/usersPhoto/3.jpg'
import * as axios from 'axios'

class SearchUsers extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render()
    {
        return (
            <>
                <div className='CaptionPages'>
                    Find your friend!
                </div>
                <div className={classes.FindArea}>
                    <input type="text" placeholder='input your friend name...'/>
                    <button>Find</button>
                </div>
                {this.props.users.map(u =>
                    <div key={u.id} className={classes.UserBlock}>

                        <div className={classes.Img_Button}>
                            <div className={classes.UserPhoto}>
                                <img src={testUserPhoto} alt="userPhoto"/>
                            </div>
                            <div> {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                            </div>
                        </div>

                        <div className={classes.Left_UserInfo}>
                            <div>
                                <div className={classes.DogName}>{u.name}</div>
                                <div className={classes.Status}>{u.status}</div>
                            </div>
                            <div className={classes.LivingPlace}>
                                <div>{u.uniqueUrlName}, {u.id}</div>
                            </div>
                        </div>

                    </div>)}
            </>
        )
    }

}

export default SearchUsers;