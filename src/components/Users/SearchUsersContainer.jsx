
import '../../App.css'
import SearchUsers from "./SearchUsers";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

 let mapStateToProps = (state) => {
     return {
         users: state.usersPage.users
     }
 }
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(SearchUsers);