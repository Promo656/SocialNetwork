import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import s from './Main.module.css'
import {PostType} from "../../Redux/state";
type PropsType = {
    posts:  Array<PostType>
}
export function Main(props: PropsType) {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <ProfileWall/>
        </div>
    )
}

