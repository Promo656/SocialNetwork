import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import s from './Profile.module.css'
import {ProfileWallContainer} from "./Wall/ProfileWallContainer";

export function Profile() {
    return (
        <div className={s.container}>
            <ProfileInfo />
            <ProfileWallContainer />
        </div>
    )
}

