import Dialogs from "./Dialogs";
import {addChatMessageActionCreator, updateChatMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.chats.dialogs,
        messages: state.chats.messages,
        newChatMessage: state.chats.newChatMessage,
        isAuth: state.auth.isAuth
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        addChatMessage: () => {dispatch(addChatMessageActionCreator())} ,
        updateChatMessage: (message) => {dispatch(updateChatMessageActionCreator(message))},
    }
}

compose()()

const AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />
    return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps,
    mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer