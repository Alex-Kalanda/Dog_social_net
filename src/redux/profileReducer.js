import {usersAPI} from "../API";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialisation = {
    posts: [
        {id: 1, postText: 'Hi, how are you?', likes: 10},
        {id: 2, postText: 'Privet, Medved!', likes: 114},
        {id: 3, postText: 'What do you do, tommorow?', likes: 5},
        {id: 4, postText: 'You nice man?', likes: 4},
        {id: 5, postText: 'I like Picnic', likes: 107},
        {id: 6, postText: 'I learn 16 lesson It-camasutra!', likes: 54},
        {id: 7, postText: 'Props is krytaja vesch!', likes: 42}
    ],
    newPostText: '',
    profile: null,

}

const profileReducer = (state = initialisation, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText

            return {
                ...state,
                posts: [...state.posts, {id: 66, postText: newPostText, likes: 0}],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer