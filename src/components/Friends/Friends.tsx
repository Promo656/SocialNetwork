import React, {ChangeEvent} from "react";
import {FriendsList} from "./FriendsList/FriendsList";
import {FriendsPageType} from "../../Redux/friendsReducer";


type PropsType = {
    follow:(userId:string)=>void
    UnFollow:(userId:string)=>void
    friendsPage: FriendsPageType
}

export function Friends(props: PropsType) {

    let friendsList = props.friendsPage.users.map((u) => <FriendsList key={u.name} friendsList={u} follow={props.follow} unFollow={props.UnFollow}/>)

    return (
        <div>
            {friendsList}
        </div>
    )
}

