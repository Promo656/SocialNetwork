import React from "react";
import {NewPost} from "./NewPost";
import {addPost} from "../../../../Redux/profileReducer";
import {connect} from "react-redux";
import {StateType} from "../../../../Redux/redux-store";
import {getProfilePage} from "../../../../Redux/usersSelector";

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: getProfilePage(state)
    }
}

export const NewPostContainer = connect(
    mapStateToProps, {
        addPost
    }
)(NewPost)
