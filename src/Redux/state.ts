import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export let store = {
    _state: {
        chatPgage: {
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
            ]
        },
        postPage: [
            {id: v1(), text: "Hello, everyone!!"},
            {id: v1(), text: "It's my first site!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
        ],
        newPostText: "",
        newMessageText: ""
    },
    _callSubscriber(state: AppStateType) {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: AppStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost = {id: v1(), text: this._state.newPostText}
            this._state.postPage.unshift(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {id: v1(), MessageText: this._state.newMessageText}
            this._state.chatPgage.messages.push(newMessage)
            this._callSubscriber(this._state)
        } else if(action.type===UPDATE_NEW_MESSAGE_TEXT){
            this._state.newMessageText=action.MessageText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = (text: string):ActionType3 =>
    ({type: ADD_POST, newText: text})

export const updateNewPostActionCreator = (text: string):ActionType2 =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = (text: string):ActionType1 =>
    ({type: ADD_MESSAGE, MessageText: text})

export const updateNewMessageActionCreator = (text: string):ActionType4 =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, MessageText: text})

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
export type PostType = {
    id: string
    text: string
}
export type AppStateType = {
    chatPgage: ChatPageType
    postPage: Array<PostType>
    newPostText: string
}
export type ActionType1 = {
    type:typeof ADD_MESSAGE
    MessageText: string
}
export type ActionType2 = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type ActionType3 = {
    type: typeof ADD_POST
    newText: string
}
export type ActionType4 = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    MessageText: string
}
export type ActionType=ActionType1|ActionType2|ActionType3|ActionType4





