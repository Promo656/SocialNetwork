import React, {ChangeEvent, InputHTMLAttributes} from "react";
import {ActionType, GroupsPageType} from "../../Redux/store";

type PropsType={
    groups:GroupsPageType
    dispatch:(action:ActionType)=>void
}



export function Groups(props:PropsType) {
let onTextGroupChange=(e:ChangeEvent<HTMLInputElement>)=>{
    let text=e.target.value
    let action
}

    return (
        <div>
            <input type="text"
                   value={props.groups.newGroupText}
                   onChange={onTextGroupChange}
            />
            <input
                type="button"
                value="find"
             //   onClick={}
            />
            <ul>
                {}
            </ul>
        </div>
    )
}