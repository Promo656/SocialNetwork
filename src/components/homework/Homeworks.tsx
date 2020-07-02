import React, {useState} from "react";
import Message from "./01-Messages/Message";
import s from "./Homeworks.module.css"
import {TasksList} from "./02-Tasks/TasksList";

export type PropsType = {
    title: string
    tasks: TasksListType
    delTask:(id:number)=>void
}
export type TasksListType = Array<TasksType>
export type TasksType = {
    id: number
    title: string
    priority: "low" | "middle" | "high"
}

export function Homeworks() {
    let [tasks, setTasks] = useState<TasksListType>([
        {id: 1, title: "Job", priority: "high"},
        {id: 2, title: "Relaxing", priority: "middle"},
        {id: 3, title: "Love", priority: "high"},
        {id: 4, title: "Learning", priority: "high"},
        {id: 5, title: "Walking", priority: "low"},
        {id: 7, title: "Gaming", priority: "low"}
    ])

    function delTask(id: number) {
        tasks = tasks.filter((t) => {
            return t.id !== id
        })
        setTasks(tasks)
    }


    return (
        <div className={s.container}>
            <Message name='Egor' text='Hello, my friends! It is my first homework! ' time='13:38'/>
            <TasksList title="My daily tasks" tasks={tasks} delTask={delTask}/>
        </div>
    )
}