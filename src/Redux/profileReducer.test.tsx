import React from "react";
import {v1} from "uuid";
import {addPost, deletePost, ProfilePageType, profileReducer} from "./profileReducer";

let initialState: ProfilePageType = {
    posts: [
        {id: "1", text: "Hello, everyone!!!!!!!!!"},
        {id: '2', text: "It's my first site!"},
        {id: "3", text: "Yoo!"}
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

describe("profileReducer test", () => {
    it("new post should be added", () => {
        let action = addPost("IT-Kamasutra")

        let newState = profileReducer(initialState, action)

        expect(newState.posts.length).toBe(4)
    })

    it("new post name should be IT-Kamasutra", () => {
        let action = addPost("IT-Kamasutra")

        let newState = profileReducer(initialState, action)

        expect(newState.posts[0].text).toBe("IT-Kamasutra")

    })

    it("after deleting length of post should be decrement", () => {
        let action = deletePost("6")

        let newState = profileReducer(initialState, action)

        expect(newState.posts.length).toBe(3)

    })
})
