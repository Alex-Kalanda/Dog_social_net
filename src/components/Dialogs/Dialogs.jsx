import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./PersonalChat/PersonalChat"
import OneMessage from "./OneMessage"


const Dialogs = () => {

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

    let dialogsElements = dialogsData.map ( dialog => <Dialog name={dialog.name} id={dialog.id} /> )
    let messages = messagesData.map ( text => <OneMessage text={text.message} id={text.id}/> )



    return (
        <div className={classes.Messages}>

            <h1 className='CaptionPages'>Chat with your dogs-friends</h1>
            <div className={classes.Dialogs}>
                <div className={classes.DialogItem}>{dialogsElements}</div>
                <div className={classes.MessagesOfItem}>{messages}</div>
            </div>
        </div>
    )
}

export default Dialogs;