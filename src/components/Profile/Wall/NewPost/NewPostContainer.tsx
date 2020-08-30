import React from "react";
import {AppStateType} from './../../../../Redux/store'
import {NewPost} from "./NewPost";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/postReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";

let mapStateToProps=(state:AppStateType)=>{
    return {
        postPage:state.postPage
    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        onPostChange:(text:string)=>{
            dispatch(updateNewPostActionCreator(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}

export const NewPostContainer=connect(mapStateToProps,mapDispatchToProps)(NewPost)
