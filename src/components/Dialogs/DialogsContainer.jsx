import Dialogs from "./Dialogs";
import {addChatMessageActionCreator, updateChatMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.chats.dialogs,
        messages: state.chats.messages,
        newChatMessage: state.chats.newChatMessage,
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        addChatMessage: () => {dispatch(addChatMessageActionCreator())} ,
        updateChatMessage: (message) => {dispatch(updateChatMessageActionCreator(message))},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer