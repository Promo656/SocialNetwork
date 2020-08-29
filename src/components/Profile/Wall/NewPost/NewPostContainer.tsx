import React from "react";
import {ActionType, AppStateType, StoreType} from './../../../../Redux/store'
import {NewPost} from "./NewPost";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/postReducer";
import {StoreContext} from "../../../../StoreContext";

/*type PropsType = {

    store: StoreType
}*/

export function NewPostContainer() {


    return (
        <StoreContext.Consumer>
            {
                (store) =>
                {
                    let onPostChange = (text: string) => {
                        let action = updateNewPostActionCreator(text);
                        store.dispatch(action)
                        store.getState().postPage.newPostText = ""
                    }

                    let addPost = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action)
                    }

                    return <NewPost
                        onPostChange={onPostChange}
                        addPost={addPost}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}