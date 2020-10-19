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
    AddMessageAT

let initialState = {
    dialogs: [
        {name: "Valera", id: v1()},
        {name: "Gosha", id: v1()},
        {name: "Ilya", id: v1()},
        {name: "Yura", id: v1()}
    ],
    messages: [
        {id: v1(), MessageText: "Hello!"},
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
            stateCopy.messages = [...state.messages, {id: v1(), MessageText: action.newMessage}]
            stateCopy.newMessageText = ""
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
    newMessage:string
}
export const addMessage = (newMessage:string): AddMessageAT =>
    ({type: ADD_MESSAGE,
    newMessage:newMessage
    })
