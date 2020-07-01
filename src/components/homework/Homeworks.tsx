import React from "react";
import Message from "./01-Messages/Message";
import s from "./Homeworks.module.css"

export function Homeworks() {
return(
    <div className={s.container}>
        <Message name='Egor' text='Hello, my friends! It is my first homework! ' time='13:38'/>
    </div>
)
}