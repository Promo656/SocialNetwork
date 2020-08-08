import {ActionType, PostPageType, StoreType} from "./state";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const postReducer = (state: PostPageType, action: ActionType) => {
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

