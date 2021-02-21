const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_CHAT_MESSAGE = 'UPDATE-CHAT-MESSAGE'

let initialisation = {
    dialogs: [
        {id: 1, name: 'Bobik'},
        {id: 2, name: 'Snezhok'},
        {id: 3, name: 'Almaz'},
        {id: 4, name: 'Krysa'},
        {id: 5, name: 'Amur'},
        {id: 6, name: 'Tobik'},
        {id: 7, name: 'Korg'},
        {id: 8, name: 'Azaman'},
        {id: 9, name: 'Belyj'},
    ],
    newDogChat: '',
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Ok'},
        {id: 3, message: 'Go eat sheet to garden!'},
        {id: 4, message: 'Go eat sheet to garden!!'},
        {id: 5, message: 'Go eat sheet to garden!!!'},
        {id: 6, message: 'Go eat sheet to garden!!!!'},
        {id: 7, message: 'Go eat sheet to garden!!!!!'},
        {id: 8, message: 'Go eat sheet to garden!!!!!!'},
    ],
    newChatMessage: ''
}

export const dialogsReducer = (state = initialisation, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newChatMessage = state.newChatMessage

            return {
                ...state,
                messages: [...state.messages, {id: 76, message: newChatMessage}],
                newChatMessage: ''
            }

        case UPDATE_CHAT_MESSAGE:
            return {
                ...state,
                newChatMessage: action.message
            }
        default:
            return state
    }
}

export const addChatMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateChatMessageActionCreator = (message) => ({type: UPDATE_CHAT_MESSAGE, message})




export default dialogsReducer