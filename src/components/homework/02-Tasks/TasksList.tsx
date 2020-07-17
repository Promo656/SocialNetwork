import React from "react";
import {PropsType} from "../Homeworks";
import s from "./TasksList.module.css"
import {MyButton} from "../../Common/MyButton/MyButton";


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
            <MyButton btnName={"All"} onClick={()=>props.filterTasks("all")}></MyButton>
            <MyButton btnName={"LOW"} onClick={()=>props.filterTasks("low")}></MyButton>
            <MyButton btnName={"MIDDLE"} onClick={()=>props.filterTasks("middle")}></MyButton>
            <MyButton btnName={"HIGH"} onClick={()=>props.filterTasks("high")}></MyButton>
        </div>
    )
}