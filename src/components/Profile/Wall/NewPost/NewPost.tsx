import React from "react";
import s from "./NewPost.module.css"

export function NewPost() {
    return (
        <section>
            <input className={s.placeholder} type="text" placeholder='your news...'/>
            <input className={s.button} type="submit"/>
        </section>
    )
}