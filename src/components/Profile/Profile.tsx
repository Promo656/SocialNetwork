import React from "react";
import {ProfileInfo} from "./info/ProfileInfo";
import s from './Profile.module.css'
import {ProfileWallContainer} from "./Wall/ProfileWallContainer";
import {PostPageType} from "../../Redux/postReducer";

export type PropsType={
    profile: PostPageType
}

export function Profile(props:PropsType) {
    return (
        <div className={s.container}>
            <ProfileInfo />
            <ProfileWallContainer />
        </div>
    )
}

