import React from "react";
import {MyInput} from "../../Common/MyInput/Myinput";
import {MyButton} from "../../Common/MyButton/MyButton";
import {MyCheckBox} from "../../Common/MyCheckBox/MyCheckBox";
import s from "./Common.module.css"


export function Common() {
return (
    <div className={s.item}>
        <MyInput placeholder="Write something" />
        <MyButton btnName={"Button"}/>
        <MyCheckBox />
    </div>
)
}