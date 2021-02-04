import React from 'react'
import '../../App.css'
import classes from './SearchUsers.module.css'
import * as axios from 'axios'

class SearchUsers extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= amountOfPages; i++) {
            pages.push(i)
        }


        return (
            <>
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
                            className={this.props.currentPage === item && classes.selectedPage}
                            onClick={ () => { this.onPageChanged(item) } }>{item}</span>
                    })}

                </div>
                {this.props.users.map(u =>
                    <div key={u.id} className={classes.UserBlock}>

                        <div className={classes.Img_Button}>
                            <div className={classes.UserPhoto}>
                                <img src={u.photos.small} alt="userPhoto"/>
                            </div>
                            <div> {u.followed
                                ? <button className={classes.FollowerButton} onClick={() => {
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
                                <div> #ID user  {u.id}</div>
                            </div>
                        </div>

                    </div>)}
            </>
        )
    }

}

export default SearchUsers;