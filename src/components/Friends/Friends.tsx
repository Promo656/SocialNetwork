import React, {ChangeEvent} from "react";
import {FriendsPageType, FriendType} from "../../Redux/friendsReducer";
import s from "./Friends.module.css";
import axios from "axios"

type PropsType = {
    addFriend: () => void
    updateNewFriendText: (text: string) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: FriendType[]) => void
    friendsPage: FriendsPageType

}

export function Friends(props: PropsType) {
    if (props.friendsPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    let onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.updateNewFriendText(text)
    }

    let addFriend = () => {
        props.addFriend()
    }

    return <div>
        <input
            type="text"
            value={props.friendsPage.newFriendsText}
            onChange={onTextChange}
        />
        <input
            type="button"
            value="Find"
            onClick={addFriend}
        />
        {props.friendsPage.users.map((u) =>
            <div key={u.id} className={s.userContainer}>
                <div className={s.followlogo}>
                    <div className={s.logo}>
                        <img className={s.photo}
                             src="https://avatars.mds.yandex.net/get-pdb/1605413/6f40644e-8150-4bd6-a28c-9a6ce0f22fd7/s1200?webp=false"
                             alt=""/>
                    </div>
                    <div className={s.follow}>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.about}>
                    <div className={s.nameStatus}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div className={s.country}>{"u.location.country"}</div>
                        <div className={s.city}>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)}
    </div>

}

