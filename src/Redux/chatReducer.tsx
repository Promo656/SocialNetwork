import {ActionType, ChatPageType} from "./store";
import {v1} from "uuid";

let initialState ={
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

export const chatReducer = (state: ChatPageType=initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages,{id: v1(), MessageText: state.newMessageText}]
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
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
  //  MessageText: string
}
export const addMessageActionCreator = (): AddMessageActionType =>
    ({type: ADD_MESSAGE})
//------------------------------------UPDATE-NEW-MESSAGE-TEXT----------------------
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    MessageText: string
}
export const updateNewMessageActionCreator = (text: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, MessageText: text})