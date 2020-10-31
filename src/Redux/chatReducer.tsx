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
}

export type ChatReducerAT =
    AddMessageAT

let initialState: ChatPageType = {
    dialogs: [
        {name: "Valera", id: v1()},
        {name: "Gosha", id: v1()},
        {name: "Ilya", id: v1()},
        {name: "Vova", id: v1()}
    ],
    messages: [
        {id: v1(), MessageText: "Hello!"},
        {id: v1(), MessageText: "Where are you?"},
        {id: v1(), MessageText: "Brother"},
        {id: v1(), MessageText: "Fine!"},
    ]
}

export const chatReducer = (state: ChatPageType = initialState, action: ChatReducerAT) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...
                    state,
                messages: [...state.messages, {id: v1(), MessageText: action.newMessage}]

            }
        }
        default:
            return state
    }
}
//---------------------------------------ADD-MESSAGE-----------------------------------
const ADD_MESSAGE = "ADD-MESSAGE";
export type AddMessageAT = {
    type: typeof ADD_MESSAGE
    newMessage: string
}
export const addMessage = (newMessage: string): AddMessageAT =>
    ({
        type: ADD_MESSAGE,
        newMessage: newMessage
    })
