import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./PersonalChat/PersonalChat"
import OneMessage from "./OneMessage"
import {addChatMessageActionCreator, updateChatMessageActionCreator} from "../../redux/dialogsReducer";




const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map ( dialog => <Dialog name={dialog.name} id={dialog.id} /> )
    let messages = props.messagesData.map ( text => <OneMessage text={text.message} id={text.id}/> )

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(addChatMessageActionCreator())
    }
    let updateChatMessage = () => {
        let message = newMessage.current.value
        props.dispatch(updateChatMessageActionCreator(message))
    }
    return (
        <div className={classes.Messages}>

            <h1 className='CaptionPages'>Chat with your dogs-friends</h1>
            <div className={classes.Dialogs}>
                <div className={classes.DialogItem}>{dialogsElements}</div>
                <div>
                    <div className={classes.newMessage}>

                        <input type='text'
                               onChange={updateChatMessage}
                               ref={newMessage}
                               value={props.newChatMessage}/>

                        <button onClick={addMessage}>New post</button>

                    </div>

                    <div className={classes.MessagesOfItem}>{messages}</div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;