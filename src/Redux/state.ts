import {reRender} from "./../render"
import {v1} from "uuid";

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
    newPostText:string
}

export let state: AppStateType = {
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
    newPostText:"it-kamasutra.com"
}


export function addPost(postText: string) {
    let newPost = {id: v1(), text: postText}
    state.postPage.unshift(newPost)
    reRender(state)
}

export function updateNewPostText(newText: string) {
    state.newPostText=newText
    reRender(state)
}