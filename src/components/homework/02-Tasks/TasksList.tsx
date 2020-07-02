import React from "react";
import {PropsType} from "../Homeworks";


export function TasksList(props: PropsType) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <button onClick={()=>{props.delTask(t.id)}}>X</button>
                            <span>{t.title}</span>->
                            <span>{t.priority}</span>
                        </li>)
                })}
            </ul>
            <button>Low</button>
            <button>Middle</button>
            <button>High</button>
        </div>
    )
}