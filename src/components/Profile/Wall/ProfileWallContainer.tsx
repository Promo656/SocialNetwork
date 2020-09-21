import React from "react";
import './ProfileWall.module.css'
import {connect} from "react-redux";
import {ProfileWall} from "./ProfileWall";
import {StateType} from "../../../Redux/redux-store";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts
    }
}

export const ProfileWallContainer = connect(mapStateToProps)(ProfileWall)

