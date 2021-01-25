import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {

    _state : {
        profilePage: {
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
            },
        chats: {
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
        },
    _callSubscriber() {
            console.log('random')
        },
    getState() {
        return store._state;
        },
    subscribe(observer) {
        this._callSubscriber = observer
        },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.chats = dialogsReducer(this._state.chats, action)

        this._callSubscriber(this._state)
        }
}

window.store = store

export default store;