import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import s from './Main.module.css'
import {ProfileWallContainer} from "./Wall/ProfileWallContainer";

export function Main() {
    return (
        <div className={s.container}>
            <ProfileInfo />
            <ProfileWallContainer />
        </div>
    )
}

