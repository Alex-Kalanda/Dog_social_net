import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./PersonalChat/PersonalChat"
import OneMessage from "./OneMessage"
import '../../App.css'

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messages = props.messages.map(text => <OneMessage text={text.message} id={text.id}/>)

    let newMessage = React.createRef()

    let onAddMessage = () => props.addChatMessage()

    let onUpdateChatMessage = () => {
        let message = newMessage.current.value
        props.updateChatMessage(message)
    }

    return (
        <div>

            <h1 className='CaptionPages'>Chat with your dogs-friends</h1>
            <div className={classes.Dialogs}>
                <div className={classes.DialogItem}>{dialogsElements}</div>
                <div  className={classes.AllMessagesBlock}>
                    <div className={classes.newMessage}>

                        <input type='text'
                               onChange={onUpdateChatMessage}
                               ref={newMessage}
                               value={props.newChatMessage}/>

                        <button onClick={onAddMessage}>Send message</button>

                    </div>

                    <div className={classes.MessagesOfItem}>{messages}</div>

                </div>

            </div>
        </div>
    )
}

export default Dialogs;