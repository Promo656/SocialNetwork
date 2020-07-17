import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import s from "./Input.module.css"
import {v1} from "uuid";
import {MyInput} from "../../Common/MyInput/Myinput";
import {MyButton} from "../../Common/MyButton/MyButton";

type ArrType = {
    id: string
    name: string
}

export function Input() {
    let [name, setHi] = useState("")

    let [newNameArr, setNewNameArr] = useState<Array<ArrType>>([])

    function addName() {
        if (name !== "") {
            alert(`Hi ${name}!`)
            let newName = {id: v1(), name: name}

            let newArr = [newName, ...newNameArr]
            setNewNameArr(newArr)
            setHi('')
        } else {
            alert("Enter a valid name!")
        }

    }

    function takeValue(e: ChangeEvent<HTMLInputElement>) {
        setHi(e.currentTarget.value)
    }

    function sayHi(event: KeyboardEvent<HTMLInputElement>) {

        if (event.key === "Enter") {
            addName()
        }
    }

    return (
        <div className={s.item}>
            <MyInput
                placeholder={"Write something..."}
                type="text"
                value={name}
                onChange={takeValue}
                onKeyPress={sayHi}
            />
            <MyButton btnName="OK" onClick={addName}/>
            <div>
                {
                    newNameArr.length
                }
            </div>
        </div>
    )
}