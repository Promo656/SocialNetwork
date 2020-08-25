import React, {ChangeEvent} from "react";
import {Button, TextField} from "@material-ui/core";
import {ActionType, AppStateType, FriendsPageType, FriendType} from "../../Redux/store";
import {addFriendActionCreator} from "../../Redux/friendsReducer";

type PropsType = {
    friends: FriendsPageType
    dispatch: (action: ActionType) => void
}

export function Friends(props: PropsType) {

    let friendsList = props.friends.friends.map((f) => <li key={f.id}>{f.name}</li>)

    let onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.target.value
        let action = addFriendActionCreator(text)
        props.dispatch(action)
    }
    let addFriend = () => {

    }

    return (
        <div>
            <input type="text"
                   value={props.friends.newFriendsText}
                   onChange={onTextChange}
            />
            <input
                type="Button"
                onClick={addFriend}
            />
            <ul>
                {friendsList}
            </ul>
        </div>
    )
}