import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import s from './Main.module.css'
import {addPost, AppStateType} from "../../Redux/state";
type PropsType = {
    state:AppStateType
    addPost:(postText:string)=>void
}
export function Main(props:PropsType) {

    return (
        <div className={s.container}>
            <ProfileInfo/>
            <ProfileWall state={props.state} addPost={props.addPost}/>
        </div>
    )
}

