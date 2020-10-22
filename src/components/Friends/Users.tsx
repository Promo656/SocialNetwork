import React from "react";
import s from "./Friends.module.css";
import {FriendType} from "../../Redux/friendsReducer";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../Redux/profileReducer";

export type PropsType = {
    users: Array<FriendType>
    pageSize: number
    TotalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingProgressButton: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

export function Users(props: PropsType) {

    let pagesCount = Math.ceil(props.TotalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => {
                return <span onClick={() => {
                    debugger
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.number : ""}> {p} </span>
            })}

            {props.users.map((u) =>
                <div key={u.id} className={s.userContainer}>
                    <div className={s.followlogo}>
                        <div className={s.logo}>
                            <NavLink to={"/profile/" + u.id}>
                                <img className={s.photo}
                                     src="https://avatars.mds.yandex.net/get-pdb/1605413/6f40644e-8150-4bd6-a28c-9a6ce0f22fd7/s1200?webp=false"
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div className={s.follow}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some((id) => id === u.id)}
                                          onClick={() => {
                                              props.unFollowTC(u.id)
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id) => id === u.id)}
                                          onClick={() => {
                                              props.followTC(u.id)
                                          }}>Follow</button>
                            }
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
                </div>)
            }
        </div>
    )
}