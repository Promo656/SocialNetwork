import {v1} from "uuid";
import {postReducer} from "./postReducer";
import {chatReducer} from "./chatReducer";

//-----------------------------------START ACTION CREATORS-------------------------------------
export type ActionType =
    AddMessageActionType
    | UpdateNewPostTextActionType
    | AddPostActionType
    | UpdateNewMessageTextActionType
//--------------------------------------ADD-POST-----------------------------------------
const ADD_POST = "ADD-POST"
export type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}
export const addPostActionCreator = (text: string): AddPostActionType =>
    ({type: ADD_POST, newText: text})

//-----------------------------------UPDATE-NEW-POST-TEXT--------------------------------
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export const updateNewPostActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

//---------------------------------------ADD-MESSAGE-----------------------------------
const ADD_MESSAGE = "ADD-MESSAGE";
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    MessageText: string
}
export const addMessageActionCreator = (text: string): AddMessageActionType =>
    ({type: ADD_MESSAGE, MessageText: text})

//------------------------------------UPDATE-NEW-MESSAGE-TEXT----------------------
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    MessageText: string
}
export const updateNewMessageActionCreator = (text: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, MessageText: text})
//-----------------------------------END ACTION CREATORS------------------------------------

//------------------------------------------------------------------------------------------

//-----------------------------------START CREATE TYPES-------------------------------------
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
export type PostType = {
    id: string
    text: string
}
export  type PostPageType = {
    newPostText: string
    posts: Array<PostType>
}
export type FriendType = {
    id: string
    name: string
}
export type FriendsPageType = {
    friends: FriendType[]
}
export type AppStateType = {
    chatPage: ChatPageType
    postPage: PostPageType
//    friendsPage: FriendsPageType
}
export type StoreType = {
    _state: AppStateType
    _callSubscriber: (state: AppStateType) => void
    getState: () => AppStateType
    subscribe: (observer: (state: AppStateType) => void) => void
    dispatch: (action: any) => void
}
//-----------------------------------END CREATE TYPES-------------------------------------

//------------------------------------------------------------------------------------------

//-----------------------------------START CREATE STORE-------------------------------------
export const store: StoreType = {
    _state: {
        chatPage: {
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
                {id: v1(), MessageText: "Fine!!!"},
            ],
            newMessageText: ""
        },
        postPage: {
            posts: [
                {id: v1(), text: "Hello, everyone!!!!!!!!!!!!!"},
                {id: v1(), text: "It's my first site!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
            ],
            newPostText: ""
        }/*,
        friendsPage:{
            friends:[
                {id:v1(),name:"Valera"},
                {id:v1(),name:"Gosha"},
                {id:v1(),name:"Ilya"},
                {id:v1(),name:"Yura"}
            ]
        }*/
    },
    _callSubscriber(state: AppStateType) {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.postPage = postReducer(this._state.postPage, action)
        this._state.chatPage = chatReducer(this._state.chatPage, action)
        this._callSubscriber(this._state)
    }
}
//-----------------------------------END CREATE STORE-------------------------------------


export type FriendTestType={
    id:string
    name:string
}
export type TestStoreType={
    friends: FriendTestType[]
}

export let testStore:TestStoreType={
    friends:[
        {id:v1(),name:"Egor"},
        {id:v1(),name:"Dima"},
        {id:v1(),name:"Vova"},
    ]
}







