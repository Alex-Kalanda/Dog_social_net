const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Bobik', secondName: 'Mestnyj'},
            status: 'I am a boss',
            location: {city: 'Pinsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Snezhok', secondName: 'Staryj'},
            status: 'Champion of dvor!',
            location: {city: 'Polotsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: true,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Almaz', secondName: 'Zloj'},
            status: 'I love you!',
            location: {city: 'Novopolotsk', country: 'Belarus'}
        },
        {
            id: 4,
            followed: false,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Krysa', secondName: 'Podzabornaya'},
            status: 'I like trash',
            location: {city: 'Novopolotsk', country: 'Belarus'}
        },
        {
            id: 5,
            followed: false,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Amur', secondName: 'Vysokij'},
            status: 'Good luck, dogs!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 6,
            followed: true,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Tobik', secondName: 'Chernyj'},
            status: 'I am a big boy!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 7,
            followed: true,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Korg', secondName: 'Melkij'},
            status: 'Eat big bone',
            location: {city: 'Novopolotsk', country: 'Belarus'}
        },
        {
            id: 8,
            followed: false,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Azaman', secondName: 'Dvorovoj'},
            status: 'walking..',
            location: {city: 'Novopolotsk', country: 'Belarus'}
        },
        {
            id: 9,
            followed: true,
            photoUrl: 'https://purewows3.imgix.net/images/articles/2019_07/small-dogs-big-personalities-400.jpg',
            name: {firstName: 'Belyj', secondName: 'Samoed'},
            status: 'Oh, my ass..',
            location: {city: 'Orsha', country: 'Belarus'}
        },
    ]
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})




