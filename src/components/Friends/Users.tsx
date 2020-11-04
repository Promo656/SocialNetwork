import React from "react";
import s from "./Friends.module.css";
import {FriendType} from "../../Redux/friendsReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";


export type PropsType = {
    users: Array<FriendType>
    pageSize: number
    totalUsersCount: number
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

    return (
        <div>
            <Paginator
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
            />
            <User
                users={props.users}
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                follow={props.follow}
                unFollow={props.unFollow}
                followingProgressButton={props.followingProgressButton}
                followingInProgress={props.followingInProgress}
                followTC={props.followTC}
                unFollowTC={props.unFollowTC}
            />
        </div>
    )
}