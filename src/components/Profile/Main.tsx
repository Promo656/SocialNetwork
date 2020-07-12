import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import s from './Main.module.css'
import {AppStateType, PostType} from "../../Redux/state";
type PropsType = {
    state:AppStateType
}
export function Main(props:PropsType) {

    return (
        <div className={s.container}>
            <ProfileInfo/>
            <ProfileWall state={props.state}/>
        </div>
    )
}

