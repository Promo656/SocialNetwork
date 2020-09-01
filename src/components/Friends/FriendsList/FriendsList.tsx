import s from "./FriendsList.module.css";
import React from "react";
import {FriendsPageType} from "../../../Redux/store";

type PropsType={
    friendsList:FriendsPageType
}
export function FriendsList(props:PropsType) {
    let name=props.friendsList.friends.map((f)=>f.name)

    return (
        <div className={s.userContainer}>
            <div className={s.followlogo}>
                <div className={s.logo}>
                    <img className={s.photo}
                         src="https://avatars.mds.yandex.net/get-pdb/1605413/6f40644e-8150-4bd6-a28c-9a6ce0f22fd7/s1200?webp=false"
                         alt=""/>
                </div>
                <div className={s.follow}>
                    <button className={s.btn}>Follow</button>
                </div>
            </div>
            <div className={s.about}>
                <div className={s.nameStatus}>
                    <div className={s.name}>Eg</div>
                    <div className={s.status}>Hi,Iam DEV</div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>Russia</div>
                    <div className={s.city}>Moscow</div>
                </div>
            </div>
        </div>
    )
}