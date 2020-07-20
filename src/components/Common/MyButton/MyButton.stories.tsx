import React from "react";
import s from "./MyButton.module.css"


export default {
    title: 'MyButton',
    component: MyButton,
};

export function MyButton() {
return(
    <button className={s.btn}>Hello</button>
)
}








