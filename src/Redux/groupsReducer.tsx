import {v1} from "uuid";
import {ActionType, AppStateType, GroupsPageType} from "./store";

let initialState = {
    groups: [
        {id: v1(), name: "Car"},
        {id: v1(), name: "Bike"},
        {id: v1(), name: "Moto"}
    ],
    newGroupText: ""
}

export const groupReducer = (state: GroupsPageType = initialState, action: ActionType) => {

}



const ADD_GROUP = "ADD-GROUP"
export type AddGroupActionType = {
    type: string
}
export const addGroupActionCreator = (): AddGroupActionType => ({
    type: ADD_GROUP
})

//-----------------------------------UPDATE-NEW-GROUP-TEXT---------------------------
const UPDATE_NEW_GROUP_TEXT = "UPDATE-NEW-GROUP-TEXT"
export type UpdateNewGroupTextActionType = {
    type: string
    newText: string
}
export const updateNewGroupActionCreator = (text: string): UpdateNewGroupTextActionType =>
    ({type: UPDATE_NEW_GROUP_TEXT, newText: text})