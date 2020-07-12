export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
export type ChatPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type PostType = {
    id: number
    text: string
}
export type AppStateType = {
    chatPgage: ChatPageType
    postPage: Array<PostType>
}

export let state: AppStateType = {
    chatPgage: {
        dialogs: [
            {name: "Valera", id: 1},
            {name: "Gosha", id: 2},
            {name: "Ilya", id: 3},
            {name: "Yura", id: 4}
        ],
        messages: [
            {id: 1, text: "Hello"},
            {id: 2, text: "Where are you?"},
            {id: 3, text: "Bro"},
            {id: 4, text: "Fine"},
        ]
    },
    postPage:[
        {id:1,text:"Hello, everyone!!"},
        {id:2,text:"It's my first site!"},
        {id:3,text:"Yoo!"},
        {id:4,text:"Yoo!"},
        {id:5,text:"Yoo!"},
        {id:6,text:"Yoo!"},
        {id:7,text:"Yoo!"},

    ]
}