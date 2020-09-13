import s from "./FriendsList.module.css";
import React from "react";
import {FriendType} from "../../../Redux/friendsReducer";

type PropsType={
    friendsList:FriendType
}
export function FriendsList(props:PropsType) {
    let country=props.friendsList.location.map((l)=>l.country)
    let city=props.friendsList.location.map((l)=>l.city)

    return (
        <div className={s.userContainer}>
            <div className={s.followlogo}>
                <div className={s.logo}>
                    <img className={s.photo}
                         src="https://avatars.mds.yandex.net/get-pdb/1605413/6f40644e-8150-4bd6-a28c-9a6ce0f22fd7/s1200?webp=false"
                         alt=""/>
                </div>
                <div className={s.follow}>
                    <button className={s.btn}>{props.friendsList.followed?"Follow":"Unfollow"}</button>
                </div>
            </div>
            <div className={s.about}>
                <div className={s.nameStatus}>
                    <div className={s.name}>{props.friendsList.name}</div>
                    <div className={s.status}>{props.friendsList.status}</div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>{country}</div>
                    <div className={s.city}>{city}</div>
                </div>
            </div>
        </div>
    )
}