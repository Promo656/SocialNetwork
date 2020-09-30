import {v1} from "uuid";

export type PostType = {
    id: string
    text: string
}
export type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotosType
    contacts: ContactsType
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType
    newPostText: string
}

export type PostReducerAT =
    AddPostAT | UpdateNewPostTextAT | SetUserProfileAT

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), text: "Hello, everyone!!!!!!!!!"},
        {id: v1(), text: "It's my first site!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoo!"},
        {id: v1(), text: "Yoooo!"},
    ],
    profile: {
        userId: 1,
        aboutMe: "",
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        contacts: {
            facebook: "",
            github: "",
            instagram: "",
            mainLink: "",
            twitter: "",
            vk: "",
            website: "",
            youtube: ""
        },
        photos: {
            large: "",
            small: ""
        }
    },
    newPostText: ""

}

export const profileReducer = (state: ProfilePageType = initialState, action: PostReducerAT) => {
    switch (action.type) {
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [{id: v1(), text: state.newPostText}, ...state.posts]
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default :
            return state
    }
}
//--------------------------------------ADD-POST----------------------------------
const ADD_POST = "ADD-POST"
export type AddPostAT = {
    type: "ADD-POST"
}
export const addPost = (): AddPostAT =>
    ({type: ADD_POST})
//-----------------------------------UPDATE-NEW-POST-TEXT--------------------------
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export const onPostChange = (text: string): UpdateNewPostTextAT =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
//-----------------------------------SET-USER-PROFILE--------------------------
const SET_USER_PROFILE = "SET_USER_PROFILE"
export type SetUserProfileAT = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileAT => ({
    type: SET_USER_PROFILE,
    profile: profile
})
