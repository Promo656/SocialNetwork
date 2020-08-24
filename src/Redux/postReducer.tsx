import {ActionType, PostPageType, StoreType} from "./store";
import {v1} from "uuid";

let initialState= {
    posts: [
        {id: v1(), text: "Hello, everyone!!!!!!!!!"},
        {id: v1(), text: "It's my first site!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
    ],
    newPostText: ""
}

export const postReducer = (state: PostPageType=initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), text: state.newPostText}
            state.posts.unshift(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default :
            return state
    }
}

//--------------------------------------ADD-POST----------------------------------
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