import React from "react";
import './ProfileWall.module.css'
import {connect} from "react-redux";
import {ProfileWall} from "./ProfileWall";
import {StateType} from "../../../Redux/redux-store";
import {getPosts} from "../../../Redux/usersSelector";


let mapStateToProps = (state: StateType) => {
    return {
        posts: getPosts(state)
    }
}

export const ProfileWallContainer = connect(mapStateToProps)(ProfileWall)

