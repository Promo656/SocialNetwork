import {v1} from "uuid";

export let store = {
    _state: {
        chatPgage: {
            dialogs: [
                {name: "Valera", id: v1()},
                {name: "Gosha", id: v1()},
                {name: "Ilya", id: v1()},
                {name: "Yura", id: v1()}
            ],
            messages: [
                {id: v1(), text: "Hello"},
                {id: v1(), text: "Where are you?"},
                {id: v1(), text: "Brooo"},
                {id: v1(), text: "Fine"},
            ]
        },
        postPage: [
            {id: v1(), text: "Hello, everyone!!"},
            {id: v1(), text: "It's my first site!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},
            {id: v1(), text: "Yoo!"},

        ],
        newPostText: ""
    },
    getState(){
        return this._state
    },
    _callSubscriber(state: AppStateType) {
        console.log("State changed")
    },
    addPost() {
        let newPost = {id: v1(), text: this._state.newPostText}
        this._state.postPage.unshift(newPost)
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: AppStateType) => void) {
        this._callSubscriber = observer
    }
}


export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    text: string
}
export type ChatPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type PostType = {
    id: string
    text: string
}
export type AppStateType = {
    chatPgage: ChatPageType
    postPage: Array<PostType>
    newPostText: string
}







