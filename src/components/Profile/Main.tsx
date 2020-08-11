import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import s from './Main.module.css'
import {ActionType, AppStateType} from "../../Redux/store";
type PropsType = {
    state:AppStateType
    dispatch: (action: ActionType) => void
}
export function Main(props:PropsType) {

    return (
        <div className={s.container}>
            <ProfileInfo/>
            <ProfileWall
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

