import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profileReducer";
import {PreLoader} from "../../Common/PreLoader/PreLoader";
import {ProfileStatus} from "./ProfileStatus"
import {usersAPI} from "../../../API/api";

type PropsType = {
    profile: ProfileType
}

export function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <PreLoader/>
    }

    return (
        <div className={s.container}>
            <div className={s.BGPhotoContainer}>
                <img className={s.BGPhoto}
                     src="https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg" alt=""/>
            </div>
            <div className={s.PhotoContainer}>
                <img className={s.Photo}
                     src={props.profile.photos.small}
                     alt=""/>
                     <span>{props.profile.aboutMe}</span>
            </div>
            <button onClick={()=>{
                usersAPI.uploadPhoto()
                    .then(response=>{
                        console.log(response)
                    })
            }}>upload photo</button>
            <div>{props.profile.fullName}</div>
        </div>
    )
}
