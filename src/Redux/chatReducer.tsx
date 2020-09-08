import {v1} from "uuid";

export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    MessageText: string
}
export type ChatPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

export type ChatReducerAT =
    AddMessageAT | UpdateNewMessageTextAT

let initialState = {
    dialogs: [
        {name: "Valera", id: v1()},
        {name: "Gosha", id: v1()},
        {name: "Ilya", id: v1()},
        {name: "Yura", id: v1()}
    ],
    messages: [
        {id: v1(), MessageText: "Hello"},
        {id: v1(), MessageText: "Where are you?"},
        {id: v1(), MessageText: "Brooo"},
        {id: v1(), MessageText: "Fine"},
    ],
    newMessageText: ""
}

export const chatReducer = (state: ChatPageType = initialState, action: ChatReducerAT) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages, {id: v1(), MessageText: state.newMessageText}]
            stateCopy.newMessageText = ""
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.MessageText
            return stateCopy
        }
        default:
            return state
    }
}
//---------------------------------------ADD-MESSAGE-----------------------------------
const ADD_MESSAGE = "ADD-MESSAGE";
export type AddMessageAT = {
    type: "ADD-MESSAGE"
    //  MessageText: string
}
export const addMessageActionCreator = (): AddMessageAT =>
    ({type: ADD_MESSAGE})
//------------------------------------UPDATE-NEW-MESSAGE-TEXT----------------------
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export type UpdateNewMessageTextAT = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    MessageText: string
}
export const updateNewMessageActionCreator = (text: string): UpdateNewMessageTextAT =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, MessageText: text})