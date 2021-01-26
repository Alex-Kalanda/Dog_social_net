import React from 'react'
import '../../App.css'
import classes from './SearchUsers.module.css'


const SearchUsers = (props) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id} className={classes.UserBlock}>
                <div>
                    <div>
                        <img className={classes.UserPhoto} src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
                <span>
                    <span>
                        <div>{u.name.firstName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default SearchUsers;