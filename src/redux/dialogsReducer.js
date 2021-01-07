const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_CHAT_MESSAGE = 'UPDATE-CHAT-MESSAGE'

 export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let messagesLength = state.messages.length++
            let newChatMessage = {
                id: messagesLength,
                message: state.newChatMessage
            }
            state.messages.push(newChatMessage)
            state.newChatMessage = ''
            return state
        case UPDATE_CHAT_MESSAGE:
            state.newChatMessage = action.newMessage
            return state
        default:
            return state
    }
}

export const addChatMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateChatMessageActionCreator = (message) => {
    return {
        type: UPDATE_CHAT_MESSAGE,
        newMessage: message
    }
}

export default dialogsReducer