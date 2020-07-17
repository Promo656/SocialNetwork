import React from "react";
import s from "./MyButton.module.css"

type MyButtonProps={
    btnName:string
    onClick?:()=>void
}

export function MyButton(props:MyButtonProps) {
return(
    <button className={s.btn} onClick={props.onClick}>{props.btnName}</button>
)
}