import {v1} from "uuid";
import {AddPostActionType, postReducer, UpdateNewPostTextActionType} from "./postReducer";
import {AddMessageActionType, chatReducer, UpdateNewMessageTextActionType} from "./chatReducer";
import {AddFriendActionType, friendsReducer, UpdateNewFriendTextActionType} from "./friendsReducer";
import {AddGroupActionType, groupReducer, UpdateNewGroupTextActionType} from "./groupsReducer";


//-----------------------------------START CREATE TYPES-------------------------------------
export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    MessageText: string
}
export type ChatPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type PostType = {
    id: string
    text: string
}
export  type PostPageType = {
    newPostText: string
    posts: Array<PostType>
}
export type FriendType = {
    id: string
    name: string
}
export type FriendsPageType = {
    friends: FriendType[]
    newFriendsText: string
}
export type GroupType = {
    id: string
    name: string
}
export type GroupsPageType = {
    groups: GroupType[]
    newGroupText: string
}
export type AppStateType = {
    chatPage: ChatPageType
    postPage: PostPageType
    friendsPage: FriendsPageType
    groupPage: GroupsPageType
}
export type StoreType = {
    _state: AppStateType
    _callSubscriber: (state: AppStateType) => void
    getState: () => AppStateType
    subscribe: (observer: (state: AppStateType) => void) => void
    dispatch: (action: any) => void
}
export type ActionType =
    AddMessageActionType
    | UpdateNewPostTextActionType
    | AddPostActionType
    | UpdateNewMessageTextActionType
    | AddFriendActionType
    | UpdateNewFriendTextActionType


//-----------------------------------END CREATE TYPES-------------------------------------

//------------------------------------------------------------------------------------------

//-----------------------------------START CREATE STORE-------------------------------------
export const store: StoreType = {
    _state: {
        chatPage: {
            dialogs: [
                {name: "Valera", id: v1()},
                {name: "Gosha", id: v1()},
                {name: "Ilya", id: v1()},
                {name: "Yura", id: v1()}
            ],
            messages: [
                {id: v1(), MessageText: "Hello"},
                {id: v1(), MessageText: "Where are you?"},
                {id: v1(), MessageText: "Brooo"},
                {id: v1(), MessageText: "Fine!!!"},
            ],
            newMessageText: ""
        },
        postPage: {
            posts: [
                {id: v1(), text: "Hello, everyone!!!!!!!!!!!!!"},
                {id: v1(), text: "It's my first site!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
            ],
            newPostText: ""
        },
        friendsPage: {
            friends: [
                {id: v1(), name: "Valera"},
                {id: v1(), name: "Gosha"},
                {id: v1(), name: "Ilya"},
                {id: v1(), name: "Yura"}
            ],
            newFriendsText: ""
        },
        groupPage: {
            groups: [
                {id: v1(), name: "Car"},
                {id: v1(), name: "Bike"},
                {id: v1(), name: "Moto"}
            ],
            newGroupText: ""
        }
    },
    _callSubscriber(state: AppStateType) {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.postPage = postReducer(this._state.postPage, action)
        this._state.chatPage = chatReducer(this._state.chatPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)


        this._callSubscriber(this._state)
    }
}
//-----------------------------------END CREATE STORE-------------------------------------









