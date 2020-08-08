import {ActionType, AppStateType, ChatPageType} from "./state";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


export const chatReducer = (state: ChatPageType, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: v1(), MessageText: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.MessageText
            return state
        default:
            return state
    }
}

