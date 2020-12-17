import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id:1, posttext:'Hi, how are you?', likes:10 },
    {id:2, posttext:'Privet, Medved!', likes:114 },
    {id:3, posttext:'What do you do, tommorow?', likes:5 },
    {id:4, posttext:'You nice man?', likes:4 },
    {id:5, posttext:'I like Picnic', likes:107 },
    {id:6, posttext:'I learn 16 lesson It-camasutra!', likes:54 },
    {id:7, posttext:'Props is krytaja vesch!', likes:42 }
]

let dialogsData = [
    {id: 1, name: 'Bobik'},
    {id: 2, name: 'Tyzik'},
    {id: 3, name: 'Almaz'},
    {id: 4, name: 'Krysa'},
    {id: 5, name: 'Reks'},
    {id: 6, name: 'Tobik'},
    {id: 7, name: 'Korg'},
    {id: 8, name: 'Azaman'},
    {id: 9, name: 'Belyj'},
]

let messagesData = [
    {id:1, message:'Hi, how are you?'},
    {id:2, message:'Ok'},
    {id:3, message:'Go eat sheet to garden!'},
    {id:4, message:'Go eat sheet to garden!!'},
    {id:5, message:'Go eat sheet to garden!!!'},
    {id:6, message:'Go eat sheet to garden!!!!'},
    {id:7, message:'Go eat sheet to garden!!!!!'},
    {id:8, message:'Go eat sheet to garden!!!!!!'},
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
