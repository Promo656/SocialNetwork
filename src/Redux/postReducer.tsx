import {ActionType, PostPageType, StoreType} from "./store";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState= {
    posts: [
        {id: v1(), text: "Hello, everyone!!"},
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

