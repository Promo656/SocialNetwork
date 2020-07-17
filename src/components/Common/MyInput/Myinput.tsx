import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Myinput.module.css"

type InputType = {
    placeholder?: string
    type?: string
    value?: string
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export function MyInput(props: InputType) {
    return (
        <input
            className={s.input}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}/>
    )
}