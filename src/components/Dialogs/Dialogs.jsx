import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./PersonalChat/PersonalChat"
import OneMessage from "./OneMessage"


const Dialogs = () => {
    return (
        <div className={classes.Messages}>

            <h1 className='CaptionPages'>Chat with your dogs-friends</h1>

            <div className={classes.Dialogs}>

                <div className={classes.DialogItem}>
                    <Dialog name="Bobik" id="1"/>
                    <Dialog name="Tyzik" id="2"/>
                    <Dialog name="Almaz" id="3"/>
                    <Dialog name="Krysa" id="4"/>
                    <Dialog name="Reks" id="5"/>
                    <Dialog name="Tobik" id="6"/>
                    <Dialog name="Korg" id="7"/>
                    <Dialog name="Azaman" id="8"/>
                    <Dialog name="Belyj" id="9"/>
                </div>

                <div className={classes.MessagesOfItem}>
                    <OneMessage text='Hi, how are you?' />
                    <OneMessage text='Ok' />
                    <OneMessage text='Go eat sheet to garden!' />
                </div>

            </div>
        </div>
    )
}

export default Dialogs;