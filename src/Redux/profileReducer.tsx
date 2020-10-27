import {v1} from "uuid";
import {usersAPI} from "../API/api";
import {Dispatch} from "redux";

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
}
export type PostReducerAT =
    AddPostAT | SetUserProfileAT | DeletePostAT

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
    }

}

export const profileReducer = (state: ProfilePageType = initialState, action: PostReducerAT) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [{id: v1(), text: action.newPostText}, ...state.posts]
            //stateCopy.newPostText = ""
            return stateCopy
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }

        default :
            return state
    }
}
//--------------------------------------ADD-POST----------------------------------
const ADD_POST = "ADD-POST"
export type AddPostAT = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostAT =>
    ({
        type: ADD_POST,
        newPostText: newPostText
    })
//--------------------------------------DELETE-POST----------------------------------
const DELETE_POST = "DELETE_POST"
export type DeletePostAT = {
    type: typeof DELETE_POST
    postId: string
}
export const deletePost = (postId: string): DeletePostAT =>
    ({
        type: DELETE_POST,
        postId: postId
    })
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
//-----------------------------------THUNK-SET-USER-PROFILE--------------------------
export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {

    let response = await usersAPI.getProfileId(userId)
    dispatch(setUserProfile(response))
}
