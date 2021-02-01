import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./PersonalChat/PersonalChat"
import OneMessage from "./OneMessage"


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messages = props.messages.map(text => <OneMessage text={text.message} id={text.id}/>)

    let newMessage = React.createRef()

    let onAddMessage = () => {
        props.addChatMessage()
    }
    let onUpdateChatMessage = () => {
        let message = newMessage.current.value
        props.updateChatMessage(message)
    }

    return (
        <div className={classes.Messages}>

            <h1 className='CaptionPages'>Chat with your dogs-friends</h1>
            <div className={classes.Dialogs}>
                <div className={classes.DialogItem}>{dialogsElements}</div>
                <div>
                    <div className={classes.newMessage}>

                        <input type='text'
                               onChange={onUpdateChatMessage}
                               ref={newMessage}
                               value={props.newChatMessage}/>

                        <button onClick={onAddMessage}>New post</button>

                    </div>

                    <div className={classes.MessagesOfItem}>{messages}</div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;