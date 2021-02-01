
const Users = () => {

    let arrayUsers = [
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

return (
    <div>
        {arrayUsers.map(u=> <div>
            <p>{u.name.firstName}</p>
            <p>{u.name.secondName}</p>
        </div> )}
    </div>

)

}

export default Users