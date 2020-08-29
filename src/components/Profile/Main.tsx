import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import {ProfileWall} from "./Wall/ProfileWall";
import s from './Main.module.css'
import {ActionType, AppStateType, StoreType} from "../../Redux/store";

/*type PropsType = {
    store:StoreType
}*/
export function Main() {

    return (
        <div className={s.container}>
            <ProfileInfo/>
            <ProfileWall />
        </div>
    )
}

