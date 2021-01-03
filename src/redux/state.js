let rerenderEntireTree = () => {
    console.log('ddgdgdgdgd')
}

let state = {
    profilePage: {
        posts : [
        {id: 1, posttext: 'Hi, how are you?', likes: 10},
        {id: 2, posttext: 'Privet, Medved!', likes: 114},
        {id: 3, posttext: 'What do you do, tommorow?', likes: 5},
        {id: 4, posttext: 'You nice man?', likes: 4},
        {id: 5, posttext: 'I like Picnic', likes: 107},
        {id: 6, posttext: 'I learn 16 lesson It-camasutra!', likes: 54},
        {id: 7, posttext: 'Props is krytaja vesch!', likes: 42}
    ],
        newPostText: ''
    },
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
    messages: [
        {id:1, message:'Hi, how are you?'},
        {id:2, message:'Ok'},
        {id:3, message:'Go eat sheet to garden!'},
        {id:4, message:'Go eat sheet to garden!!'},
        {id:5, message:'Go eat sheet to garden!!!'},
        {id:6, message:'Go eat sheet to garden!!!!'},
        {id:7, message:'Go eat sheet to garden!!!!!'},
        {id:8, message:'Go eat sheet to garden!!!!!!'},
    ]
}

window.state = state

export const addPost = () => {

    let postsLength = state.profilePage.posts.length++

    let newPost = {
        id: postsLength,
        posttext: state.profilePage.newPostText,
        likes: 0
    }
     state.profilePage.posts.push(newPost)
     state.profilePage.newPostText = ''
     rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;