import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import s from './Profile.module.css'
import {ProfileWallContainer} from "./Wall/ProfileWallContainer";
import {ProfileType} from "../../Redux/profileReducer";

export type PropsType={
    profile: ProfileType
}

export function Profile(props:PropsType) {
    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile}/>
            <ProfileWallContainer />
        </div>
    )
}

