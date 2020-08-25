import {ActionType, FriendsPageType} from "./store";
import {v1} from "uuid";

let itialState={
    friends:[
        {id:v1(),name:"Valera"},
        {id:v1(),name:"Gosha"},
        {id:v1(),name:"Ilya"},
        {id:v1(),name:"Yura"}
    ],
    newFriendsText:""
}

export const friendsReducer=(state:FriendsPageType=itialState, action:ActionType)=>{
    switch (action.type){

    }
}
//--------------------------------------ADD-FRIEND----------------------------------
const ADD_FRIEND="ADD-FRIEND"
export type AddFriendActionType={
    type: "ADD-FRIEND"
    newText:string
}
export const addFriendActionCreator=(text:string):AddFriendActionType=>
    ({type:ADD_FRIEND,newText:text})