import React from "react";
import './ProfileWall.module.css'
import {AppStateType} from "../../../Redux/store";
import {connect} from "react-redux";
import {ProfileWall} from "./ProfileWall";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.postPage.posts
    }
}

export const ProfileWallContainer = connect(mapStateToProps)(ProfileWall)

