import React from "react";
import {NewPost} from "./NewPost";
import {addPost, updateNewPost} from "../../../../Redux/postReducer";
import {connect} from "react-redux";
import {StateType} from "../../../../Redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}

export const NewPostContainer = connect(
    mapStateToProps, {
        addPost,
        updateNewPost
    }
)(NewPost)
