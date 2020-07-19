import React from "react";
import s from "./MyCheckBox.module.css"

type CheckBoxType={
    checked:boolean
}

export function MyCheckBox(props:CheckBoxType) {
return(
    <input className={s.checkBox} type="checkbox" checked={props.checked}/>
)
}