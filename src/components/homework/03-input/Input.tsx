import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {v1} from "uuid";


export function Input() {
    let [name, setHi] = useState("")

    let [newNameArr, setNewNameArr] = useState([
        {id: "1", name: 'one'},
        {id: "2", name: 'two'}
    ])

    function addName() {
        debugger
        alert('hi')
        let newName = {id: v1(), name: name}

        let newArr = [newName, ...newNameArr]
        setNewNameArr(newArr)
        setHi('')
    }


    function takeValue(e: ChangeEvent<HTMLInputElement>) {
        setHi(e.currentTarget.value)
    }

    function sayHy(event: KeyboardEvent<HTMLInputElement>) {

        if (event.key === "Enter") {
            addName()
        }
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={takeValue}
                onKeyPress={sayHy}
            />
            <button onClick={addName}>OK</button>
            <div>
                {
                    newNameArr.map((user) => {
                        return <div key={user.id}>
                            <p>{user.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}