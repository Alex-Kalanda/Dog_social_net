import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./PersonalChat/PersonalChat"
import OneMessage from "./OneMessage"



const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map ( dialog => <Dialog name={dialog.name} id={dialog.id} /> )
    let messages = props.messagesData.map ( text => <OneMessage text={text.message} id={text.id}/> )

    let newMessage = React.createRef()
    let message = newMessage.current.value


    return (
        <div className={classes.Messages}>

            <h1 className='CaptionPages'>Chat with your dogs-friends</h1>
            <div className={classes.Dialogs}>
                <div className={classes.DialogItem}>{dialogsElements}</div>
                <div>
                    <div className={classes.newMessage}>

                        <input type='text'
                               onChange={props.updateChatMessage(message)}
                               ref={newMessage}
                               value={props.newChatMessage}/>

                        <button onClick={props.addMessage}>New post</button>

                    </div>

                    <div className={classes.MessagesOfItem}>{messages}</div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;