import React from "react";
import {ProfilePageType,} from "../../../../Redux/profileReducer";
import {NewPostReduxForm} from "./NewPostForm";

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export function NewPost(props: PropsType) {

    let addPost = (formData: any) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div>
            <NewPostReduxForm onSubmit={addPost}/>
        </div>
    )
}

