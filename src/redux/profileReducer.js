const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
    newPostText: ''
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
        default:
            return state
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer