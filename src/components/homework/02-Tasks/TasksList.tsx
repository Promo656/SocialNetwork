import React from "react";
import {PropsType} from "../Homeworks";
import s from "./TasksList.module.css"


export function TasksList(props: PropsType) {

    return (
        <div className={s.item}>
            <h2>{props.title}</h2>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <button onClick={()=>{props.delTask(t.id)}}>X</button>
                            <span>{t.title}</span>
                            <span>{t.priority}</span>
                        </li>)
                })}
            </ul>
            <button onClick={()=>props.filterTasks("all")}>All</button>
            <button onClick={()=>props.filterTasks("low")}>Low</button>
            <button onClick={()=>props.filterTasks("middle")}>Middle</button>
            <button onClick={()=>props.filterTasks("high")}>High</button>
        </div>
    )
}