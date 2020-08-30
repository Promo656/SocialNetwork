import React, {ChangeEvent} from "react";
import {FriendsPageType} from "../../Redux/store";


type PropsType = {
    onTextFriendChange: (text: string) => void
    addFriend: () => void
    friendsPage: FriendsPageType
}

export function Friends(props: PropsType) {

    let friendsList = props.friendsPage.friends.map((f) => <li key={f.id}>{f.name}</li>)

    let onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.target.value
        props.onTextFriendChange(text)
    }
    let addFriend = () => {
        props.addFriend()
    }

    return (
        <div>
            <input type="text"
                   value={props.friendsPage.newFriendsText}
                   onChange={onTextChange}
            />
            <input
                type="button"
                value="find"
                onClick={addFriend}
            />
            <ul>
                {friendsList}
            </ul>
        </div>
    )
}