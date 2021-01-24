const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

 let initialisation = {
         posts: [
             {id: 1, posttext: 'Hi, how are you?', likes: 10},
             {id: 2, posttext: 'Privet, Medved!', likes: 114},
             {id: 3, posttext: 'What do you do, tommorow?', likes: 5},
             {id: 4, posttext: 'You nice man?', likes: 4},
             {id: 5, posttext: 'I like Picnic', likes: 107},
             {id: 6, posttext: 'I learn 16 lesson It-camasutra!', likes: 54},
             {id: 7, posttext: 'Props is krytaja vesch!', likes: 42}
         ],
         newPostText: ''
     }

const profileReducer = (state = initialisation, action) => {
    switch (action.type) {
        case ADD_POST:
            let postsLength = state.posts.length++
            let newPost = {
                id: postsLength,
                posttext: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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