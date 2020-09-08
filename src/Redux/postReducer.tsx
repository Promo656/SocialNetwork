import {v1} from "uuid";

export type PostType = {
    id: string
    text: string
}
export  type PostPageType = {
    newPostText: string
    posts: Array<PostType>
}

export type PostReducerAT =
    AddPostAT | UpdateNewPostTextAT

let initialState = {
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

export const postReducer = (state: PostPageType = initialState, action: PostReducerAT) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [{id: v1(), text: state.newPostText}, ...state.posts]
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default :
            return state
    }
}

//--------------------------------------ADD-POST----------------------------------
const ADD_POST = "ADD-POST"
export type AddPostAT = {
    type: "ADD-POST"
//    newText: string
}
export const addPostActionCreator = (): AddPostAT =>
    ({type: ADD_POST})

//-----------------------------------UPDATE-NEW-POST-TEXT--------------------------------
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export const updateNewPostActionCreator = (text: string): UpdateNewPostTextAT =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})