import React, {ChangeEvent, useState, KeyboardEvent} from "react";


export function Input() {
    let [hi, setHi] = useState("")

    function takeName(nn:string) {
let newName={id:v1()}
    }

    function takeValue(e: ChangeEvent<HTMLInputElement>) {
        setHi(e.currentTarget.value)
    }

    function sayHy(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            alert(`Hello ${hi}!`)
            setHi("")
        }
    }


    return (
        <div>
            <input
                type="text"
                value={hi}
                onChange={takeValue}
                onKeyPress={sayHy}
            />
            <button onClick={}>OK
            </button>
        </div>
    )
}
